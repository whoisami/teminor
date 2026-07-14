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
- **Analytics:** `lib/analytics/` ve `components/analytics/` altında modüler
  bir katman var. GA4 tek aktif provider'dır (`lib/analytics/providers/
  ga4.ts`), `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable'ından
  okunur (`lib/analytics/config.ts`) — kodda hiçbir yerde hardcoded ID
  yoktur. Değişken tanımlı değilse analytics tamamen devre dışı kalır,
  hiçbir script enjekte edilmez, uygulama hata vermez (bkz. `.env.example`).
  Merkezi event kataloğu `lib/analytics/events.ts`'te (`page_view`,
  `service_view`, `blog_view`, `contact_page_view`, `contact_form_submit`,
  `phone_click`, `email_click`, `whatsapp_click`, `cta_click`), tek giriş
  noktası `lib/analytics/index.ts`'teki `trackEvent`/`trackPageview`
  dispatcher'ıdır — her çağrı `try/catch` ile sarılıdır, analytics hatası
  siteyi asla kıramaz. Yeni provider (Google Ads, Meta Pixel, LinkedIn
  Insight, Microsoft Clarity) eklemek `AnalyticsProvider` arayüzünü
  uygulayan bir dosya + `providers` dizisine kayıt demektir.
- **Search Console:** DNS TXT kaydıyla zaten doğrulanmış
  (`google-site-verification=...`) — kodda ayrıca bir doğrulama
  etiketi/dosyası **eklenmemeli**, zaten gereksiz ve yanlış izlenim
  yaratır. API erişimi yok; performans verisi (query/page/clicks/
  impressions/CTR/position) yalnızca kullanıcı tarafından sağlandığında
  analiz edilir, asla uydurulmaz.

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
- Yeni bir analytics/pazarlama provider'ı ekleme (Google Ads, Meta Pixel,
  LinkedIn Insight, Microsoft Clarity, vb.) veya GA4 kurulumunun temel
  davranışını (consent, veri paylaşımı) değiştirme

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

## SEO Agent — Sürekli Ölçüm ve İyileştirme

Bu repo, `.claude/agents/seo-agent.md` içinde tanımlı kalıcı bir SEO
ajanı tarafından takip edilir. seo-agent'ın görevi yalnızca hata bulmak
değildir — repository'nin SEO durumunu **sürekli ölçmek ve geliştirmektir**.
Bunun için iki dosya kalıcı olarak tutulur ve her seo-agent çalışmasında
güncellenir:

- **`SEO_SCORE.md`** — Technical SEO, Metadata, Structured Data, Internal
  Linking, Performance, Accessibility, Analytics, Content ve Overall
  başlıkları altında, kanıta dayalı (koddan doğrulanmış), gerekçeli puan
  kartı.
- **`seo-backlog.md`** — HIGH / MEDIUM / LOW önceliğine göre sınıflanmış,
  her madde için Durum / Öncelik / Beklenen SEO etkisi / Not içeren açık
  bulgu listesi.
- **`SEO_SEARCH_MAP.md`** — her indekslenebilir route için arama niyeti,
  mevcut title/description/H1, internal linking durumu ve
  cannibalization riski envanteri. Search Console verisi sağlandığında
  bu envanterle çapraz doğrulanır.

seo-agent her çalıştığında şu döngüyü uygular: Repository Scan → SEO
Audit → Risk Analizi → LOW RISK düzeltmeleri uygula → `npm run lint` →
`npm run build` → Analytics Health kontrolü → `SEO_SCORE.md` güncelle →
`seo-backlog.md` güncelle → Git Commit hazırla → Push için kullanıcı
onayı bekle. Analytics Health kontrolü, GA4'ün aktif olup olmadığını,
Measurement ID'nin okunduğunu, event sisteminin çalıştığını ve eksik
event olup olmadığını doğrular — sonucu her sprint raporunda görünür.
Detaylar için `.claude/agents/seo-agent.md` dosyasına bakılmalıdır.
