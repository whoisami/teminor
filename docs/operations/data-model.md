# Teminor — Operation Dashboard Data Model

**Doküman ID:** OPS-02
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/operations/dashboard-prd.md`

> Bu belge kavramsal bir veri modelidir — hiçbir veritabanı şeması,
> migration veya kod bu görev kapsamında yazılmamıştır.

> **v2.0 Uyum Notu (18 Temmuz 2026):** Aşağıdaki §1-§3, v1.0 döneminde
> tanımlanan satınalma varlık modelidir ve **korunmuştur** — artık
> "Stratejik Satınalma / Sourcing from Turkey" hizmet hattının veri
> modelidir. Anayasa v2.0 ile eklenen ihracat satış geliştirme varlıkları
> için bkz. §4 (yeni). "Project Instructions §G" adlı bir belgeye bu
> güncellemede erişilememiştir; §4'teki alan listeleri Anayasa v2.0
> §9-§13'e dayanır — Project Instructions temin edildiğinde bu bölüm
> revize edilmelidir.

---

## 1. Görünür İş Kodu Formatları

Her varlık, dahili bir UUID'nin yanında, insan-okunabilir bir iş kodu
taşır:

| Varlık | Format | Örnek |
|---|---|---|
| Müşteri | `CUS-YYYY-####` | `CUS-2026-0001` |
| Tedarikçi | `SUP-YYYY-####` | `SUP-2026-0001` |
| RFQ | `RFQ-YYYY-#####` | `RFQ-2026-00001` |
| Teklif | `QUO-RFQNO-##` | `QUO-RFQ-2026-00001-01` (bir RFQ'nun 1. teklifi) |
| Sipariş | `PO-YYYY-#####` | `PO-2026-00001` |
| Sözleşme | `CTR-YYYY-####` | `CTR-2026-0001` |
| Doküman | `DOC-TYPE-CODE-V##` | `DOC-QUOTE-RFQ-2026-00001-V01` |
| Görev | `TSK-YYYY-#####` | `TSK-2026-00001` |

Kod formatları sabit genişliklidir (sıfır dolgulu) — sıralama ve arama
kolaylığı için.

## 2. Temel Varlıklar

### Müşteri (Customer)

- İş kodu: `CUS-YYYY-####`
- Şirket adı, sektör, il, çalışan aralığı (bkz. `docs/strategy/
  04-go-to-market.md` §9 veri yapısı ile uyumlu)
- İletişim kişisi/kişileri, rol (bkz. GTM §4 karar verici rolleri)
- Aktif hizmet paketi (Hizmet 1-4, bkz. `docs/strategy/
  03-website-blueprint.md` §11) veya "Pilot" statüsü
- Durum: Aday / Teşhis / Pilot / Aktif Müşteri / Pasif

### Tedarikçi (Supplier)

- İş kodu: `SUP-YYYY-####`
- Firma adı, kategori(ler) (bkz. mevcut `components/CategoryGrid.tsx`
  kategorileriyle hizalı olabilir, ama tedarikçi kategorileri iç veri
  modelinde bağımsız bir liste olarak tutulur)
- Güven derecelendirmesi (bkz. `SEO_GROWTH_PLAN.md` §5'te bahsedilen çok
  kaynaklı doğrulama kavramının operasyonel karşılığı — Yeşil/Sarı/
  Kırmızı gibi bir skala)
- Doğrulama tarihi ve kaynağı

### RFQ

- İş kodu: `RFQ-YYYY-#####`
- Bağlı müşteri (`CUS-...`)
- Ürün/hizmet, miktar, teknik özellik, istenen termin, teslim yeri
  (mevcut web sitesi RFQ formunun alanlarıyla kavramsal olarak
  hizalıdır — bkz. `components/RFQForm.tsx` — ama bu iç veri modeli
  web formunun doğrudan bir kod yansıması değildir)
- Durum (bkz. `workflow-statuses.md`)
- Bağlı teklifler (`QUO-...` listesi)

### Teklif (Quote)

- İş kodu: `QUO-RFQNO-##`
- Bağlı RFQ, bağlı tedarikçi
- Fiyat, vade, teslim süresi, geçerlilik tarihi

### Sipariş (Purchase Order)

- İş kodu: `PO-YYYY-#####`
- Bağlı RFQ, seçilen teklif, bağlı müşteri onay kaydı
- **Kural:** Bir sipariş, ilişkili bir Müşteri Onayı kaydı olmadan
  oluşturulamaz (Constitution §7).

### Onay (Customer Approval)

- Bağlı RFQ/Sipariş
- Onaylayan kişi, onay kanalı (yazılı kurumsal e-posta — Constitution §7),
  onay tarihi, onay dokümanı referansı (`DOC-...`)

### Doküman (Document)

- İş kodu: `DOC-TYPE-CODE-V##`
- Tip (Teklif, Sözleşme, Onay Yazışması, Rapor vb.), versiyon numarası
- Dosya sürümleme zorunludur (bkz. `coding-standards.md` §6)

### Görev (Task)

- İş kodu: `TSK-YYYY-#####`
- Atanan kişi, bağlı varlık (RFQ/Müşteri/Sipariş), durum, son tarih

### Audit Log

- Her kritik değişiklik (durum geçişi, onay, silme/arşivleme) için
  değiştirilemez bir kayıt: kim, ne zaman, hangi varlık, eski değer, yeni
  değer (bkz. `coding-standards.md` §2)

## 3. İlişki Özeti

```
Müşteri (1) ──< RFQ (N) ──< Teklif (N)
                  │
                  └──> Onay (1) ──> Sipariş (1) ──> Doküman (N)

Tedarikçi (1) ──< Teklif (N)

Görev (N) ──> herhangi bir varlığa bağlanabilir (polimorfik referans)
Audit Log (N) ──> herhangi bir varlığın değişikliklerini izler
```

Bu ilişki modeli, `docs/operations/workflow-statuses.md`'deki durum
makinesiyle birlikte okunmalıdır.

## 4. İhracat Satış Geliştirme Varlıkları (v2.0, yeni)

Aşağıdaki varlıklar, Teminor'un birincil hizmeti (ihracat satış
geliştirme/ticari temsilcilik) için gereken kavramsal veri modelidir.
§1'deki kod formatı standardı burada da geçerlidir.

