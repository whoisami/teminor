# Teminor — Operation Dashboard PRD

**Doküman ID:** OPS-01
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md`

> Bu belge bir ürün gereksinim dokümanıdır (PRD) — kod içermez, kod
> yazılmasını başlatmaz. Bu görev kapsamında `operasyon.teminor.com` için
> hiçbir dosya oluşturulmamıştır (bkz. ADIM 14).

---

## 1. Kapsam

**Alan adı:** `operasyon.teminor.com` (ayrı bir subdomain/uygulama —
`teminor.com` marketing sitesinden bağımsız bir codebase olması
beklenir, bu depo kapsamında değildir).

**İlk sürüm kullanıcısı:** Yalnızca Teminor ekibi. Müşteri portalı veya
tedarikçi portalı **ilk sürümde yoktur** (Constitution §10).

## 2. Amaç

RFQ'dan teslimata kadar olan iç operasyon akışını (bkz.
`01-master-strategy.md` §4) dijital olarak takip etmek, mevcut e-posta/
tablo tabanlı süreçlerin yerini almak.

## 3. Modüller (İlk Sürüm)

| Modül | Amaç |
|---|---|
| Dashboard | Genel durum özeti — açık RFQ sayısı, onay bekleyenler, gecikmeler |
| Müşteriler | Müşteri kaydı, iletişim bilgisi, aktif hizmet paketi |
| Tedarikçiler | Tedarikçi kaydı, kategori, güven derecelendirmesi |
| RFQ | Talep girişi, durum takibi (bkz. `workflow-statuses.md`) |
| Teklifler | Tedarikçilerden gelen teklif kayıtları |
| Teklif Karşılaştırma | Bir RFQ'ya bağlı tekliflerin yan yana görünümü |
| Müşteri Onayları | Yazılı onay kaydı — Constitution §7'nin operasyonel karşılığı |
| Siparişler | Onaylanmış RFQ'dan doğan sipariş kayıtları |
| Dokümanlar | Teklif, sözleşme, onay yazışması gibi dosyaların saklanması |
| Görevler | Ekip içi iş atamaları ve takibi |
| Raporlama | Aylık müşteri raporları, dahili performans özetleri |
| Audit Log | Kritik değişikliklerin değiştirilemez kaydı (bkz. `coding-standards.md` §2) |

## 4. Kapsam Dışı (İlk Sürüm)

- Müşteri portalı (müşterinin kendi RFQ'sunu görebileceği arayüz)
- Tedarikçi portalı (tedarikçinin teklif girebileceği arayüz)
- Otomatik faturalama/ödeme entegrasyonu
- Mobil uygulama

Bu kapsam dışı öğeler ileride ayrı bir Decision Log kaydıyla kapsama
alınabilir.

## 5. Kritik Tasarım İlkeleri

- **Yetki ve onay merkezi:** "Müşteri Onayları" modülü, sistemin
  merkezinde yer alır — bir RFQ, yazılı müşteri onayı olmadan
  "Siparişler" modülüne geçemez (Constitution §7).
- **Soft-delete zorunlu:** Hiçbir müşteri, tedarikçi, RFQ veya sipariş
  kaydı kalıcı silinmez (bkz. `coding-standards.md` §1).
- **Rol tabanlı erişim:** İlk sürümde en az iki rol beklenir (Yönetici,
  Operasyon Uzmanı) — bkz. `coding-standards.md` §5.
- **Görünür iş kodu + iç UUID:** Her varlık hem insan-okunabilir bir kod
  (örn. `RFQ-2026-00001`) hem de dahili bir UUID taşır (bkz.
  `data-model.md`).

## 6. Bu Belge ile Kod İlişkisi

Bu PRD, bir sonraki aşamada (bu görev kapsamında değil) bir geliştirme
planına dönüştürülebilir. Bu belge tek başına hiçbir dosya, route veya
bileşen oluşturulmasını gerektirmez veya başlatmaz.
