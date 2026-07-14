# Teminor — SEO Backlog

Bu dosya, `seo-agent`'in tespit ettiği tüm SEO bulgularının canlı listesidir.
Her çalışmada güncellenir: tamamlanan maddeler "Durum: Tamamlandı" olarak
işaretlenir, yeni bulgular ilgili öncelik başlığına eklenir. Öncelik sırası
iş etkisine göredir, teknik zorluğa göre değil.

**Son güncelleme:** 2026-07-14

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

---

# MEDIUM

## Blog internal linking

- **Durum:** Açık
- **Öncelik:** MEDIUM
- **Beklenen SEO etkisi:** Blog yazıları arası bağlamsal linkler crawl
  derinliğini ve topical authority'yi artırır, kullanıcının site içinde
  daha fazla sayfa görmesini sağlar.
- **Not:** LOW RISK — mevcut sayfalar arasında, sağlam anchor text ile
  eklenecek. Yeni sayfa/route oluşturmaz.

## Image alt audit

- **Durum:** Açık
- **Öncelik:** MEDIUM
- **Beklenen SEO etkisi:** Görsel arama ve erişilebilirlik sinyallerini
  güçlendirir. Şu an yalnızca 2 görsel (`Header`/`Footer` logo) `alt`
  içeriyor ve ikisi de jenerik "Teminor logo" metni kullanıyor.
- **Not:** LOW RISK — mevcut `alt` metinlerini daha açıklayıcı hale
  getirmek yeni içerik/sayfa gerektirmez.

## Core Web Vitals analizi

- **Durum:** Açık
- **Öncelik:** MEDIUM
- **Beklenen SEO etkisi:** LCP/CLS/INP Google sıralama sinyalleridir;
  şu ana kadar hiç gerçek ölçüm yapılmadı, `SEO_SCORE.md`'deki Performance
  puanı kod incelemesine dayalı bir tahmindir.
- **Not:** Ölçüm/analiz aşaması LOW RISK; ölçüm sonucunda çıkacak
  değişiklik önerileri (ör. font ağırlığı azaltma) ayrıca risk
  sınıflandırılacak.

---

# LOW

## priceRange doğrulaması

- **Durum:** Açık
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** Doğrudan sıralama etkisi düşük, ancak
  `LocalBusiness.priceRange: "$$"` doğrulanmamış/uydurma bir alan —
  CLAUDE.md'nin "doğrulanmamış ticari iddia yazma" kuralına aykırı.
  Google'ın yanlış zengin sonuç göstermesini önler.
- **Not:** LOW RISK — mevcut, doğrulanamayan bir schema alanının
  kaldırılması veya doğru veriyle değiştirilmesi (yeni alan eklemek değil).

## Metadata ince ayarları

- **Durum:** Açık
- **Öncelik:** LOW
- **Beklenen SEO etkisi:** Sayfa bazlı OG image eksikliği ve blog
  frontmatter'daki `ogImage` alanının kullanılmıyor olması, sosyal
  paylaşım görünürlüğünü küçük ölçüde etkiler.
- **Not:** LOW RISK — mevcut metadata yapısı içinde küçük düzeltmeler.
