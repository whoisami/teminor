# Teminor — SEO Backlog

Bu dosya, `seo-agent`'in tespit ettiği tüm SEO bulgularının canlı listesidir.
Her çalışmada güncellenir: tamamlanan maddeler "Durum: Tamamlandı" olarak
işaretlenir, yeni bulgular ilgili öncelik başlığına eklenir. Öncelik sırası
iş etkisine göredir, teknik zorluğa göre değil.

**Son güncelleme:** 2026-07-15 (SEO Sprint #5 — Growth Intelligence, ICE skorları eklendi)

## Ticari Önceliklendirme (SEO Sprint #4)

Bu sprintten itibaren öncelik sırası artık yalnızca "iş etkisi" değil,
`/CLAUDE.md`'deki Success Metrics sıralamasına (1. Qualified Lead, 2.
RFQ, 3. Contact Form, 4. Phone Click, 5. WhatsApp Click, 6. Organic
Conversion Rate, 7. Organic Traffic, 8. Keyword Ranking) göre
belirlenir. Her açık madde aşağıda **Ticari Etki** satırıyla en çok
hizmet ettiği Success Metric'e etiketlendi. Bu sprintte yalnızca
etiketleme/politika eklendi — HIGH/MEDIUM/LOW öncelik seviyeleri, yeni
bir audit yapılmadığı için değiştirilmedi; bir sonraki teknik sprintte
bu etiketlerle yeniden değerlendirilecek.

## ICE Skorlaması (SEO Sprint #5)

Her açık maddeye artık `SEO_GROWTH_PLAN.md`'deki metodolojiyle bir
**ICE Skoru** (Impact × Confidence ÷ Effort, her boyut 1-10) eklendi.
Detaylı gerekçe ve tam fırsat tablosu `SEO_GROWTH_PLAN.md`'de — burada
yalnızca skor ve referans var. seo-agent bundan sonra her sprint'te önce
`SEO_GROWTH_PLAN.md`'yi okur, sonra bu dosyayı günceller.

---

# HIGH

## GA4 entegrasyonu

