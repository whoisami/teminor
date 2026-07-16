# Teminor — Operation Dashboard Data Model

**Doküman ID:** OPS-02
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/operations/dashboard-prd.md`

> Bu belge kavramsal bir veri modelidir — hiçbir veritabanı şeması,
> migration veya kod bu görev kapsamında yazılmamıştır.

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
