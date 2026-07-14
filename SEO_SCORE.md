# Teminor — SEO Score

Bu dosya, `seo-agent`'in her çalışmasında otomatik güncellediği canlı bir
puan kartıdır. Puanlar 0-10 arasındadır ve doğrudan repodaki koddan
doğrulanarak verilir — tahmine dayalı puan verilmez.

## Ticari Öncelik Notu (SEO Sprint #4 — politika güncellemesi)

SEO Sprint #4, yalnızca seo-agent'ın kalıcı davranış kurallarını
güncelledi (bkz. `/CLAUDE.md` ve `.claude/agents/seo-agent.md` — "Ticari
Hedef", ICP, Success Metrics, SEO Decision Rule). **Bu sprintte yeni bir
kod denetimi yapılmadı, bu yüzden aşağıdaki kategori puanları yeniden
hesaplanmadı** — puanları uydurmadan güncellemek, ancak yeni bir audit
ile mümkündür.

Bundan sonraki her puan güncellemesinde şu ek kural geçerlidir: bir
kategorinin puanı yükseliyorsa, gerekçesi Success Metrics'ten en az
birine (Qualified Lead, RFQ, Contact Form, Phone Click, WhatsApp Click,
Organic Conversion Rate, Organic Traffic, Keyword Ranking) açıkça
bağlanmalıdır. "Daha iyi teknik SEO" gerekçesi tek başına yeterli
değildir. Aşağıdaki Sprint #1-3 puanları ve gerekçeleri, eski (trafik
ağırlıklı) lensle yazıldığı için olduğu gibi bırakıldı — geriye dönük
olarak yeniden yorumlanmadı.

