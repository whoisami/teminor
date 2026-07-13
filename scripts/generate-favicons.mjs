// One-off script to generate favicon assets from the Teminor icon mark.
// Run with: node scripts/generate-favicons.mjs
// Requires `sharp` (devDependency). Outputs land in /public.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "teminor_icon.png");
const publicDir = path.join(root, "public");

async function main() {
  await mkdir(publicDir, { recursive: true });

  // apple-touch-icon.png (180x180)
  await sharp(source)
    .resize(180, 180, { fit: "cover" })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  // favicon PNGs at required sizes, then packed into favicon.ico
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((size) =>
      sharp(source).resize(size, size, { fit: "cover" }).png().toBuffer()
    )
  );

  // Minimal ICO container: pack the PNG buffers into a valid .ico file.
  const ico = buildIco(buffers, sizes);
  const { writeFile } = await import("node:fs/promises");
  await writeFile(path.join(publicDir, "favicon.ico"), ico);

  // Also drop a 32x32 png favicon for modern browsers via <link>.
  await sharp(source)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toFile(path.join(publicDir, "icon-32.png"));

  console.log("Favicons generated in /public");
}

function buildIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offsets = [];
  let offset = headerSize + dirEntrySize * numImages;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(numImages, 4);

  const dirEntries = pngBuffers.map((buf, i) => {
    const entry = Buffer.alloc(dirEntrySize);
    const size = sizes[i] === 256 ? 0 : sizes[i];
    entry.writeUInt8(size, 0); // width
    entry.writeUInt8(size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // image size
    entry.writeUInt32LE(offsets[i], 12); // offset
    return entry;
  });

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
