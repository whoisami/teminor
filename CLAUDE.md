# Teminor — Repository Çalışma Kuralları

Teminor, 15-100 çalışanlı KOBİ'ler için dış kaynaklı satın alma departmanı ve
tedarik yönetimi hizmeti sunan bir şirkettir. Bu depo, teminor.com kurumsal
web sitesinin kaynak kodunu içerir.

## Teknik Özet (koddan doğrulanmıştır)

- **Framework:** Next.js 16 (App Router), statik export (`next.config.ts` →
  `output: "export"`). Build çıktısı `out/` (git tarafından ignore edilir).
- **Stil:** Tailwind CSS v3 (`tailwind.config.ts`).
- **Blog:** `content/blog/*.mdx`, `gray-matter` ile frontmatter parse edilir,
  `next-mdx-remote` ile render edilir (`lib/blog.ts`).
- **Route'lar:** `/`, `/neden-teminor`, `/hizmetler`, `/blog`, `/blog/[slug]`,
  `/iletisim`, `/gizlilik`.
- **SEO altyapısı:** her sayfada `generateMetadata`/`metadata` export +
  `alternates.canonical` + Open Graph; `app/sitemap.ts` ve `app/robots.ts`
  Next.js metadata route konvansiyonuyla üretiliyor; JSON-LD `Organization` +
  `LocalBusiness` ana sayfada, `BlogPosting` blog detayında, `ContactPage`
  iletişim sayfasında.
- **İletişim formu:** `functions/api/contact.ts` — Cloudflare Pages Function,
  `RESEND_API_KEY` secret'ı ile Resend API üzerinden `info@teminor.com`'a
  e-posta gönderir. Honeypot alanı ile spam koruması var.
- **Deploy:** GitHub reposu (`whoisami/teminor`, `main` branch) → Cloudflare
  Pages'e bağlı, her `main` push'unda otomatik build/deploy. GitHub Actions
  workflow yok — CI/CD tamamen Cloudflare Pages tarafında.
- **Analytics / Search Console:** Şu an repoda hiçbir analytics entegrasyonu
  (GA4, GTM) veya Search Console doğrulama etiketi/dosyası yok.

## Asla

- Spam SEO yapma (gizli metin, gizli link, cloaking).
- Keyword stuffing yapma — anahtar kelimeler her zaman doğal cümle akışında
  kullanılır.
- Doorway page (yalnızca arama motoru için üretilmiş, kullanıcıya değer
  katmayan sayfa) oluşturma.
- Sahte yorum, referans veya vaka çalışması üretme.
- Sahte veya doğrulanamayan structured data (schema.org) alanı ekleme —
  örn. olmayan bir `aggregateRating`, `review` veya doğrulanmamış `priceRange`.
- Doğrulanmamış ticari iddia yazma (uydurma istatistik, sayı, müşteri sayısı,
  "%X tasarruf" gibi kanıtsız rakamlar). Gerçek veri yoksa niteliksel ifade
  kullanılır, placeholder görünümlü ifade ("veri bekleniyor" vb.) kalıcı
  içerikte bırakılmaz.
- Yapay/satın alınmış backlink önerme veya link çiftlikleri (PBN) önerme.

## Her Zaman

1. Önce analiz et — değişiklik yapmadan önce ilgili dosyaları oku, mevcut
   davranışı koddan doğrula, varsayımda bulunma.
2. Sonra değişiklik yap — kapsamı görevle sınırlı tut, gereksiz refactor
   yapma.
3. `npm run build` çalıştır ve başarılı olduğunu doğrula.
4. `npm run lint` çalıştır ve başarılı olduğunu doğrula.
5. SEO kontrolü yap: değişiklik canonical/metadata/sitemap/robots/structured
   data'yı etkiliyorsa, üretilen çıktıyı (build sonrası `out/` veya ilgili
   route dosyası) gözden geçir.

## Yüksek Riskli Değişiklikler — Kullanıcı Onayı Zorunlu

Aşağıdaki değişiklikler, kullanıcıdan açık onay alınmadan **asla**
uygulanmaz:

- URL / route yapısı değişikliği
- `robots.txt` (`app/robots.ts`) değişikliği
- Canonical URL değişikliği
- Redirect ekleme/değiştirme
- `sitemap.ts` mantığının değişmesi (hangi route'ların dahil edildiği,
  frekans/öncelik mantığı vb.)
- Route/sayfa silme

## Git Kuralları

- Değişiklik yapmadan önce `git status` ile mevcut durumu kontrol et.
- Commit oluşturabilirsin (anlamlı, açıklayıcı mesajla).
- **Push yapmadan önce mutlaka kullanıcı onayı iste.** Bu depo canlı
  teminor.com sitesine otomatik deploy olan `main` branch'e bağlıdır; push,
  doğrudan production'ı etkiler.
- Force push yapma.
- `--no-verify` veya benzeri hook atlama bayrakları kullanma.

## Ticari Bağlam

Her SEO/içerik önerisi şu hedeflerden en az birine hizmet etmelidir:
Google'da daha iyi sıralama, daha fazla organik trafik, daha yüksek
dönüşüm, daha iyi kullanıcı deneyimi veya daha iyi teknik SEO. Sadece
"SEO puanı" yükseltmek için yapılan, kullanıcıya veya işe gerçek değer
katmayan değişiklik yapılmaz.