**Son güncelleme:** 2026-07-15
**Değerlendiren:** seo-agent (Continuous Optimization Mode — haftalık döngü #1)
**Kapsam:** `main` branch, taban commit `5eb5c67`. Bu, Continuous
Optimization Mode'a geçildikten sonraki ilk haftalık çalıştırma — Sprint
#4/#5 yalnızca politika/analiz güncellemesiydi, kod değişikliği
içermiyordu, bu yüzden puanlar o iki turda değişmedi. Bu haftaki
döngüde `SEO_GROWTH_PLAN.md`'deki ICE tablosundan en yüksek skorlu 2 LOW
RISK madde uygulandı (aşağıda işaretli).

---

## Technical SEO — 9/10 (+1)

Next.js 16 App Router, statik export. Route yapısı temiz, 13 indekslenebilir
URL doğrulandı. Bu sprintte Search Console hazırlığı uçtan uca denetlendi:
DNS TXT kaydıyla (`google-site-verification=...`) doğrulama zaten aktif
(kod içi doğrulama etiketi eklenmedi — gereksiz olurdu), canonical domain
tüm sayfalarda `https://teminor.com` ile tutarlı (canlı sitede curl ile
doğrulandı), sitemap 13 URL'in tamamını içeriyor, robots.txt sitemap'e
doğru referans veriyor, indexability kararı tutarlı (hiçbir sayfada
noindex yok, hepsi sitemap'te). Not: Cloudflare, robots.txt'e kendi
"Managed content" AI-bot kurallarını (GPTBot/ClaudeBot/vb. disallow)
edge seviyesinde ekliyor — bu repodaki `app/robots.ts`'in dışında,
altyapı katmanında oluşuyor ve klasik Googlebot/Arama indekslemesini
etkilemiyor. Eksik: gerçek Lighthouse/PSI taraması hâlâ çalıştırılmadı.

## Metadata — 9/10 (değişmedi, 1 defekt düzeltildi)

`/neden-teminor` sayfasının `<title>`'ı **"Neden Teminor | Teminor"**
olarak render ediliyordu — base title ("Neden Teminor") + root layout
template'i ("%s | Teminor") çakışıp marka adını iki kez tekrarlıyordu
(canlı sitede doğrulandı). `title: { absolute: ... }` ile düzeltildi,
artık `og:title` ile aynı, tekrarsız metni kullanıyor. 13 sayfanın
tamamı `SEO_SEARCH_MAP.md` için tek tek incelendi, başka duplicate
title/description bulunmadı. Açık kalan: sayfa bazlı OG image hâlâ yok.

## Structured Data — 8/10 (+1)

`BlogPosting` şemasına eksik olan `mainEntityOfPage` ve `publisher`
alanları eklendi — ikisi de zaten kod tabanında doğrulanmış veriden
(`SITE_URL`, post slug'ı, ana sayfadaki `Organization` bilgisiyle aynı
`logo`/`name`) türetildi, yeni bir ticari iddia içermiyor. Blog
yazılarına görünür breadcrumb navigasyonu + `BreadcrumbList` JSON-LD
eklendi (Ana Sayfa / Blog / [Başlık]). Açık kalan:
`LocalBusiness.address.addressLocality: "İzmir"` hâlâ doğrulanmamış —
HIGH RISK, kullanıcı kararı bekliyor (bkz. rapor).

## Internal Linking — 9/10 (+1)

`SEO_GROWTH_PLAN.md`'deki en yüksek ICE'li LOW RISK madde (16.0)
uygulandı: `/hizmetler` artık `dis-kaynak-satin-alma-departmani-nedir`
yazısına, `/neden-teminor` artık `tedarikci-dolandiriciligindan-korunma-
yontemleri` yazısına bağlamsal bir cümle linkiyle bağlanıyor (canlı
build çıktısında doğrulandı). Bu, Sprint #3'ten beri açık olan
"hizmetler/neden-teminor'dan blog'a geri link yok" bulgusunu kapatıyor.
Açık kalan: 2 blog yazısı çifti (`dis-kaynak-satin-alma-departmani-nedir`
/ `kobiler-icin-dis-kaynak-satin-alma`) arasındaki keyword/başlık
örtüşmesi hâlâ çözülmedi — içerik yeniden odaklama gerektirdiği için
HIGH RISK/büyük içerik değişikliği sayılıyor, Continuous Optimization
Mode'un "büyük içerik üretme/refactor yapma" yasağı kapsamında.

## Performance — 6/10 (değişmedi)

Bu sprintte performans kategorisinde yeni bir inceleme yapılmadı.
`@mdx-js/react` bağımlılığı hâlâ kullanılmıyor (Sprint #1'den açık).

## Accessibility — 8/10 (değişmedi)

Blog yazılarındaki yeni breadcrumb `nav`'ı `aria-label="Breadcrumb"`
içeriyor — küçük bir semantik iyileştirme, puanı değiştirecek ölçekte
değil. Skip-to-content linki ve otomatik kontrast testi hâlâ açık.

## Analytics — 7/10 (+1)

`SEO_GROWTH_PLAN.md` §4'te tespit edilen en yüksek ICE'li (28.0) GA4
boşluğu kapatıldı: RFQ gönderimi artık genel `contact_form_submit`
event'ini paylaşmıyor, kendi `rfq_form_submit` event'i var
(`AnalyticsEvents.RfqFormSubmit`, `lib/analytics/events.ts` +
`components/RFQForm.tsx`) — Success Metrics'te RFQ (#2), Contact
Form'dan (#3) daha öncelikli olduğu için bu ayrım, GA4'te RFQ'yu ayrı
bir Key Event olarak işaretlemeyi mümkün kılıyor (build çıktısında
`rfq_form_submit` string'i bundle'da doğrulandı). Event kataloğu artık
10 event (9 değil). Analytics Health yeniden çalıştırıldı: env var'sız
build hatasız ve script'siz, hiçbir event parametresinde kişisel veri
yok. Puan 7'ye sınırlı kalıyor çünkü asıl darboğaz değişmedi:
production'da hâlâ gerçek bir `NEXT_PUBLIC_GA_MEASUREMENT_ID` yok
(canlı sitede `googletagmanager` script'i bulunamadı), yani bu yeni
event de dahil hiçbir event'in gerçek veri akışı yok — bu HIGH RISK,
kullanıcı aksiyonu bekliyor (bkz. backlog).

## Content — 8/10 (+1)

Sprint #2'den bu yana blog hacmi 4 → 7 yazıya çıktı (SEO sprint döngüsü
dışında ama bu sprintte değerlendirmeye dahil edildi). Artan hacim
olumlu, ancak aynı genişleme 2 yeni cannibalization riski de getirdi
(bkz. Internal Linking ve `SEO_SEARCH_MAP.md`) — bu yüzden puan 9 değil
8. RFQ formu ve karşılaştırma tablosu, dönüşüm/kullanıcı deneyimi
açısından olumlu ama doğrudan "content" kategorisini etkilemiyor.

---

## Overall — 8.0/10 (+0.25)

Continuous Optimization Mode'un ilk haftalık döngüsü, `SEO_GROWTH_PLAN.md`
ICE tablosundaki en yüksek skorlu 2 LOW RISK maddeyi uyguladı: (1)
`/hizmetler`/`/neden-teminor` → blog dönüş linkleri (Internal Linking
8→9), (2) RFQ'nun ayrı GA4 event'i olması (Analytics 6→7). Search
Console verisi bu döngüde de sağlanmadı — ilgili "Data Required"
maddeleri hâlâ açık, varsayımla doldurulmadı. Açık kalan en büyük iki
madde değişmedi: (1) LocalBusiness adresinin doğrulanması — HIGH RISK;
(2) GA4 Measurement ID + Search Console'un canlıya alınması — HIGH
RISK; bunlar olmadan Analytics/Search Console kategorileri belirli bir
tavanın üzerine çıkamaz, çünkü altyapı ne kadar sağlam olursa olsun
gerçek veri akışı yok.