| Varlık | Format | Örnek |
|---|---|---|
| Üretici | `MFR-YYYY-####` | `MFR-2026-0001` |
| Ürün | `PRD-YYYY-#####` | `PRD-2026-00001` |
| Yabancı Alıcı | `BUY-YYYY-####` | `BUY-2026-0001` |
| Fırsat | `OPP-YYYY-#####` | `OPP-2026-00001` |
| Ticari Sinyal | `SIG-YYYY-#####` | `SIG-2026-00001` |
| Temsilcilik Sözleşmesi | `REP-YYYY-####` | `REP-2026-0001` |
| Tedarik Talebi | `SRC-YYYY-#####` | `SRC-2026-00001` |

### Üretici (Manufacturer)

- İş kodu: `MFR-YYYY-####`
- Firma adı, web sitesi, ürün grubu, HS/GTİP, üretim yöntemi,
  malzeme/ölçü aralığı, kapasite, MOQ, teslim süresi, sertifikalar
- Kalite kontrol altyapısı, mevcut ihracat ülkeleri, hedef pazar, fiyat
  pozisyonu, numune kabiliyeti, özel üretim/OEM/private-label esnekliği
- İngilizce katalog/teknik doküman kabiliyeti, ihracat ekibi durumu,
  iletişim yetkilisi
- Kabul durumu: Aday / Zorunlu Kriterleri Karşılıyor / Reddedildi (bkz.
  Anayasa v2.0 §9 — zorunlu/tercih/red kriterleri)

### Ürün (Product)

- İş kodu: `PRD-YYYY-#####`
- Bağlı üretici (`MFR-...`), ürün grubu/alt kategori, teknik tanım,
  HS/GTİP, hedef pazar notu

### Yabancı Alıcı (Buyer Account)

- İş kodu: `BUY-YYYY-####`
- Firma adı, ülke, web sitesi, faaliyet alanı, şirket büyüklüğü
- Doğrulama durumu: Aday / Doğrulanıyor / Doğrulandı / Reddedildi (bkz.
  Anayasa v2.0 §10 — gerçek şirket varlığı, ithalat/distribütörlük/
  tedarik sinyali, yasaklı ülke/yaptırım/itibar riski kontrolü)
- **Not:** Bir dizin veya web sitesinde bulunmak, tek başına "doğrulandı"
  statüsü için yeterli değildir (Anayasa v2.0 §10).

### Kişi (Contact)

- Bağlı üretici veya yabancı alıcı, ad/unvan, karar verici fonksiyonu,
  iletişim kanalı, doğrulama notu

### Fırsat (Opportunity)

