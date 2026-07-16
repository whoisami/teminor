# Teminor — Repository Çalışma Kuralları

Teminor, 15-100 çalışanlı KOBİ'ler için dış kaynaklı satın alma departmanı ve
tedarik yönetimi hizmeti sunan bir şirkettir. Bu depo, teminor.com kurumsal
web sitesinin kaynak kodunu içerir.

## Strategic Sources

Bu repo, kod dışında bir stratejik hafıza katmanı da içerir. Herhangi bir
stratejik, mesajlaşma, operasyon veya SEO kararı verilirken aşağıdaki
kaynaklar bu öncelik sırasıyla okunur:

1. `docs/strategy/00-company-constitution.md`
2. `decisions/decision-log.md` (en güncel kayıtlar)
3. `docs/strategy/01-master-strategy.md`
4. `docs/strategy/02-messaging-guide.md`
5. `docs/strategy/03-website-blueprint.md`
6. `docs/strategy/04-go-to-market.md`
7. `docs/strategy/05-decision-principles.md`
8. `docs/operations/*`
9. `docs/seo/*`
10. Mevcut teknik ve SEO dosyaları (bu dosyanın "Teknik Özet" bölümü,
    `SEO_SCORE.md`, `seo-backlog.md`, `SEO_SEARCH_MAP.md`,
    `SEO_GROWTH_PLAN.md`, `.claude/agents/seo-agent.md`)

**Çelişki halinde:** Şirket Anayasası, en güncel Decision Log kaydı,
ardından Master Strategy üstün kabul edilir.

## Değişmez Kurallar

- Teminor bir yazılım, pazar yeri, broker veya tedarikçi kataloğu değildir.
- Teminor, 20–250 çalışanlı işletmeler için dış kaynak satın alma
  departmanı/kapasitesidir.
- Ana değer önerisi: "Satın alma iş yükünü biz üstleniyoruz. Kontrol ve
  nihai karar sizde kalıyor."
- Kurumsal hedef pazar Türkiye genelidir.
- İlk 90 günlük satış odağı İzmir, Manisa, Aydın, Denizli ve Uşak'tır.
- Müşterinin yazılı kurumsal e-posta onayı olmadan sipariş verilmez.
- Kanıtlanamayan tasarruf, garanti, müşteri sayısı veya başarı iddiası
  kullanılmaz.
- Web sitesi çalışmaları bir yeniden tasarım değildir; görsel yapı korunur.
- Tasarım değişikliği yalnızca açık kullanıcı onayıyla yapılır.
- Operasyon dashboard'u yalnızca Teminor'un iç kullanımı içindir.
- Kritik kayıtlar soft-delete veya arşivleme mantığıyla korunur.
- Her önemli stratejik değişiklik Decision Log'a yazılır.

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

## Ticari Hedef (Business Objective)

Teminor'un amacı **trafik artırmak değildir.** Teminor'un amacı şunları
üretmektir:

- Nitelikli iletişim formu doldurma (qualified lead)
- WhatsApp görüşmesi başlatma
- Telefon görüşmesi başlatma
- RFQ (satın alma talep formu) gönderimi
- Satın alma danışmanlığı talebi

SEO, yalnızca bu hedeflere hizmet ettiği ölçüde değerlidir. Sıralama,
trafik veya "SEO puanı" artışı — dönüşüme katkısı olmadan — kendi
başına bir amaç değildir.

### Ideal Customer Profile (ICP)

seo-agent, içerik/metadata/internal-linking kararlarını verirken şu
karar vericileri hedef alır — bir değişikliğin "kime hizmet ettiği"
sorusu her zaman bu listeyle karşılaştırılır:

- Genel Müdür
- Satın Alma Müdürü
- Operasyon Müdürü
- Üretim Müdürü
- Fabrika Sahibi
- Catering Firması Sahibi
- Temizlik Firması Sahibi
- Tesis Yönetim Firması

### Success Metrics (öncelik sırası)

