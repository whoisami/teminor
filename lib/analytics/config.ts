// Central analytics configuration. All values come from environment
// variables — never hardcode a measurement/pixel ID here.
//
// NEXT_PUBLIC_* variables are inlined at build time (this site is a static
// export via `output: "export"`, so there is no server runtime to read
// env vars from on each request). Set NEXT_PUBLIC_GA_MEASUREMENT_ID in:
//   - `.env.local` for local development (gitignored)
//   - Cloudflare Pages project settings -> Environment variables ->
//     Production/Preview "Build" variables (NOT a Function secret — this
//     value is public by design, it ends up in the shipped HTML/JS)

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const isGA4Enabled = Boolean(GA_MEASUREMENT_ID);
