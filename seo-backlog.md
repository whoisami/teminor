# Teminor — SEO Backlog

Bu dosya, `seo-agent`'in tespit ettiği tüm SEO bulgularının canlı listesidir.
Her çalışmada güncellenir: tamamlanan maddeler "Durum: Tamamlandı" olarak
işaretlenir, yeni bulgular ilgili öncelik başlığına eklenir. Öncelik sırası
iş etkisine göredir, teknik zorluğa göre değil.

**Son güncelleme:** 2026-07-14 (SEO Sprint #3 sonrası)

---

# HIGH

## GA4 entegrasyonu

- **Durum:** Altyapı tamamlandı (SEO Sprint #2) — aktivasyon açık
- **Öncelik:** HIGH
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
  `/neden-teminor` sayfalarından blog'a geri link hâlâ yok.

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