- **Durum:** Altyapı tamamlandı (SEO Sprint #2) — aktivasyon açık
- **Öncelik:** HIGH
- **ICE Skoru:** 50.0 (Impact 10 × Confidence 10 ÷ Effort 2) — bkz. `SEO_GROWTH_PLAN.md` §2
- **Ticari Etki:** Tüm Success Metrics'in (#1-8) ölçümü buna bağlı —
  GA4 olmadan Qualified Lead/RFQ/Contact Form/Phone/WhatsApp
  dönüşümlerinin hiçbiri doğrulanamaz. Listedeki en yüksek ticari
  öncelik.
- **Beklenen SEO etkisi:** Organik trafiğin, davranışın ve dönüşümün
  ölçülmesini sağlar. Ölçüm olmadan hiçbir SEO çalışmasının gerçek etkisi
  doğrulanamaz.
- **Not:** Kod tarafı bitti: `lib/analytics/` + `components/analytics/`
  modüler katmanı, `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var'ı, 9 event
  (`page_view`, `service_view`, `blog_view`, `contact_page_view`,
  `contact_form_submit`, `phone_click`, `email_click`, `whatsapp_click`,
  `cta_click`) merkezi dispatcher üzerinden bağlı, env yokken sessizce
  devre dışı. **Kalan HIGH RISK adımlar (kullanıcı onayı/aksiyonu
  gerekli):** (1) gerçek bir GA4 property + Measurement ID oluşturulması,
  (2) bu ID'nin Cloudflare Pages Production/Preview Build Variables'a
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` olarak eklenmesi, (3) KVKK kapsamında
  GA4'ün çerez/veri toplama davranışı için bir çerez onay (consent)
  banner'ı gerekip gerekmediğinin değerlendirilmesi — bu sprintin
  kapsamında değildi, ayrı bir HIGH RISK madde olarak aşağıya eklendi.

## Search Console entegrasyonu

- **Durum:** Doğrulama tamamlanmış, veri erişimi açık (SEO Sprint #3'te tespit edildi)
- **Öncelik:** HIGH
- **ICE Skoru:** 80.0 (Impact 8 × Confidence 10 ÷ Effort 1) — bkz. `SEO_GROWTH_PLAN.md` §2. En yüksek ICE skorlu madde; sıfır kod maliyetiyle en yüksek bilgi değeri.
- **Ticari Etki:** Doğrudan Organic Traffic/Keyword Ranking'e (#7-8,
  ladder'ın en altı) hizmet eder; Qualified Lead/RFQ'ye katkısı
  dolaylıdır (hangi query'lerin/sayfaların dönüşüm sağladığını görmeyi
  sağlar). Sıfır maliyetli ve zaten hazır olduğu için HIGH'ta tutuldu,
  ama Success Metrics açısından GA4'ün altında.
- **Beklenen SEO etkisi:** İndeksleme durumu, arama sorguları, tıklama
  oranları ve teknik hata (coverage) verisine erişim sağlar; sitemap
  gönderimi buradan yapılır.
- **Not:** DNS TXT taraması, Search Console'un `google-site-
  verification=ONUI1Kr8PutxNOFUrC8whJmBOCCpsbD8xDhK8pzrRk0` kaydıyla
  **zaten doğrulanmış** olduğunu gösterdi — kod tarafında ek bir
  doğrulama etiketi/dosyası eklenmedi (gereksiz ve talimata aykırı
  olurdu). Sitemap (`https://teminor.com/sitemap.xml`, 13 URL) ve
  robots.txt erişilebilir ve doğru. **Kalan adım tamamen kullanıcı
  tarafında:** Search Console hesabından mülkü açıp sitemap'i
  göndermek ve performans verisini seo-agent'a sağlamak — kod
  değişikliği gerektirmiyor.

## LocalBusiness adresinin doğrulanması

- **Durum:** Açık
- **Öncelik:** HIGH
- **ICE Skoru:** 45.0 (Impact 5 × Confidence 9 ÷ Effort 1) — bkz. `SEO_GROWTH_PLAN.md` §2
- **Ticari Etki:** ICP'deki yerel karar vericilerin (fabrika/tesis/
  catering sahipleri) Google Business Profile ve yerel arama
  sonuçlarında Teminor'u bulabilmesi — dolaylı olarak Qualified
  Lead/Phone Click'e katkı sağlar.
- **Beklenen SEO etkisi:** `address.addressLocality: "İzmir"` alanı
  doğrulanmadan kalırsa yanlış yerel arama sinyali verme riski var; doğru
  şehir/adres bilgisi yerel SEO ve Google Business Profile eşleşmesi için
  önemli.
- **Not:** Bu bir iş verisi/ticari iddia sorusu — kod düzeltmesi değil,
  kullanıcı onayı ve doğru bilgi gerektirir. `priceRange` gibi kod
  seviyesinde tek taraflı kaldırılmadı çünkü LocalBusiness şemasından adres
  bilgisini tamamen çıkarmak da ayrı bir ticari/SEO karar, kullanıcıya
  danışılmadan verilmedi.

## KVKK çerez onayı (GA4 aktivasyonu için ön koşul olabilir)

- **Durum:** Açık (yeni bulgu — SEO Sprint #2)
- **Öncelik:** HIGH
- **ICE Skoru:** 10.0 (Impact 6 × Confidence 5 ÷ Effort 3) — bkz. `SEO_GROWTH_PLAN.md` §2. Confidence düşük çünkü hukuki belirsizlik var (Data Required değil ama uzman görüşü gerektirir).
- **Ticari Etki:** GA4 entegrasyonunun (en yüksek ticari öncelikli madde)
  yasal ön koşulu olabilir — bu çözülmeden GA4 aktive edilirse tüm
  Success Metrics ölçümü riske girer.
- **Beklenen SEO etkisi:** Doğrudan SEO etkisi yok, ama GA4'ün gerçek bir
  Measurement ID ile aktive edilmesinin hukuki ön koşulu olabilir —
  yanlış sırayla yapılırsa (banner olmadan GA4 aktive etmek) KVKK uyum
  riski doğurur.
- **Not:** Bu sprint yalnızca analytics *altyapısını* kurdu, hiçbir gerçek
  kullanıcı verisi toplamıyor (Measurement ID tanımlı değil). GA4
  aktivasyonundan (yukarıdaki madde) önce, sitede çerez onay banner'ı
  gerekip gerekmediği ve GA4'ün IP anonimleştirme/consent mode
  ayarlarının nasıl yapılandırılacağı kullanıcıyla netleştirilmeli — kod
  seviyesinde tek taraflı karar verilmedi.

---

# MEDIUM

## RFQ gönderimini ayrı bir GA4 event'i yapmak

- **Durum:** Açık (yeni bulgu — SEO Sprint #5, GA4 event gap analizi)
- **Öncelik:** MEDIUM
- **ICE Skoru:** 28.0 (Impact 7 × Confidence 8 ÷ Effort 2) — bkz. `SEO_GROWTH_PLAN.md` §4
- **Ticari Etki:** RFQ (#2), Contact Form'dan (#3) daha yüksek Success
  Metric — ama şu an ikisi de aynı `contact_form_submit` event'i altında
  toplanıyor, GA4'te RFQ'yu ayrı bir Key Event olarak işaretlemek mümkün
  değil.
- **Beklenen SEO etkisi:** Doğrudan SEO etkisi yok; ölçüm netliği.
- **Not:** `RFQForm.tsx:89`, genel `contact_form_submit` event'ini
  `sector: "rfq_form"` parametresiyle çağırıyor. Öneri: `AnalyticsEvents`'e
  `RfqFormSubmit: "rfq_form_submit"` eklenip `RFQForm.tsx`'in kendi
  event'ini çağırması. LOW RISK (mevcut kataloğu genişletme, yeni
  provider yok) ama bu sprintte **uygulanmadı** — Sprint #5 yalnızca
  analiz üretti, kod değiştirmedi.

## RFQ formuna form-start/terk izleme eklemek

- **Durum:** Açık (yeni bulgu — SEO Sprint #5, Commercial Funnel analizi)
- **Öncelik:** MEDIUM
- **ICE Skoru:** 14.0 (Impact 7 × Confidence 6 ÷ Effort 3) — bkz. `SEO_GROWTH_PLAN.md` §4, §6
- **Ticari Etki:** `SEO_GROWTH_PLAN.md`'deki funnel analizinde Lead→RFQ
  arası (Contact Form 6 alan vs. RFQ Form 14 alan, 11 zorunlu) en güçlü
  sızıntı hipotezi olarak tespit edildi — bu event, hipotezi gerçek
  veriyle test etmenin tek yolu.
- **Beklenen SEO etkisi:** Yok — bu tamamen dönüşüm huni ölçümü.
- **Not:** Öneri: formun ilk alan etkileşiminde (`onFocus`/`onChange`)
  bir kez tetiklenen `rfq_form_start` event'i eklemek; start/submit oranı
  = terk oranı. LOW RISK, bu sprintte **uygulanmadı**.

## /iletisim sayfasına RFQ öncesi FAQ eklemek

- **Durum:** Açık (yeni bulgu — SEO Sprint #5, Content Opportunity)
- **Öncelik:** MEDIUM
- **ICE Skoru:** 12.0 (Impact 8 × Confidence 6 ÷ Effort 4) — bkz. `SEO_GROWTH_PLAN.md` §2, §5
- **Ticari Etki:** En yüksek Business Value'lu sayfada (`/iletisim`)
  RFQ öncesi 7 cevapsız ticari soru tespit edildi (fiyatlandırma modeli,
  pilot süresi, hizmet bölgesi, taahhüt, ödeme akışı, mevcut tedarikçi
  ilişkileri, atanan ekip büyüklüğü) — bkz. `SEO_GROWTH_PLAN.md` §5 için
  tam liste.
- **Beklenen SEO etkisi:** Dolaylı — FAQ içeriği uzun-kuyruk sorguları da
  yakalayabilir, ama asıl amaç dönüşüm sürtünmesini azaltmak.
- **Not:** Bu, yeni sayfa değil, mevcut `/iletisim` sayfasına eklenecek
  içerik. Confidence orta çünkü bu sorular davranışsal veriyle değil,
  içerik/form alanı analiziyle çıkarıldı (varsayım). Bu sprintte
  **uygulanmadı** — talimat gereği yalnızca fırsat listesi oluşturuldu.

## Blog internal linking

- **Durum:** Tamamlandı (SEO Sprint #1)
- **Öncelik:** MEDIUM
- **Beklenen SEO etkisi:** Blog yazıları arası bağlamsal linkler crawl
  derinliğini ve topical authority'yi artırır, kullanıcının site içinde
  daha fazla sayfa görmesini sağlar.
- **Not:** `lib/blog.ts`'e küratörlü `getRelatedPosts` eklendi, her blog
  yazısının sonuna "İlgili Yazılar" bloğu (2 ilgili yazı) eklendi. Ayrıca
  4 yazının gövdesinde mevcut cümlelere `/neden-teminor` ve `/hizmetler`
  linkleri eklendi. Orphan sayfa yok. **Sprint #3 güncellemesi:** ana
  sayfanın blog önizleme bölümünden `/blog` indeksine doğrudan link
  eklendi ("Tüm Yazıları Görüntüle"); blog yazılarına breadcrumb
  navigasyonu eklendi. Devam eden fırsat: `/hizmetler` ve
  `/neden-teminor` sayfalarından blog'a geri link hâlâ yok — **ICE Skoru:
  16.0** (Impact 4 × Confidence 8 ÷ Effort 2), bkz. `SEO_GROWTH_PLAN.md` §2.

## Image alt audit

- **Durum:** Kapatıldı — değişiklik gerekmedi
- **Öncelik:** MEDIUM
- **Beklenen SEO etkisi:** Görsel arama ve erişilebilirlik sinyallerini
  güçlendirir.
- **Not:** İncelendi: `Header`/`Footer` logo görselleri `alt="Teminor
  logo"` kullanıyor. Bir logoyu ana sayfaya bağlayan linkte bu, standart ve
  doğru erişilebilirlik pratiğidir (marka adı yeterli, aşırı açıklayıcı
  alt metin gereksiz). Değişiklik yapılmadı. Sitede başka içerik görseli
  yok (yalnızca dekoratif `aria-hidden` SVG'ler).

## Core Web Vitals analizi

- **Durum:** Açık
- **Öncelik:** MEDIUM
- **ICE Skoru:** 12.0 (Impact 6 × Confidence 4 ÷ Effort 2) — bkz. `SEO_GROWTH_PLAN.md` §2
- **Ticari Etki:** `/iletisim` (RFQ + Contact Form) sayfasının yükleme
  hızı doğrudan Contact Form/RFQ dönüşüm oranını etkiler — bu ölçüm
  yalnızca genel Keyword Ranking için değil, dönüşüm sayfası UX'i için
  de önemli.
- **Beklenen SEO etkisi:** LCP/CLS/INP Google sıralama sinyalleridir;
  şu ana kadar hiç gerçek ölçüm yapılmadı, `SEO_SCORE.md`'deki Performance
  puanı kod incelemesine dayalı bir tahmindir.
- **Not:** Ölçüm/analiz aşaması LOW RISK; ölçüm sonucunda çıkacak
  değişiklik önerileri (ör. font ağırlığı azaltma) ayrıca risk
  sınıflandırılacak. Bu sprintte ölçüm altyapısı (gerçek tarayıcı/Lighthouse
  erişimi) yoktu, yalnızca statik kod incelemesi yapıldı.

## Blog cannibalization riski: "dış kaynak satın alma" ikilisi

- **Durum:** Açık (yeni bulgu — SEO Sprint #3, `SEO_SEARCH_MAP.md` denetiminde)
- **Öncelik:** MEDIUM
- **ICE Skoru:** 3.0 (Impact 5 × Confidence 3 ÷ Effort 5) — bkz. `SEO_GROWTH_PLAN.md` §2. Confidence düşük çünkü **Data Required** (Search Console query çakışması doğrulanmadı); Effort yüksek çünkü çözüm içerik yeniden yazımı gerektiriyor.
- **Ticari Etki:** Her iki yazı da `/hizmetler`'e (dönüşüm sayfası) CTA
  veriyor — cannibalization çözülürse organik trafik artışının
  büyük kısmı zaten RFQ/Contact Form yoluna akar. Yine de bu etki
  dolaylı (#7 Organic Traffic üzerinden), doğrudan #1-5 değil.
- **Beklenen SEO etkisi:** İki yazı aynı sorgu için yarışırsa Google
  ikisi arasında sinyali böler, hiçbiri güçlü sıralanamaz
  (cannibalization). Netleştirilirse her iki yazının da kendi hedef
  sorgusunda daha güçlü sıralanma potansiyeli var.
- **Not:** `dis-kaynak-satin-alma-departmani-nedir` ve
  `kobiler-icin-dis-kaynak-satin-alma` başlık ve `keywords` alanlarında
  ciddi örtüşüyor ("dış kaynak satın alma departmanı" / "dış kaynak
  satın alma"). Ayrıca `dis-kaynak-satin-alma-departmani-nedir` ile
  `satin-alma-surecinin-ticari-degeri` arasında da "satın alma maliyet
  tasarrufu" keyword'ü ortak. İki yazı hâlâ birbirine "İlgili Yazılar"
  ile bağlı (kısmi mitigasyon). Çözüm — başlık/keyword yeniden odaklama
  veya iki yazıyı birleştirme — "büyük içerik değişikliği" sayılır, bu
  sprintin kapsamı dışında bırakıldı. Search Console verisi bağlandığında
  (aynı query için iki page görünüyor mu) bu bulgu doğrulanacak.

## Kullanılmayan `@mdx-js/react` bağımlılığı

- **Durum:** Açık (yeni bulgu — SEO Sprint #1)
- **Öncelik:** MEDIUM
- **ICE Skoru:** 10.0 (Impact 1 × Confidence 10 ÷ Effort 1) — bkz. `SEO_GROWTH_PLAN.md` §2. Düşük Impact yüzünden düşük öncelikte kalıyor, skorun yüksek görünmesi yalnızca çok düşük Effort'tan kaynaklanıyor.
- **Ticari Etki:** Yok/ihmal edilebilir — hiçbir Success Metric'e
  ölçülebilir katkısı yok, saf teknik temizlik. SEO Decision Rule'ün
  3. sorusuna ("yalnızca Google için mi?") cevabı da "Hayır" (Google'ı
  bile etkilemiyor) — düşük öncelikte kalmaya devam eder.
- **Beklenen SEO etkisi:** Dolaylı — daha küçük bağımlılık ağacı build
  süresini ve potansiyel tedarik zinciri yüzeyini azaltır; doğrudan
  sayfa performansına (statik export'ta bu paket zaten client bundle'a
  girmiyor) etkisi sınırlı.
- **Not:** `package.json`'da tanımlı ama kodda hiçbir yerde import
  edilmiyor; `next-mdx-remote` bunu peer dependency olarak istemiyor.
  Kaldırılması LOW RISK bir bağımlılık değişikliği ama bu sprintin
  "yalnızca belirle" kapsamındaki Performance maddesiydi, uygulanmadı.

---

# LOW

## priceRange doğrulaması

- **Durum:** Tamamlandı (SEO Sprint #1)
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** Doğrudan sıralama etkisi düşük, ancak
  `LocalBusiness.priceRange: "$$"` doğrulanmamış/uydurma bir alandı —
  CLAUDE.md'nin "doğrulanmamış ticari iddia yazma" kuralına aykırıydı.
- **Not:** `app/page.tsx`'teki `LocalBusiness` JSON-LD'den `priceRange`
  alanı kaldırıldı, yerine doğru veri konmadı (elimizde doğrulanmış bir
  fiyat aralığı yok).

## Metadata ince ayarları

- **Durum:** Kısmen tamamlandı (SEO Sprint #1, #3)
- **Öncelik:** LOW
- **ICE Skoru:** 6.0 (Impact 3 × Confidence 6 ÷ Effort 3) — bkz. `SEO_GROWTH_PLAN.md` §2
- **Beklenen SEO etkisi:** Sayfa bazlı OG image eksikliği ve blog
  frontmatter'daki `ogImage` alanının kullanılmıyor olması, sosyal
  paylaşım görünürlüğünü küçük ölçüde etkiler.
- **Not:** Sprint #1'de `/hizmetler` meta description/hero metni
  düzeltildi, `icons` metadata eklendi. **Sprint #3'te:** `/neden-
  teminor`'un `<title>`'ındaki "Neden Teminor | Teminor" tekrarı
  düzeltildi (`title: { absolute: ... }`). Açık kalan: sayfa bazlı OG
  image hâlâ yok, blog `ogImage` frontmatter alanı hâlâ boş/kullanılmıyor.

## Eksik BlogPosting schema alanları ve breadcrumb

- **Durum:** Tamamlandı (SEO Sprint #3)
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** `mainEntityOfPage`/`publisher` Google'ın
  Article/BlogPosting rich result uygunluğu için önerdiği alanlardır;
  `BreadcrumbList` arama sonuçlarında breadcrumb rich snippet'i
  mümkün kılar.
- **Not:** `app/blog/[slug]/page.tsx`'teki `BlogPosting` JSON-LD'ye
  `mainEntityOfPage` (post URL'i) ve `publisher` (ana sayfadaki
  `Organization` ile aynı `name`/`logo`) eklendi — ikisi de zaten
  doğrulanmış veriden türetildi, yeni bir iddia yok. Ayrıca görünür
  breadcrumb navigasyonu ("Ana Sayfa / Blog") + eşleşen `BreadcrumbList`
  JSON-LD eklendi.

## Ana sayfa blog önizlemesinden /blog indeksine link eksikliği

- **Durum:** Tamamlandı (SEO Sprint #3)
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** `/blog` arşiv sayfasına giden ek bir internal
  link, crawl derinliğini ve kullanıcı keşfini artırır.
- **Not:** Ana sayfadaki "Satın Alma Üzerine Yazılar" bölümü yalnızca 3
  tekil yazı kartı içeriyordu, `/blog` indeksinin kendisine link yoktu.
  "Tüm Yazıları Görüntüle" linki eklendi (`cta_click` event'iyle
  izleniyor, mevcut event kataloğu genişletilmeden).
