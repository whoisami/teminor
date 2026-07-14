# Teminor — SEO Score

Bu dosya, `seo-agent`'in her çalışmasında otomatik güncellediği canlı bir
puan kartıdır. Puanlar 0-10 arasındadır ve doğrudan repodaki koddan
doğrulanarak verilir — tahmine dayalı puan verilmez.

**Son güncelleme:** 2026-07-14
**Değerlendiren:** seo-agent (SEO Sprint #3 — Search Console ve Organik Görünürlük)
**Kapsam:** `main` branch, bu sprint'te işlenen commit öncesi taban `8f3f901`
(Sprint #2'den bu yana RFQ formu, 3 yeni blog yazısı ve `/neden-teminor`
karşılaştırma tablosu SEO sprint döngüsü dışında eklendi — bu sprint bu
değişikliklerin SEO etkisini de değerlendirmeye dahil etti.)

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

## Internal Linking — 8/10 (+1)

Ana sayfadaki blog önizleme bölümünden `/blog` indeksine doğrudan link
yoktu (yalnızca tekil yazı kartları vardı) — "Tüm Yazıları Görüntüle"
linki eklendi. Blog yazılarına breadcrumb navigasyonu eklenmesi de
internal linking derinliğini artırdı. `SEO_SEARCH_MAP.md` denetiminde
tüm 13 sayfanın inbound/outbound linkleri tek tek çıkarıldı, orphan
sayfa yok. Açık kalan: 2 blog yazısı çifti (`dis-kaynak-satin-alma-
departmani-nedir` / `kobiler-icin-dis-kaynak-satin-alma`) arasında
keyword/başlık düzeyinde ciddi örtüşme tespit edildi — "İlgili Yazılar"
ile karşılıklı bağlı olsalar da net bir açı farkı sinyali zayıf; içerik
seviyesinde çözüm (yeniden odaklama) backlog'a MEDIUM olarak eklendi.

## Performance — 6/10 (değişmedi)

Bu sprintte performans kategorisinde yeni bir inceleme yapılmadı.
`@mdx-js/react` bağımlılığı hâlâ kullanılmıyor (Sprint #1'den açık).

## Accessibility — 8/10 (değişmedi)

Blog yazılarındaki yeni breadcrumb `nav`'ı `aria-label="Breadcrumb"`
içeriyor — küçük bir semantik iyileştirme, puanı değiştirecek ölçekte
değil. Skip-to-content linki ve otomatik kontrast testi hâlâ açık.

## Analytics — 6/10 (değişmedi, yeniden doğrulandı)

Sprint #2 altyapısı bu sprintte yeniden denetlendi, hiçbir regresyon
bulunmadı: env var'sız build hatasız ve script'siz, env var'lı test
build'de Measurement ID ve `send_page_view: false` (duplicate page_view
riskine karşı) doğru şekilde bundle'a gömülü, 9 event'in tamamının
gerçek çağrı noktası var (grep ile yeniden sayıldı: `PageViewTracker` 3
yerde, `TrackedAnchor kind=` 10 yerde, `TrackedCta` 3 dosyada,
`trackContactFormSubmit` 2 yerde — RFQ formu dahil), hiçbir event
parametresinde kişisel veri (e-posta/telefon/isim) gönderilmiyor —
yalnızca kategori/etiket/slug gibi kişisel olmayan değerler. Puan hâlâ
6/10: altyapı sağlam ama production'da gerçek bir Measurement ID yok,
gerçek veri akışı başlamadı.

## Content — 8/10 (+1)

Sprint #2'den bu yana blog hacmi 4 → 7 yazıya çıktı (SEO sprint döngüsü
dışında ama bu sprintte değerlendirmeye dahil edildi). Artan hacim
olumlu, ancak aynı genişleme 2 yeni cannibalization riski de getirdi
(bkz. Internal Linking ve `SEO_SEARCH_MAP.md`) — bu yüzden puan 9 değil
8. RFQ formu ve karşılaştırma tablosu, dönüşüm/kullanıcı deneyimi
açısından olumlu ama doğrudan "content" kategorisini etkilemiyor.

---

## Overall — 7.75/10 (+0.50)

Bu sprintte en büyük katkı Search Console hazırlığının uçtan uca
doğrulanması oldu (Technical SEO 8→9) ve DNS doğrulamasının zaten aktif
olduğu teyit edildi — kod tarafında ekstra bir şey yapılmasına gerek
yok. İkinci önemli katkı: `SEO_SEARCH_MAP.md` ile ilk kez tüm sitenin
sistematik arama envanteri çıkarıldı ve bu süreçte 4 somut, doğrulanabilir
LOW RISK defekt bulunup düzeltildi (title tekrarı, eksik blog→index
linki, eksik BlogPosting alanları, eksik breadcrumb). Açık kalan en
büyük iki madde: (1) LocalBusiness adresinin doğrulanması — HIGH RISK;
(2) GA4 Measurement ID + Search Console entegrasyonunun canlıya
alınması — HIGH RISK. Bu sprint ayrıca gelecekteki Search Console
verisi için veri modelini ve fırsat puanlama rubriğini (Impact/
Confidence/Effort/Risk) `.claude/agents/seo-agent.md`'ye kalıcı olarak
tanımladı.
