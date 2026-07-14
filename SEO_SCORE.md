# Teminor — SEO Score

Bu dosya, `seo-agent`'in her çalışmasında otomatik güncellediği canlı bir
puan kartıdır. Puanlar 0-10 arasındadır ve doğrudan repodaki koddan
doğrulanarak verilir — tahmine dayalı puan verilmez.

**Son güncelleme:** 2026-07-14
**Değerlendiren:** seo-agent (ilk baseline değerlendirmesi)
**Kapsam:** `main` branch, commit `16f066f` sonrası durum

---

## Technical SEO — 8/10

Next.js 16 App Router, statik export (`output: "export"`). Route yapısı
temiz, küçük harf, tire ayrımlı, query param yok (`/`, `/neden-teminor`,
`/hizmetler`, `/blog`, `/blog/[slug]`, `/iletisim`, `/gizlilik`).
`app/sitemap.ts` ve `app/robots.ts` Next.js metadata route konvansiyonuyla
üretiliyor, `robots.txt` yalnızca `/api/`'yi disallow ediyor ve sitemap'e
doğru referans veriyor. Eksik: build sonrası gerçek bir Lighthouse/PSI
taraması hiç çalıştırılmamış; GitHub Actions üzerinden otomatik SEO/CI
kontrolü yok (deploy tamamen Cloudflare Pages'in otomatik build'ine bağlı).

## Metadata — 8/10

Her sayfada `metadata`/`generateMetadata` export'u, `alternates.canonical`,
Open Graph (title/description/url/type) tutarlı şekilde tanımlı. Root
layout'ta `metadataBase`, title template (`%s | Teminor`), Twitter Card
(`summary_large_image`) mevcut. Eksik: sayfa bazlı OG image yok (tüm
sayfalar layout'taki tek lockup görselini miras alıyor), blog yazılarının
kendi `ogImage`'i frontmatter'da tanımlı olsa da kullanılmıyor mu
doğrulanmadı.

## Structured Data — 6/10

Ana sayfada `Organization` + `LocalBusiness` (`@graph` ile), blog
detayında `BlogPosting`, iletişimde `ContactPage` JSON-LD mevcut ve
doğru `@id`/`@type` yapısı kullanılmış. Bulgu: `LocalBusiness.priceRange:
"$$"` doğrulanmamış/uydurma bir ticari iddiadır — CLAUDE.md kuralına
aykırı, düzeltilmesi gerekiyor (bkz. `seo-backlog.md`, LOW). Ayrıca
`address.addressLocality: "İzmir"` gerçek bir ofis adresini yansıtmıyor
olabilir, doğrulanmalı.

## Internal Linking — 4/10

4 blog yazısının hiçbiri birbirine link vermiyor; her biri yalnızca
`/iletisim` veya `/hizmetler`'e link veriyor. Hiçbir blog yazısından
`/neden-teminor`'a link yok. Ana sayfa blog preview'u ve nav/footer
linkleri dışında sayfalar arası anlamlı, bağlamsal internal link neredeyse
yok. Bu, topical authority ve crawl derinliği açısından en zayıf alan.

## Performance — 6/10 (kısmen doğrulanmamış)

`next/font` ile Fraunces + Inter self-hosted/optimize ediliyor,
`font-display` varsayılan Next.js davranışına bağlı. `images.unoptimized:
true` (statik export zorunluluğu) — mevcut görseller (logo, favicon)
küçük olduğu için düşük risk. Framer Motion scroll-reveal kullanılıyor,
ağır değil. Eksik: hiç gerçek Lighthouse/Core Web Vitals ölçümü
yapılmadı, bu puan kod incelemesine dayalı bir tahmindir, ölçülmüş bir
veri değildir.

## Accessibility — 7/10

Dekoratif SVG'ler (`BenefitIcons`, `HeroTexture`) doğru şekilde
`aria-hidden="true"` ile işaretlenmiş. WhatsApp butonu ve mobil menü
butonu `aria-label` içeriyor. İletişim formunda her alan için `<label
htmlFor>` var, honeypot alanı `aria-hidden` + `tabIndex={-1}` ile ekran
okuyuculardan doğru şekilde gizlenmiş. `lang="tr"` root'ta tanımlı. Eksik:
skip-to-content linki yok, başlık hiyerarşisi (`h1`→`h2`→`h3`) ve renk
kontrastı (navy `#1B2A41` / gold `#9C7A34` kombinasyonları) manuel/otomatik
araçla doğrulanmadı.

## Analytics — 0/10

Repoda hiçbir analytics veya arama konsolu entegrasyonu yok: GA4 yok, GTM
yok, Search Console doğrulama etiketi veya dosyası yok. Şu an organik
trafik, sorgu veya dönüşüm verisi hiçbir şekilde ölçülemiyor — SEO
çalışmalarının etkisi görünür değil.

## Content — 7/10

4 blog yazısı orijinal, tutarlı tonda, uydurma istatistik içermiyor,
her biri net bir arama niyetine (stratejik önem, ticari değer, KOBİ
outsourcing, kurumsal ekip desteği) hitap ediyor. Hizmetler sayfası
gerçek, kullanıcı onaylı paket bilgileriyle güncel. Eksik: blog hacmi
düşük (4 yazı), yayın sıklığı/takvimi belli değil, uzun kuyruk anahtar
kelime kapsamı sınırlı.

---

## Overall — 5.75/10

Teknik temel (routing, metadata, sitemap/robots, structured data,
erişilebilirlik) sağlam ve Google Search Essentials'a uyumlu. En büyük
açık, ölçüm katmanının tamamen eksik olması (Analytics 0/10) — bu, diğer
tüm iyileştirmelerin etkisinin görünmez kalmasına neden oluyor. İkinci
büyük açık internal linking zayıflığı. Performance ve Accessibility
puanları kod incelemesine dayalıdır, gerçek ölçüm (Lighthouse, PSI,
Search Console) yapıldıkça bu dosya güncellenecektir.
