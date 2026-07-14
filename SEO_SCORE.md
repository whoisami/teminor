# Teminor — SEO Score

Bu dosya, `seo-agent`'in her çalışmasında otomatik güncellediği canlı bir
puan kartıdır. Puanlar 0-10 arasındadır ve doğrudan repodaki koddan
doğrulanarak verilir — tahmine dayalı puan verilmez.

**Son güncelleme:** 2026-07-14
**Değerlendiren:** seo-agent (SEO Sprint #1 — LOW RISK düzeltmeler)
**Kapsam:** `main` branch, bu sprint'te işlenen commit öncesi taban `bef5ae8`

---

## Technical SEO — 8/10 (değişmedi)

Next.js 16 App Router, statik export. Route yapısı temiz. `app/sitemap.ts`
ve `app/robots.ts` doğru üretiliyor. Bu sprintte "Sadece raporla, değiştirme"
talimatı gereği bu kategoride kod değişikliği yapılmadı — sitemap, robots,
canonical ve indexability doğrulandı, sorun bulunmadı. Eksik: gerçek
Lighthouse/PSI taraması hâlâ hiç çalıştırılmadı; CI'da otomatik SEO
kontrolü yok.

## Metadata — 9/10 (+1)

`app/hizmetler/page.tsx`'teki meta description ve hero alt metni, sayfanın
artık gerçek Hizmet 1-4 (Başlangıç/Aktif/Yoğun-Kurumsal/Proje Bazlı)
içeriğiyle **tutarsızdı** (eski "tekil kategori desteğinden uçtan uca
departman yönetimine" ifadesini taşıyordu) — güncel içerikle eşleşecek
şekilde düzeltildi. Root layout'a eksik olan `icons` metadata alanı
(favicon.ico, icon-32.png, apple-touch-icon.png) eklendi; önceden bu
dosyalar yalnızca tarayıcı varsayılan konvansiyonuna güveniyordu, artık
`<head>`'de açık `<link rel="icon">`/`<link rel="apple-touch-icon">`
etiketleri var. Diğer sayfalarda duplicate title/description veya eksik
Open Graph bulunmadı.

## Structured Data — 7/10 (+1)

`LocalBusiness.priceRange: "$$"` — doğrulanamayan/uydurma bir alandı,
CLAUDE.md kuralına aykırıydı, **kaldırıldı**. Diğer JSON-LD yapıları
(`Organization`, `BlogPosting`, `ContactPage`) doğrulandı, geçersiz alan
bulunmadı. Açık kalan: `address.addressLocality: "İzmir"` hâlâ
doğrulanmamış — bu bir iş verisi sorusu olduğu için (kod düzeltmesi değil)
kaldırılmadı, kullanıcı onayı gereken bir madde olarak backlog'a taşındı.

## Internal Linking — 7/10 (+3)

4 blog yazısına, sonunda ilgili 2 yazıya link veren "İlgili Yazılar" bloğu
eklendi (`lib/blog.ts`'te küratörlü `getRelatedPosts`, `app/blog/[slug]/
page.tsx`'te render). Ayrıca 4 yazının gövde metnine, doğal cümle akışı
içinde `/neden-teminor` ve `/hizmetler`'e bağlamsal linkler eklendi (yeni
iddia/cümle uydurulmadı, sadece mevcut ifadeler linklendi). Orphan sayfa
kontrolü yapıldı: tüm sayfalar header/footer/sitemap üzerinden erişilebilir,
orphan yok. Açık kalan: blog hacmi düşük olduğu için (4 yazı) internal
linking potansiyeli sınırlı; `/hizmetler` ve `/neden-teminor` sayfalarından
blog'a geri link yok.

## Performance — 6/10 (değişmedi)

Bu sprintte yalnızca "güvenli fırsatları belirle" talimatı vardı, kod
değişikliği yapılmadı. Tespit: `package.json`'daki `@mdx-js/react`
bağımlılığı kodda hiçbir yerde import edilmiyor (`next-mdx-remote` bunu
peer dependency olarak da gerektirmiyor) — kullanılmayan bir paket,
bundle/dependency ağacını gereksiz büyütüyor. Kaldırılması bir bağımlılık
değişikliği olduğu için LOW RISK sayılsa da bu sprintin kapsamı dışında
bırakıldı, backlog'a eklendi. `next/font` ve Framer Motion kullanımı
incelendi, sorun bulunmadı.

## Accessibility — 8/10 (+1)

Tüm sayfalarda `h1` → `h2` → `h3` hiyerarşisi doğrulandı: her sayfada tam
olarak bir `h1` var, seviye atlaması yok (`BenefitCard` içindeki kart
başlıkları doğru şekilde `h3` olarak ana bölüm `h2`'sinin altında).
Favicon/apple-touch-icon için açık `<link>` etiketleri eklenmesi ekran
okuyucu değil ama tarayıcı/İşletim sistemi düzeyinde tutarlılığı artırdı.
Açık kalan: skip-to-content linki yok, renk kontrastı otomatik araçla
doğrulanmadı.

## Analytics — 0/10 (değişmedi, HIGH RISK)

GA4 ve Search Console entegrasyonu hâlâ yok. Bu sprintin kapsamında değildi
(HIGH RISK, kullanıcı onayı gerekli) — backlog'da açık.

## Content — 7/10 (değişmedi)

İçerik hacmi ve kalitesi bu sprintte değişmedi; yalnızca mevcut cümlelere
link eklendi, yeni iddia/istatistik yazılmadı.

---

## Overall — 6.5/10 (+0.75)

Bu sprintte 3 kategoride somut ilerleme kaydedildi: Internal Linking
(4→7), Structured Data (6→7), Metadata (8→9), Accessibility (7→8). En
büyük açık hâlâ Analytics (0/10) — HIGH RISK olduğu için kullanıcı onayı
bekliyor. İkinci öncelik: Search Console verisi bağlandığında Technical
SEO ve Content kategorilerinin gerçek arama verisiyle yeniden
değerlendirilmesi.
