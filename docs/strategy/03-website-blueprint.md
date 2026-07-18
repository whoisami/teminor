# Teminor — Website Blueprint

**Doküman ID:** STRAT-03
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md` (v2.0)

> **v2.0 Uyum Notu (18 Temmuz 2026):** Bu belgedeki ana sayfa akışı, hero
> mesajı ve hizmetler sayfası paket mimarisi **Stratejik Satınalma /
> Sourcing from Turkey** hizmet hattının web sitesi kapsamını tanımlar.
> Ana sayfanın birincil mesajı artık Anayasa v2.0 §13'teki ihracat satış
> geliştirme ilkeleridir. Tasarımı koruma ilkesi (§13) ve mobil metin
> kuralları (§14) değişmeden her iki hizmet hattı için de geçerlidir.

> **Bu belge web sitesi kodunu tanımlar, değiştirmez.** Bu doküman
> oluşturulduğu anda `app/`, `components/` içindeki hiçbir dosyaya
> dokunulmamıştır. Aşağıdaki mimari hem mevcut durumu (✅ Mevcut) hem de
> henüz uygulanmamış hedef unsurları (🔲 Planlanan, kod tabanında yok)
> ayrı ayrı işaretler — bu ayrım bilinçlidir, gelecekteki çalışma için bir
> fark listesi (gap analysis) işlevi görür. Herhangi bir değişiklik
> Constitution §10 (tasarımı izinsiz değiştirme yasağı) kapsamında açık
> kullanıcı onayı gerektirir.

---

## 1. Ana Sayfa Akışı

| # | Bölüm | Durum | Mevcut karşılığı |
|---|---|---|---|
| 1 | Hero mesajı | ✅ Mevcut | `components/Hero.tsx` |
| 2 | Güven şeridi | ✅ Mevcut (kısmi) | "Neden Teminor" ilke listesi (`app/page.tsx` — Aracı değil ortağınız / Onay olmadan sipariş yok / vb.) |
| 3 | Problem bölümü | 🔲 Planlanan | Ayrı, adlandırılmış bir "problem" bloğu yok; problem çerçevesi şu an dolaylı olarak Hero alt metninde işleniyor |
| 4 | Çözüm bölümü | 🔲 Planlanan | Ayrı bir "çözüm" bloğu yok; Fayda bölümü kısmen bu işlevi görüyor |
| 5 | Fayda bölümü | ✅ Mevcut | Benefits section (Zaman/Maliyet/Risk Tasarrufu kartları) |
| 6 | Nasıl çalışır bölümü | ✅ Mevcut | `components/HowItWorks.tsx` (4 adımlı süreç + HowTo JSON-LD) |
| 7 | Kategoriler | ✅ Mevcut | `components/CategoryGrid.tsx` (5 öncelikli kategori) |
| 8 | Pilot hizmet | 🔲 Planlanan | Ana sayfada ayrı bir blok yok; pilot kavramı yalnızca blog içeriğinde (`dis-kaynak-satin-alma-departmani-nedir.mdx`) işleniyor |
| 9 | SSS | 🔲 Planlanan | Hiçbir sayfada yok. En yakın ilgili fırsat: `SEO_GROWTH_PLAN.md` §5'te `/iletisim` için önerilen FAQ (ICE 12.0, henüz uygulanmadı) |
| 10 | Final CTA | 🔲 Planlanan (kısmi) | Ana sayfanın son bölümü şu an Blog önizlemesi; adanmış, dönüşüm odaklı bir "final CTA" bloğu yok (Hero'daki CTA'lar dışında) |

**Not:** 3, 4, 8, 9 ve 10 numaralı satırlar bu doküman kapsamında
oluşturulmadı — yalnızca mimarideki boşluk olarak kaydedildi. Bir sonraki
aşamada bu bölümlerin eklenip eklenmeyeceği ayrı bir kullanıcı kararı ve
Decision Log kaydı gerektirir.

## 2. Hero Mesajı — İlke

Hero, sayfanın tezidir: tek cümlede kim için ne yaptığımızı söyler.
Mevcut uygulama (`components/Hero.tsx`) H1 + destekleyici alt metin +
ikincil segment notu ("departmanınız varsa da...") + iki CTA (birincil:
`/iletisim`, ikincil: WhatsApp) yapısını kullanır. Bu yapı korunur.

## 3. Güven Şeridi

Amaç: ziyaretçinin ilk 10 saniyede "bu ciddi bir operasyon" hissetmesini
sağlamak — sayısal abartı olmadan (Constitution §9). Mevcut karşılığı,
niteliksel ilke listesidir (onay mekanizması, şeffaf ücretlendirme vb.),
sayısal/istatistiksel bir şerit değildir — bu bilinçli bir tercihtir
çünkü doğrulanmış KPI verisi henüz yok (bkz. `SEO_GROWTH_PLAN.md` §3,
"Data Required" prensibi).

## 4. Problem / Çözüm Bölümleri (Planlanan)

Klasik pazarlama sayfası yapısında bu iki blok, ziyaretçinin kendi
durumunu ("satın alma dağınık, kimse sorumlu değil") tanımasını ve
ardından çözümü ("Teminor bu süreci devralır") görmesini sağlar. Şu an
bu çerçeveleme dolaylı olarak Hero ve blog içeriğinde var, ama ana
sayfada adanmış bir blok yok. Eklenirse:

- Problem bölümü, `docs/strategy/04-go-to-market.md`'deki ICP'nin gerçek
  ifadeleriyle konuşmalı (bkz. `learnings/customer-learning-log.md` —
  doldukça buradan beslenmeli, varsayımla yazılmamalı).
  Çözüm bölümü, doğrudan Ana Değer Önerisi'ne (Constitution §5) bağlanmalı.

## 5. Fayda Bölümü

Mevcut 3 kart (Zaman/Maliyet/Risk Tasarrufu) korunur. Bu kartlar
Constitution §9'a uyumlu şekilde niteliksel ifadeler kullanır, sayısal
iddia içermez.

## 6. Nasıl Çalışır Bölümü

Mevcut 4 adım (Talep Alımı → Karşılaştırmalı Teklif Toplama → Müşteri
Onayı → Sipariş ve Teslimat Takibi), Master Strategy §4'teki 8 adımlı iç
operasyon akışının (Talep → RFQ → Tedarikçi Araştırma → Teklif →
Karşılaştırma → Müşteri Onayı → Sipariş → Teslimat Takibi) kullanıcıya
dönük, sadeleştirilmiş halidir. İki akış çelişmez; biri iç operasyon
detayı, diğeri dış iletişim özeti.

## 7. Kategoriler

Mevcut 5 kategori (Ambalaj, Temizlik/Hijyen, Kağıt, İSG, Genel Sarf),
"şu an en yoğun çalıştığımız alanlar" çerçevesiyle sunulur ve altında
sektör esnekliği notu vardır ("farklı bir sektörden geliyorsanız da...
değerlendirmekten memnuniyet duyarız"). Bu ifade bilinçlidir — sınırsız
bir vaat değil, değerlendirme sonrası kabul/red imasıdır (Constitution
§9 ile uyumlu). Bu bölüm Master Strategy §2'deki satış/ICP sektör
listesiyle karıştırılmamalıdır (bkz. `01-master-strategy.md` §2 notu).

## 8. Pilot Hizmet (Planlanan)

Ana sayfada ayrı bir blok olarak yoksa da, pilot kavramı Master Strategy
§5'te tanımlıdır. Eklenirse mesaj: "30 günlük, dar kapsamlı, düşük riskli
bir pilotla başlayın" — ücretsiz değil, sınırlı kapsamlı ilk taahhüt
olduğu net olmalı (bkz. `02-messaging-guide.md` §5).

## 9. SSS (Planlanan)

Henüz hiçbir sayfada yok. `SEO_GROWTH_PLAN.md` §5, `/iletisim` sayfası
için 7 cevapsız ticari soru tespit etmişti (fiyatlandırma modeli, pilot
süresi, hizmet bölgesi, taahhüt, ödeme akışı, mevcut tedarikçi
ilişkileri, ekip büyüklüğü). Ana sayfaya SSS eklenecekse, bu 7 soru
başlangıç noktası olabilir — ayrı bir karar ve muhtemelen ayrı bir
Decision Log kaydı gerektirir.

## 10. Final CTA (Planlanan)

Ana sayfanın en altında, blog önizlemesinden sonra veya onun yerine,
dönüşüme adanmış bir kapanış bloğu (başlık + iki CTA, `/hizmetler` ve
`/neden-teminor` sayfalarındaki final CTA desenine benzer) eklenmesi
düşünülebilir. Şu an bu blok yok.

## 11. Hizmetler Sayfası Paket Mimarisi

Mevcut yapı (`app/hizmetler/page.tsx`): 4 statik paket kartı.

| Paket | Etiket | Hedef |
|---|---|---|
| Hizmet 1 | Başlangıç | Ayda 1-2 talep |
| Hizmet 2 | Aktif | Düzenli/sık talep |
| Hizmet 3 | Yoğun/Kurumsal | Yüksek hacim, sürekli ihtiyaç |
| Hizmet 4 | Proje Bazlı | Tekil, büyük ölçekli ihtiyaç (ayrı teklif) |

Her kart: RFQ kotası, yanıt süresi, (Hizmet 3'te) atanmış uzman bilgisi
+ "Fiyat Teklifi İçin Bize Ulaşın" CTA'sı içerir. Hiçbir pakette sayısal
tutar yoktur (Constitution §9 ile bilinçli uyum).

## 12. Dinamik Paket Karşılaştırma Gereksinimleri (Planlanan — Bileşen Yazılmadı)

Şu an paketler yalnızca statik, bağımsız kartlar olarak yan yana
gösteriliyor; kullanıcının 2+ paketi yan yana karşılaştırabileceği
interaktif bir bileşen yok. İleride böyle bir bileşen yapılırsa
gereksinimler:

- **Girdi:** 4 paketin RFQ kotası, yanıt süresi, atanmış kaynak bilgisi
  (mevcut veri modelinden, sayısal fiyat olmadan).
  - **Etkileşim:** Kullanıcı 2-4 paketi seçip yan yana karşılaştırabilmeli
  (checkbox veya toggle ile).
- **Çıktı:** Karşılaştırma tablosu, her satırda bir kriter (RFQ kotası,
  yanıt süresi, kapsam), sütunlarda seçilen paketler.
- **Kısıt:** Hiçbir sayısal fiyat/tutar gösterilmez (Constitution §9);
  CTA her zaman "Fiyat Teklifi İçin Bize Ulaşın" olarak kalır.
- **Teknik not:** Mevcut `/neden-teminor` sayfasındaki statik
  "Kendiniz Yaparsanız vs. Teminor ile" tablosu (`app/neden-teminor/
  page.tsx`) benzer bir görsel dilin başlangıç noktası olabilir, ama o
  tablo statiktir, kullanıcı etkileşimi yoktur.

Bu bileşen bu görev kapsamında **yazılmamıştır** (bkz. ADIM 14).

## 13. Tasarımı Koruma İlkesi

Web sitesi çalışmaları bir yeniden tasarım değildir. Mevcut görsel yapı
(navy/gold marka kimliği, `Fraunces`/`Inter`/`JetBrains Mono` tipografi
sistemi, `Onay Şeridi` imza unsuru, mevcut bileşen kütüphanesi) korunur.
Herhangi bir görsel değişiklik yalnızca açık kullanıcı onayıyla yapılır
(bkz. `.claude/skills/frontend-design/SKILL.md` — bu skill halihazırda
kurulu ve gelecekteki tasarım işlerinde referans alınacak).

## 14. Mobil Metin Kuralları

- Başlıklar mobilde de tek satırda okunabilir kalmalı; `max-w-*`
  kısıtları mevcut bileşenlerde zaten uygulanıyor (bkz. `components/
  Hero.tsx`, `components/HowItWorks.tsx`).
- Uzun paragraflar mobilde kısaltılmaz ama satır uzunluğu `container-content`
  ve bileşen bazlı `max-w` sınırlarıyla kontrol edilir.
- İkincil/tamamlayıcı cümleler (örn. Hero'daki "departmanınız varsa da..."
  notu) mobilde de görünür kalır, gizlenmez — küçük punto ile ayrışır,
  kaybolmaz.
- Kart grid'leri (Kategoriler, Hizmetler) mobilde 2 sütuna, gerekirse tek
  sütuna düşer; metin taşması olmaması için kart içi padding korunur.

## 15. SEO Başlık Hiyerarşisi

Her sayfada tam olarak bir `<h1>`, altında sıralı `<h2>`/`<h3>` —
seviye atlaması yok. Bu disiplin `SEO_SCORE.md`'nin Accessibility ve
Technical SEO bölümlerinde zaten doğrulanmıştır (SEO Sprint #3 denetimi).
Bu belge bu kuralı **değiştirmez**, mevcut standardı belgeler:

- `h1`: sayfanın tek ana konusu (örn. Hero H1, Hizmetler H1)
- `h2`: bölüm başlıkları (Nasıl Çalışır?, Odaklandığımız Kategoriler vb.)
- `h3`: bölüm içi alt öğeler (kart başlıkları, adım başlıkları)

Yeni bir bölüm eklenirse (Problem, Çözüm, Pilot, SSS, Final CTA), her
biri kendi `h2`'sini alır, mevcut hiyerarşiyi bozmaz.