- İş kodu: `OPP-YYYY-#####`
- Bağlı üretici, bağlı yabancı alıcı, bağlı ürün
- Durum: bkz. `docs/operations/workflow-statuses.md` §"İhracat Satış
  Geliştirme Pipeline'ı" (v2.0, yeni eklenen bölüm)

### Ticari Sinyal (Commercial Signal)

- Bağlı fırsat, sinyal türü (yanıt, toplantı, RFQ, numune talebi),
  tarih, kaynak, doğrulama notu
- **Kural:** Ticari sinyal, satış/ihracat garantisi olarak sunulamaz —
  yalnızca yapılan çalışma, temas ve doğrulanan sonuç olarak raporlanır
  (Anayasa v2.0 §7.3).

### Temsilcilik Sözleşmesi (Representation Agreement)

- İş kodu: `REP-YYYY-####`
- Bağlı üretici, temsil edilen ürün/ürün grupları, ülke/bölge/segment,
  münhasırlık durumu, fiyat/teklif/müzakere sınırları, sözleşme
  imzalama/tahsilat yetkisi, komisyon oranı ve hak kazanma anı, müşteri
  koruma süresi, sözleşme sonrası devam eden komisyon hakkı (bkz.
  Anayasa v2.0 §8 — tüm unsurlar)
- **Kural:** Statü varsayılan olarak **pasif**; yalnızca yukarıdaki
  unsurları içeren yazılı sözleşme kaydı girildiğinde aktifleşir.

### Tedarik Talebi (Sourcing Request)

- İş kodu: `SRC-YYYY-#####`
- Bağlı yabancı alıcı (`BUY-...`), aranan ürün, teknik şartlar, miktar,
  hedef fiyat, teslimat noktası
- Tedarikçi adayları (bağlı `SUP-...` listesi, bkz. §2 Tedarikçi),
  teklifler (bağlı `QUO-...` listesi, bkz. §2 Teklif)
- Numune durumu, kalite durumu, teslimat durumu
- **Kural:** Bu varlık, Anayasa v2.0 §12 (Satınalma ve Türkiye'den
  Tedarik) kapsamındaki "yabancı alıcı için üretici bulma" akışının
  kavramsal karşılığıdır — §2'deki (v1.0) RFQ varlığıyla aynı
  operasyonel mantığı (tedarikçi araştırma → teklif toplama → teklif
  karşılaştırma → numune/kalite koordinasyonu → müşteri onayıyla sipariş
  koordinasyonu) paylaşır, ancak bağlı olduğu taraf Müşteri (`CUS-...`,
  yerli) değil Yabancı Alıcı'dır (`BUY-...`). Bu ayrım nedeniyle ayrı bir
  iş kodu öneki (`SRC`) kullanılır — `RFQ-YYYY-#####` ile karıştırılmaması
  için.
- **Not — form tutarlılığı:** `components/BuyerRequestForm.tsx`, bu
  varlığın yalnızca talep girişi kısmını besler (aranan ürün, teknik
  şartlar, miktar, teslimat ülkesi, numune ihtiyacı, gerekli
  sertifikalar). "Tedarikçi adayları", "teklifler", "kalite durumu" ve
  "teslimat durumu" alanları operasyonel süreçte Teminor tarafından
  doldurulur, formda yer almaz — bu beklenen bir farktır, RFQ (§2)
  varlığının web formuyla ilişkisiyle aynı desendedir. **Gerçek bir
  boşluk:** formda "hedef fiyat" alanı yok (mevcut `RFQForm.tsx`'teki
  "Hedef Bütçe" alanının eşdeğeri eksik); "teslimat noktası" da formda
  yalnızca ülke düzeyinde (`deliveryCountry`) tutuluyor, tam teslimat
  noktası değil. Bu iki fark, form güncellenmeden yalnızca burada
  raporlanmıştır (bkz. görev kapsamı — form otomatik değiştirilmedi).

### İhracat Satış Geliştirme İlişki Özeti

```
Üretici (1) ──< Ürün (N)
Üretici (1) ──< Fırsat (N) >── Yabancı Alıcı (1)
Fırsat (1) ──< Ticari Sinyal (N)
Üretici (1) ──< Temsilcilik Sözleşmesi (0..N, varsayılan pasif)

Yabancı Alıcı (1) ──< Tedarik Talebi (N) ──< Teklif (N)
Tedarik Talebi (N) >── Tedarikçi (N) (tedarikçi adayları, çoktan-çoğa)

Kişi (N) ──> Üretici veya Yabancı Alıcı'ya bağlanır
Audit Log (N) ──> bu varlıkların değişikliklerini de izler
```