1. Qualified Lead
2. RFQ
3. Contact Form
4. Phone Click
5. WhatsApp Click
6. Organic Conversion Rate
7. Organic Traffic
8. Keyword Ranking

Bu sıralama bağlayıcıdır: bir değişiklik yalnızca #7 (Organic Traffic)
veya #8 (Keyword Ranking)'i iyileştirip #1-6'ya hiçbir katkısı yoksa,
düşük öncelikli sayılır — HIGH RISK/HIGH öncelik olarak sınıflandırılmaz.

### SEO Decision Rule

Her değişiklik önerisinden önce şu 3 soru sorulur:

1. Bu değişiklik gerçek satın alma karar vericisine (yukarıdaki ICP'ye)
   değer katıyor mu?
2. Bu değişiklik dönüşüm ihtimalini (Success Metrics'ten birini)
   artırıyor mu?
3. Bu değişiklik yalnızca Google için mi yapılıyor?

**3. sorunun cevabı "Evet" ise değişiklik uygulanmaz.** Bu kural, spam
SEO/keyword stuffing/doorway page yasağıyla aynı bağlayıcılıkta —
CLAUDE.md'nin "Asla" listesindeki maddelerle birlikte okunmalıdır.

## SEO Agent — Continuous Optimization Mode

Bu repo, `.claude/agents/seo-agent.md` içinde tanımlı kalıcı bir SEO
ajanı tarafından takip edilir. **SEO Sprint #5'ten (Growth Intelligence)
itibaren seo-agent artık "sprint" modunda çalışmıyor — kalıcı olarak
Continuous Optimization Mode'a geçti.** Bu, bir geliştirme akışı değil,
bir ölçüm/önceliklendirme döngüsüdür.

### Bu modda asla yapılmaz

- Yeni "SEO Sprint #N" başlığıyla büyük bir çalışma paketi açmak
- Yeni bir yönetim dosyası oluşturmak (mevcut 4 dosya — `SEO_SCORE.md`,
  `seo-backlog.md`, `SEO_SEARCH_MAP.md`, `SEO_GROWTH_PLAN.md` — yeterli,
  bunlara güncelleme dışında yenisi eklenmez)
- Büyük refactor yapmak
- Büyük içerik üretmek (yeni blog yazısı, sayfa metni yeniden yazımı vb.)
- Gerekmedikçe yeni sayfa önermek

### Haftalık döngü

1. Search Console verilerini analiz et (erişim/veri varsa — yoksa
   "Data Required" olarak bırak, varsayım yapma)
2. GA4 dönüşümlerini analiz et
3. `SEO_SCORE.md` güncelle
4. `seo-backlog.md` güncelle
5. ICE skorlarını yeniden hesapla (`SEO_GROWTH_PLAN.md`)
6. En yüksek etkili **en fazla 2** LOW RISK öneriyi sun ve uygula
7. `npm run build`
8. `npm run lint`
9. Commit oluştur
10. Push için kullanıcı onayı iste

### Çalışma prensibi

- Trafik değil **dönüşüm** odaklı çalış (bkz. "Ticari Hedef" → Success
  Metrics).
- Önce mevcut sayfaları geliştir — yeni sayfa/içerik gerekmedikçe
  önerilmez.
- Veri olmadan tahmin yapma; veri yoksa "Data Required" işaretle.
- Her öneriyi gerçek metriklerle destekle (GA4 event verisi, Search
  Console verisi varsa; yoksa kod/içerik kanıtına dayalı, açıkça
  "varsayım" olarak işaretlenmiş çıkarım).

Bu döngü, kullanıcı tarafından manuel olarak tetiklenir (otomatik/cron
tetikleme yoktur). Detaylar için `.claude/agents/seo-agent.md` dosyasına
bakılmalıdır — 4 yönetim dosyasının (`SEO_SCORE.md`, `seo-backlog.md`,
`SEO_SEARCH_MAP.md`, `SEO_GROWTH_PLAN.md`) içeriği ve amacı önceki
sprint'lerde tanımlandığı gibi değişmeden kalıyor, yalnızca güncelleme
döngüsü değişti.
