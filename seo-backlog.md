# Teminor — SEO Backlog

Bu dosya, `seo-agent`'in tespit ettiği tüm SEO bulgularının canlı listesidir.
Her çalışmada güncellenir: tamamlanan maddeler "Durum: Tamamlandı" olarak
işaretlenir, yeni bulgular ilgili öncelik başlığına eklenir. Öncelik sırası
iş etkisine göredir, teknik zorluğa göre değil.

**Son güncelleme:** 2026-07-14 (SEO Sprint #1 sonrası)

---

# HIGH

## GA4 entegrasyonu

- **Durum:** Açık
- **Öncelik:** HIGH
- **Beklenen SEO etkisi:** Organik trafiğin, davranışın ve dönüşümün
  ölçülmesini sağlar. Ölçüm olmadan hiçbir SEO çalışmasının gerçek etkisi
  doğrulanamaz.
- **Not:** Yeni bir üçüncü taraf entegrasyonu ve muhtemelen env/consent
  yönetimi gerektirdiği için HIGH RISK — kullanıcı onayı olmadan
  uygulanmayacak. KVKK/çerez onayı ile birlikte planlanmalı.

## Search Console entegrasyonu

- **Durum:** Açık
- **Öncelik:** HIGH
- **Beklenen SEO etkisi:** İndeksleme durumu, arama sorguları, tıklama
  oranları ve teknik hata (coverage) verisine erişim sağlar; sitemap
  gönderimi buradan yapılır.
- **Not:** Doğrulama (DNS TXT veya HTML dosya/meta etiketi) kullanıcının
  Search Console hesabı üzerinden yapılmalı — HIGH RISK, kullanıcı onayı
  gerekli.

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
  linkleri eklendi. Orphan sayfa yok. Devam eden fırsat: `/hizmetler` ve
  `/neden-teminor` sayfalarından blog'a geri link yok — sonraki sprint'te
  değerlendirilebilir.

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

- **Durum:** Kısmen tamamlandı (SEO Sprint #1)
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** Sayfa bazlı OG image eksikliği ve blog
  frontmatter'daki `ogImage` alanının kullanılmıyor olması, sosyal
  paylaşım görünürlüğünü küçük ölçüde etkiler.
- **Not:** Bu sprintte `/hizmetler` sayfasındaki güncel içerikle
  uyuşmayan meta description/hero metni düzeltildi ve root layout'a eksik
  `icons` (favicon/apple-touch-icon) metadata alanı eklendi. Açık kalan:
  sayfa bazlı OG image hâlâ yok, blog `ogImage` frontmatter alanı hâlâ
  boş/kullanılmıyor.
