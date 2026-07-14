# Teminor — SEO Growth Plan

Bu dosya canlı bir çalışma planıdır. **seo-agent, Continuous
Optimization Mode'un her haftalık döngüsünde önce bu dosyayı okur,
sonra öneri üretir** (bkz. `.claude/agents/seo-agent.md`). Amaç trafik
değil, ticari dönüşümdür (bkz. `/CLAUDE.md` → "Ticari Hedef").

**Oluşturulma tarihi:** 2026-07-15 (SEO Sprint #5 — Growth Intelligence)
**Son güncelleme:** 2026-07-15 (Continuous Optimization Mode — haftalık
döngü #1 — bu döngüde en yüksek ICE'li 2 LOW RISK madde uygulandı,
aşağıda işaretli)
**Kapsam:** `main` branch, taban commit `5eb5c67`
**Veri durumu:** Search Console verisi hâlâ bağlı değil — bu dosyadaki
hiçbir madde gerçek query/impression/click verisi varsaymıyor. Veri
gerektiren her yer açıkça **"Data Required"** olarak işaretlendi.

---

## 1. Sayfa Değeri Sıralaması

Ölçek: **Yüksek / Orta / Düşük**. Business Value = Success Metrics'e
(Qualified Lead/RFQ/Contact/Phone/WhatsApp) ne kadar doğrudan hizmet
ettiği. SEO Value = organik görünürlük potansiyeli. Conversion Value =
sayfadaki CTA yoğunluğu/dönüşüme yakınlığı. Maintenance Cost = güncel
tutmanın gerektirdiği sürekli çaba/dikkat.

| # | Sayfa | Business Value | SEO Value | Conversion Value | Maintenance Cost |
|---|---|---|---|---|---|
| 1 | `/iletisim` | **Yüksek** — dönüşümün kendisi burada gerçekleşiyor (RFQ + Contact Form) | Düşük — yalnızca markalı/işlem niyeti | **Yüksek** — sayfa = dönüşüm noktası | Orta — 2 form, hata riski en yüksek sayfa |
| 2 | `/hizmetler` | Yüksek — ticari/fiyat niyeti, RFQ'ya en yakın bilgi sayfası | Orta-Yüksek | Yüksek — 5 CTA (4 paket + alt) | Orta — paket içeriği güncel tutulmalı (Sprint #1'de bir kez metadata drift yaşandı) |
| 3 | `/` (Ana Sayfa) | Yüksek — marka girişi, tüm dönüşüm yollarına yönlendiriyor | Yüksek — markalı + jenerik sorgular | Yüksek — 2 hero CTA + blog/neden-teminor linkleri | Düşük |
| 4 | `/neden-teminor` | Yüksek — itiraz karşılama (güven/kontrol endişesi), RFQ öncesi son adım | Orta | Orta — CTA yalnızca sayfa sonunda | Düşük |
| 5 | `tedarikci-dolandiriciligindan-korunma-yontemleri` | Orta-Yüksek — risk-odaklı, benzersiz farklılaştırıcı açı, hiçbir başka sayfa bu temayı işlemiyor | Orta-Yüksek — rakipsiz konu | Orta — /hizmetler CTA | Düşük |
| 6 | `satin-alma-departmani-olan-sirketlere-teminor-faydasi` | Orta — farklı bir ICP segmentini (mevcut departmanı olanlar) açıyor | Orta | Orta | Düşük |
| 7 | `kobiler-icin-gizli-maliyet-analizi` | Orta — fiyat itirazını karşılıyor | Orta | Orta | Düşük |
| 8 | `satin-alma-surecinin-ticari-degeri` | Orta | Orta (Sprint #3'te tespit edilen keyword örtüşmesi var) | Orta | Düşük + cannibalization takibi |
| 9 | `dis-kaynak-satin-alma-departmani-nedir` | Orta — temel kavram anlatımı | Orta (**cannibalization riski** — bkz. #10) | Düşük-Orta | Düşük + cannibalization takibi |
| 10 | `kobiler-icin-dis-kaynak-satin-alma` | Orta — #9 ile neredeyse aynı işlevi görüyor | Orta (**cannibalization riski** — #9 ile çift) | Düşük-Orta | Düşük + cannibalization takibi |
| 11 | `/blog` (indeks) | Düşük-Orta — arşiv/hub, dolaylı katkı | Orta — internal linking merkezi | Düşük — kendi CTA'sı yok | Düşük (otomatik) |
| 12 | `satin-almanin-sirketler-icin-stratejik-onemi` | Düşük-Orta — en genel/giriş seviyesi içerik | Orta — geniş ama düşük niyetli sorgu | Düşük | Düşük |
| 13 | `/gizlilik` | Düşük — ticari niyet taşımıyor, yalnızca güven desteği | Çok Düşük | Yok | Düşük, ama **içerik borcu var**: dosya içi not, bu metnin "jenerik placeholder, hukuk danışmanı onayı almamış" olduğunu belirtiyor — bu bir maintenance riski |

**Çıkarım:** En yüksek toplam değer `/iletisim`, `/hizmetler` ve `/`'de
yoğunlaşıyor — bu üç sayfa herhangi bir teknik/performans yatırımının
önceliği olmalı. En düşük değerli 3 sayfa (`/gizlilik`,
`satin-almanin-sirketler-icin-stratejik-onemi`, `/blog` indeksi) bakım
yatırımı gerektirmiyor, ama `/gizlilik`'in içerik borcu ayrı bir konu
(hukuki risk, SEO değil).

---

## 2. Fırsat Backlog'u (ICE Skorlaması)

Yöntem: **ICE = Impact × Confidence ÷ Effort**, her boyut 1-10 arası.
Yüksek skor = öncelik. `seo-backlog.md`'deki karşılık gelen madde
referans verildi. Confidence, veri eksikliği nedeniyle düşükse bu
açıkça belirtildi ve **Data Required** etiketlendi.

| Opportunity | Expected Impact | Confidence | Effort | Risk | ICE | Öncelik |
|---|---|---|---|---|---|---|
| GA4 Measurement ID oluşturup Cloudflare'e tanımlamak | 10 — tüm Success Metrics'in ölçümü buna bağlı | 10 — kod hazır, tek eksik gerçek ID | 2 — kullanıcı aksiyonu, kod yok | HIGH RISK (üçüncü taraf entegrasyon aktivasyonu) | **50.0** | 1 |
| Search Console mülkünü açıp sitemap göndermek | 8 — query-level optimizasyonun ön koşulu | 10 — DNS doğrulaması zaten aktif, sıfır ek iş | 1 — tamamen kullanıcı tarafında | HIGH RISK (kullanıcı hesabı aksiyonu) | **80.0** | 2 |
| KVKK çerez onayı ihtiyacının netleştirilmesi | 6 — GA4 aktivasyonunun yasal ön koşulu olabilir | 5 — hukuki belirsizlik var | 3 — banner tasarımı + entegrasyon gerektirebilir | HIGH RISK | **10.0** | 3 |
| ~~RFQ formunu ayrı bir GA4 event'i olarak izlemek~~ **(Tamamlandı — haftalık döngü #1)** | 7 — RFQ, Contact Form'un üzerinde bir Success Metric (#2 vs #3) | 8 — sorun net, çözüm net | 2 — küçük, izole kod değişikliği | LOW RISK | **28.0** | ~~4~~ ✅ |
| RFQ formuna `form_start`/abandonment izleme eklemek | 7 — Bölüm 6'daki en büyük şüpheli huni sızıntısını doğrudan ölçer | 6 — huni sızıntısı bir varsayım, bu onu doğrulayacak | 3 | LOW RISK | **14.0** | 4 |
| `LocalBusiness.address.addressLocality` doğrulaması | 5 — yerel arama/GBP eşleşmesi, ICP'nin bir kısmı yerel | 9 — tek eksik gerçek adres bilgisi | 1 — kullanıcıdan bilgi almak yeterli | HIGH RISK (iş verisi kararı) | **45.0** | 5 |
| ~~`/hizmetler` ve `/neden-teminor`'dan blog'a dönüş linki eklemek~~ **(Tamamlandı — haftalık döngü #1)** | 4 — internal linking derinliği, dolaylı SEO | 8 | 2 | LOW RISK | **16.0** | ~~6~~ ✅ |
| `/iletisim` sayfasına RFQ öncesi sık sorulan sorular (FAQ) eklemek | 8 — en yüksek değerli sayfada itiraz karşılama | 6 — mantıklı varsayım ama davranış verisiyle doğrulanmadı | 4 — içerik yazımı + tasarım | MEDIUM (içerik eklemesi, mevcut sayfa yapısını genişletiyor) | **12.0** | 6 |
| Core Web Vitals ölçümü (özellikle `/iletisim`) | 6 — dönüşüm sayfası hızı = dönüşüm oranı | 4 — ölçülmedi, tahmine dayalı | 2 — yalnızca ölçüm, düzeltme değil | LOW RISK | **12.0** | 7 |
| Kullanılmayan `@mdx-js/react` bağımlılığının kaldırılması | 1 — hiçbir Success Metric'e ölçülebilir katkısı yok | 10 | 1 | LOW RISK | **10.0** | 8 |
| Sayfa bazlı OG image + blog `ogImage` alanının doldurulması | 3 — sosyal paylaşım CTR'ı, dolaylı | 6 | 3 | LOW RISK | **6.0** | 9 |
| Blog cannibalization çifti (dis-kaynak-satin-alma-departmani-nedir / kobiler-icin-dis-kaynak-satin-alma) — başlık/keyword yeniden odaklama | 5 — ikisi de RFQ/hizmetler'e yönlendiriyor, çözülürse organik trafik daha isabetli akar | 3 — **Data Required**, Search Console olmadan gerçek query çakışması doğrulanamıyor | 5 — içerik yeniden yazımı, büyük değişiklik | HIGH RISK (büyük içerik değişikliği) | **3.0** | 10 |

*Not: "Öncelik" sütunu ICE skoruna göre sıralanmıştır; HIGH RISK
maddeler skoru yüksek olsa da kullanıcı onayı olmadan uygulanmaz —
sıralama yalnızca "bu neden önemli" bilgisini verir, otomatik uygulama
yetkisi vermez.*

---

## 3. Data Required — Search Console

Search Console API erişimi yok, veri sağlanmadı. Aşağıdaki analizler bu
yüzden **yapılamıyor** — varsayımla doldurulmadı:

- Hangi query'lerin yüksek gösterim/düşük CTR aldığı — **Data Required**
- 4-15. sıra arası "quick win" sorguları — **Data Required**
- `dis-kaynak-satin-alma-departmani-nedir` / `kobiler-icin-dis-kaynak-
  satin-alma` çiftinin gerçekten aynı query'de yarışıp yarışmadığı —
  **Data Required** (şu anki "yüksek cannibalization riski" değerlendirmesi
  yalnızca başlık/keyword metin benzerliğine dayanıyor, gerçek arama
  davranışına değil)
- Düşen/yükselen sorgular — **Data Required**
- Markalı/markasız sorgu oranı — **Data Required**

Kullanıcı Search Console CSV export'u veya erişim sağladığında, bu
bölüm `.claude/agents/seo-agent.md`'deki "Search Console Veri Modeli"
kurallarıyla dolduruacak ve yukarıdaki ICE tablosundaki Confidence
değerleri yeniden hesaplanacak.

---

## 4. GA4 Event Gap Analizi

Mevcut 10 event (`page_view`, `service_view`, `blog_view`,
`contact_page_view`, `contact_form_submit`, `rfq_form_submit`,
`phone_click`, `email_click`, `whatsapp_click`, `cta_click`)
`lib/analytics/events.ts`'te tanımlı ve hepsinin çağrı noktası var.

1. **✅ Tamamlandı (haftalık döngü #1):** RFQ gönderimi artık ayrı bir
   event. `AnalyticsEvents.RfqFormSubmit` ("rfq_form_submit") eklendi,
   `RFQForm.tsx` artık genel `contact_form_submit`'i değil kendi
   event'ini çağırıyor. Build çıktısında doğrulandı.
2. **Açık: Form başlangıcı/terk edilmesi izlenmiyor.** Ne
   `ContactForm.tsx` ne `RFQForm.tsx`, kullanıcı forma başladığında
   (ilk alan doldurulduğunda) bir event göndermiyor — yalnızca başarılı
   gönderim izleniyor. Bu, Bölüm 6'daki "Lead → RFQ" huni sızıntısı
   hipotezini gerçek veriyle test etmenin tek yolu olurdu. **Öneri:**
   `AnalyticsEvents`'e `RfqFormStart: "rfq_form_start"` eklenip formun
   ilk `onFocus`/`onChange` olayında bir kez tetiklenmesi (submit oranı
   / start oranı = terk oranı). LOW RISK, ICE 14.0 — bkz. §2, bir
   sonraki döngüde en yüksek öncelikli LOW RISK adaylardan biri.

---

## 5. Content Opportunity — Cevaplanmayan Ticari Sorular

Mevcut 13 sayfa incelendiğinde, ICP'nin (özellikle Satın Alma
Müdürü/Genel Müdür) RFQ'ya geçmeden önce muhtemelen sorduğu ama sitede
hiçbir yerde açıkça cevaplanmayan sorular tespit edildi. **Bunlar yeni
sayfa önerisi değildir — mevcut sayfalara (özellikle `/iletisim` ve
`/hizmetler`) eklenebilecek FAQ içeriği için bir fırsat listesidir:**

1. "Fiyatlandırma modeli nasıl işliyor? Aylık sabit mi, işlem başına mı?"
   — `/hizmetler` 4 paketi tanımlıyor ama hiçbiri rakam içermiyor (bilinçli
   tercih, CLAUDE.md kuralı), yine de "nasıl fiyatlandırılıyor" sorusunun
   süreç düzeyinde (rakamsız) cevabı yok.
2. "İlk pilot çalışma ne kadar sürer?" — `dis-kaynak-satin-alma-
   departmani-nedir` yazısında "pilot çalışma" kavramı tanıtılıyor ama
   süre/zaman çerçevesi hiçbir yerde yok.
3. "Hangi şehirlerde/bölgelerde hizmet veriliyor?" — Sprint #2'de
   "Türkiye Genelinde Tedarikçi Araştırması" eklendi (tedarikçi tarafı),
   ama "hangi şehirlerdeki müşterilere hizmet veriliyoruz" sorusu
   cevapsız; footer'da yalnızca "İzmir, Türkiye" var (ofis konumu, hizmet
   bölgesi değil).
4. "Minimum sözleşme süresi veya taahhüt var mı?" — RFQ formunun yasal
   uyarı metni "sipariş veya satın alma taahhüdü oluşturmaz" diyor ama
   asıl hizmet sözleşmesinin (RFQ sonrası) süre/taahhüt yapısı hiçbir
   sayfada anlatılmıyor.
5. "Ödeme kime yapılıyor — tedarikçiye mi, Teminor'a mı?" — RFQ formunda
   "Ödeme Tercihi" alanı var (Peşin/Vade) ama ödemenin akışı/kime
   yapıldığı hiçbir içerikte açıklanmıyor; bu, güven açısından kritik bir
   boşluk.
6. "Rakip/mevcut tedarikçilerimizle çalışmaya devam edebilir miyiz?" —
   `neden-teminor` "Aracı değil, ortağınız" ilkesini anlatıyor ama mevcut
   tedarikçi ilişkilerinin korunup korunmayacağı net değil.
7. "Kaç kişilik bir ekip bizimle ilgilenecek, tek kişi mi atanıyor?" —
   Hizmet 3 (Yoğun/Kurumsal) "Sabit atanmış uzman + yedek" diyor ama
   diğer 3 pakette bu netleştirilmemiş.

Bu 7 soru, `SEO_SEARCH_MAP.md`'deki mevcut "ana arama niyeti"
analiziyle örtüşüyor — hepsi işlem-niyetli, RFQ öncesi son tereddüt
noktaları. Önceliklendirme için Bölüm 2'deki ICE tablosuna "iletişim
FAQ" maddesi olarak eklendi (ICE: 12.0, öncelik #6).

---

## 6. Commercial Funnel Analizi

```
Visitor → Interested → Lead → RFQ → Customer
```

**Bu bölümdeki her tespit bir varsayımdır** — davranışsal veri (GA4
gerçek trafik, Search Console) olmadan koddan/içerikten çıkarım
yapılmıştır, ölçülmüş bir gerçek değildir.

### Visitor → Interested

Giriş noktaları: Home hero, blog yazıları, WhatsApp/organik. Home'da
hemen 2 CTA var (RFQ'ya götüren "Ücretsiz Ön Görüşme Talep Et" +
WhatsApp) — güçlü. Blog yazılarında ise CTA yalnızca yazı **sonunda**
(tek italik paragraf) ve "İlgili Yazılar" bloğunda — **varsayım:** uzun
bir yazıyı (ör. `tedarikci-dolandiriciligindan-korunma-yontemleri`, 6
bölüm) yarıda bırakan bir okuyucu hiç CTA görmeden ayrılabilir. Bu
aşamada net bir sızıntı riski var ama doğrulanmadı.

### Interested → Lead

`/neden-teminor` (itiraz karşılama sayfası) CTA'sı yalnızca sayfa
**sonunda**, 4 uzun bölüm okunduktan sonra. Ara adımda (ör. ilk bölümden
sonra) bir mikro-CTA yok. **Varsayım:** güven inşası tamamlanmadan
sayfadan ayrılan ziyaretçi hiç CTA görmüyor.

### Lead → RFQ (en güçlü sızıntı hipotezi)

Bu, koddan çıkarılabilen **en somut** bulgu: `ContactForm.tsx` **6**
alan içeriyor (Ad Soyad, Şirket, E-posta, Telefon, Sektör, Açıklama —
hepsi genel), `RFQForm.tsx` ise **14** alan içeriyor, bunların **11'i
zorunlu**, ve bazıları (Teknik Özellik, Miktar, Hedef Bütçe, Teklif Para
Birimi) ziyaretçinin elinde hazır olmayabilecek bilgiler istiyor.
Contact Form'u dolduran "Lead" durumundaki bir kullanıcının, hemen
ardından çok daha ayrıntılı bir RFQ formuna geçmesi büyük bir sürtünme
sıçraması. **Varsayım, ama güçlü bir varsayım:** Lead → RFQ arasında
muhtemelen bu sitedeki en büyük dönüşüm kaybı burada oluyor. Bu, Bölüm 4
1. ve 2. GA4 önerileriyle (RFQ'yu ayrı event yapmak + form
start/abandonment izlemek) doğrudan test edilebilir.

### RFQ → Customer

Bu aşama tamamen site dışında gerçekleşiyor (satış görüşmesi, teklif,
sözleşme) — repoda veya içerikte bu aşamayı ölçecek hiçbir sinyal yok.
**Değerlendirilemez** — CRM/satış verisi olmadan bu aşamaya dair hiçbir
çıkarım yapılmadı.

---

## 7. Sonraki Döngü İçin Not

seo-agent, bu dosyayı her haftalık döngü başında okuyacak (bkz.
`.claude/agents/seo-agent.md`, Continuous Optimization Mode). Bir
sonraki döngüde en yüksek öncelikli açık LOW RISK adaylar: `rfq_form_start`
event'i (ICE 14.0) ve `/iletisim` FAQ içeriği (ICE 12.0, MEDIUM —
Continuous Optimization Mode'da "en fazla 2 öneri" kuralına tabi, içerik
eklemesi olduğu için LOW RISK'ten biraz daha dikkatli değerlendirilmeli).

Search Console verisi sağlandığında: (a) Bölüm 3'teki "Data Required"
maddeleri doldurulacak, (b) Bölüm 2'deki ICE tablosundaki ilgili
Confidence değerleri yeniden hesaplanacak, (c) Bölüm 6'daki funnel
varsayımları GA4 gerçek verisiyle (özellikle artık aktif olan
`rfq_form_submit` ve önerilen `rfq_form_start` event'leri üzerinden)
doğrulanacak veya çürütülecek.
