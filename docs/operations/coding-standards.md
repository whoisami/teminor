# Teminor — Operation Dashboard Coding Standards

**Doküman ID:** OPS-04
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/operations/dashboard-prd.md`,
`docs/strategy/05-decision-principles.md`

> Bu belge, `operasyon.teminor.com` geliştirmesi başladığında geçerli
> olacak standartları tanımlar. Bu görev kapsamında hiçbir kod
> yazılmamıştır; bu, ileriye dönük bir referans belgesidir.

---

## 1. Soft-Delete

Hiçbir kritik kayıt (Müşteri, Tedarikçi, RFQ, Sipariş, Onay, Doküman)
veritabanından kalıcı olarak silinmez. Silme işlemleri bir `deletedAt`
zaman damgası veya eşdeğer bir arşiv alanıyla işaretlenir. Bu,
Constitution §10 ile bağlayıcıdır.

## 2. Audit Log

Aşağıdaki olaylar için değiştirilemez (immutable) bir audit log kaydı
tutulur:

- Durum geçişleri (bkz. `workflow-statuses.md`)
- Müşteri onayı kayıtları
- Soft-delete/arşivleme işlemleri
- Fiyat/teklif değişiklikleri

Her kayıt: kim (kullanıcı), ne zaman (zaman damgası), hangi varlık,
önceki değer, yeni değer.

## 3. UUID İç Kimlik + Görünür İş Kodu

Her varlık iki kimlikle tutulur:

- **UUID** — sistem içi, dış dünyaya gösterilmeyen birincil anahtar.
- **Görünür iş kodu** — insan-okunabilir, sıralı (bkz. `data-model.md` §1
  format tablosu).

## 4. Zorunlu `createdAt`/`updatedAt`

Her varlık için oluşturulma ve son güncellenme zaman damgaları
zorunludur. Zaman damgaları UTC olarak saklanır, görüntülemede yerel
saat dilimine (Türkiye, UTC+3) çevrilir.

## 5. Rol Tabanlı Erişim

İlk sürümde en az iki rol: **Yönetici** (tüm modüllere tam erişim) ve
**Operasyon Uzmanı** (RFQ/Teklif/Sipariş modüllerine erişim, sistem
ayarlarına erişim yok). Roller genişletilebilir olmalı, sabit
kodlanmamalıdır.

## 6. Dosya Sürümleme

Dokümanlar (`DOC-...`) her güncellemede yeni bir versiyon numarası alır
(`V01`, `V02` vb.) — üzerine yazma yoktur, önceki versiyonlar erişilebilir
kalır.

## 7. Para Birimi ve Tarih Standardı

- **Para birimi:** Varsayılan TRY, ama RFQ/Teklif seviyesinde farklı
  para birimi desteklenmeli (mevcut web sitesi RFQ formunda olduğu gibi
  — bkz. `components/RFQForm.tsx`, TRY/USD/EUR seçenekleri).
- **Tarih formatı:** ISO 8601 (`YYYY-MM-DD`) veri katmanında; kullanıcı
  arayüzünde Türkçe uzun format (`15 Ağustos 2026`) — mevcut web
  sitesindeki `formatPostDate` yaklaşımıyla tutarlı (bkz. `lib/blog.ts`).

## 8. Kritik Değişikliklerde Immutable Log

Bir kaydın kritik alanları (fiyat, onay durumu, tedarikçi seçimi)
değiştiğinde, eski değer asla üzerine yazılmaz — audit log'a yeni bir
satır eklenir, mevcut satır değişmez.

## 9. Veri Doğrulama

- Zorunlu alanlar (bkz. `data-model.md` her varlık için) sunucu
  tarafında doğrulanır, yalnızca istemci tarafı doğrulamaya güvenilmez —
  mevcut web sitesi `functions/api/contact.ts`'teki desenle tutarlı
  (istemci + sunucu çift doğrulama).
- E-posta/telefon formatı doğrulaması zorunlu.

## 10. Production Migration Güvenliği

- Geriye dönük uyumsuz migration'lar (kolon silme, tip değiştirme)
  yalnızca veri yedeği alındıktan sonra ve düşük trafik saatinde
  uygulanır.
- Migration'lar geri alınabilir (reversible) olacak şekilde yazılır.

## 11. Hassas Bilgi ve Secret Yönetimi

- API anahtarları, veritabanı kimlik bilgileri kodda hardcode edilmez —
  mevcut web sitesindeki `NEXT_PUBLIC_GA_MEASUREMENT_ID` ve
  `RESEND_API_KEY` yaklaşımıyla tutarlı (environment variable, secret
  yönetimi; bkz. `/CLAUDE.md` → Teknik Özet).
- Müşteri/tedarikçi iletişim bilgileri gibi kişisel veriler, erişim
  kontrolüyle korunur, gereksiz yere loglanmaz.
