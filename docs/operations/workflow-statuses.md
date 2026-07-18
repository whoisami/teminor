# Teminor — RFQ Workflow Statuses

**Doküman ID:** OPS-03
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/operations/dashboard-prd.md`,
`docs/operations/data-model.md`

> Bu belge, bir RFQ kaydının (`RFQ-YYYY-#####`) yaşam döngüsünü tanımlar.
> Kavramsal bir durum makinesidir — hiçbir uygulama kodu bu görev
> kapsamında yazılmamıştır.

> **v2.0 Uyum Notu (18 Temmuz 2026):** Aşağıdaki durum makinesi, artık
> "Stratejik Satınalma / Sourcing from Turkey" hizmet hattının RFQ akışını
> tanımlar ve değişmeden korunur. Teminor'un birincil hizmeti (ihracat
> satış geliştirme) için ayrı bir pipeline aşağıda "İhracat Satış
> Geliştirme Pipeline'ı" başlığı altında eklenmiştir.

---

## Durum Listesi

### 1. Taslak

- **Açıklama:** RFQ oluşturuldu ama henüz müşteriye teyit için gönderilmedi
  veya eksik bilgi içeriyor.
- **Giriş koşulu:** Yeni bir RFQ kaydı açıldığında (dahili veya web
  sitesi RFQ formu üzerinden gelen bir talebin sisteme işlenmesiyle).
- **Çıkış koşulu:** Talep detayları (ürün/hizmet, miktar, teknik özellik,
  termin, teslim yeri) eksiksiz.
- **Sonraki ana aksiyon:** Müşteriye Gönderildi durumuna geçiş.

### 2. Müşteriye Gönderildi

- **Açıklama:** Talep detayları müşteriyle teyit için paylaşıldı.
- **Giriş koşulu:** Taslak tamamlandı ve müşteriye iletildi.
- **Çıkış koşulu:** Müşteri teyit etti veya ek bilgi istendi.
- **Sonraki ana aksiyon:** Müşteri Bilgisi Bekleniyor veya doğrudan RFQ
  Onaylandı.

### 3. Müşteri Bilgisi Bekleniyor

- **Açıklama:** Talep netleştirmek için müşteriden ek bilgi/teyit
  bekleniyor.
- **Giriş koşulu:** İlk gönderimde eksik/belirsiz bir detay tespit
  edildi.
- **Çıkış koşulu:** Müşteri eksik bilgiyi sağladı.
- **Sonraki ana aksiyon:** RFQ Onaylandı durumuna geçiş.

### 4. RFQ Onaylandı

- **Açıklama:** Talep detayları netleşti, tedarikçi araştırmasına
  başlanabilir.
- **Giriş koşulu:** Müşteri talebi teyit etti (bu, Constitution §7'deki
  yazılı müşteri onayından farklıdır — burada onaylanan talebin
  *doğruluğu*, sipariş onayı değildir).
- **Çıkış koşulu:** Tedarikçi araştırması başladı.
- **Sonraki ana aksiyon:** Tedarikçi Araştırılıyor durumuna geçiş.

### 5. Tedarikçi Araştırılıyor

- **Açıklama:** Uygun tedarikçiler (mevcut veya alternatif) belirleniyor.
- **Giriş koşulu:** RFQ onaylandı.
- **Çıkış koşulu:** En az bir tedarikçiye RFQ iletildi.
- **Sonraki ana aksiyon:** Teklifler Bekleniyor durumuna geçiş.

### 6. Teklifler Bekleniyor

- **Açıklama:** Tedarikçilerden fiyat/termin teklifi bekleniyor.
- **Giriş koşulu:** RFQ, tedarikçilere iletildi.
- **Çıkış koşulu:** Yeterli sayıda teklif toplandı (bkz. web sitesindeki
  `MIN_SUPPLIER_COMPARISON` ilkesinin operasyonel karşılığı —
  `lib/site.ts`'te tanımlı sayı, iç operasyon hedefidir).
- **Sonraki ana aksiyon:** Karşılaştırma Hazırlanıyor durumuna geçiş.

### 7. Karşılaştırma Hazırlanıyor

- **Açıklama:** Toplanan teklifler tek bir karşılaştırma tablosunda
  birleştiriliyor.
- **Giriş koşulu:** Yeterli teklif toplandı.
- **Çıkış koşulu:** Karşılaştırma tablosu hazır ve müşteriye sunulmaya
  uygun.
- **Sonraki ana aksiyon:** Müşteri Onayı Bekleniyor durumuna geçiş.

### 8. Müşteri Onayı Bekleniyor

- **Açıklama:** Karşılaştırma müşteriye sunuldu, yazılı onay bekleniyor.
- **Giriş koşulu:** Karşılaştırma tablosu müşteriyle paylaşıldı.
- **Çıkış koşulu:** Müşteriden yazılı kurumsal e-posta onayı alındı
  (Constitution §7 — bu koşul esnetilemez).
- **Sonraki ana aksiyon:** Onaylandı durumuna geçiş.

### 9. Onaylandı

- **Açıklama:** Müşteri, belirli bir tedarikçi/teklifi yazılı olarak
  onayladı.
- **Giriş koşulu:** Yazılı onay kaydı (`Onay` varlığı, bkz. `data-model.md`)
  oluşturuldu.
- **Çıkış koşulu:** Sipariş kaydı (`PO-...`) oluşturuldu.
- **Sonraki ana aksiyon:** Sipariş Verildi durumuna geçiş.

### 10. Sipariş Verildi

- **Açıklama:** Sipariş, seçilen tedarikçiye resmi olarak iletildi.
- **Giriş koşulu:** Onay kaydı mevcut ve sipariş oluşturuldu.
- **Çıkış koşulu:** Tedarikçi siparişi kabul etti ve sevkiyat süreci
  başladı.
- **Sonraki ana aksiyon:** Sevkiyatta durumuna geçiş.

### 11. Sevkiyatta

- **Açıklama:** Ürün/hizmet tedarikçiden müşteriye doğru hareket
  halinde.
- **Giriş koşulu:** Tedarikçi sevkiyatı başlattı.
- **Çıkış koşulu:** Teslimat gerçekleşti.
- **Sonraki ana aksiyon:** Teslim Edildi durumuna geçiş.

### 12. Teslim Edildi

- **Açıklama:** Ürün/hizmet müşteriye ulaştı, ama kapanış/raporlama
  tamamlanmadı.
- **Giriş koşulu:** Teslimat teyidi alındı.
- **Çıkış koşulu:** Teslimat kalitesi/miktarı doğrulandı, ilgili
  dokümantasyon tamamlandı.
- **Sonraki ana aksiyon:** Tamamlandı durumuna geçiş.

### 13. Tamamlandı

- **Açıklama:** RFQ yaşam döngüsü tamamen kapandı, raporlamaya hazır.
- **Giriş koşulu:** Teslimat doğrulandı ve dokümantasyon tamam.
- **Çıkış koşulu:** Yok — bu bir nihai (terminal) durumdur.
- **Sonraki ana aksiyon:** Aylık raporlamaya dahil edilir (bkz. Master
  Strategy §4 — "aylık raporlanır").

### 14. İptal

- **Açıklama:** RFQ, herhangi bir aşamada müşteri veya Teminor tarafından
  iptal edildi.
- **Giriş koşulu:** Herhangi bir aktif durumdan tetiklenebilir (Taslak
  hariç tüm durumlardan).
- **Çıkış koşulu:** Yok — nihai (terminal) durum. Kayıt **silinmez**,
  soft-delete/arşiv mantığıyla korunur (Constitution §10).
- **Sonraki ana aksiyon:** Audit Log'a iptal gerekçesi kaydedilir.

### 15. Askıda

- **Açıklama:** RFQ, geçici bir nedenle (müşteri talebi, tedarikçi
  belirsizliği vb.) duraklatıldı.
- **Giriş koşulu:** Herhangi bir aktif durumdan tetiklenebilir.
- **Çıkış koşulu:** Askıya alma nedeni ortadan kalktığında, RFQ askıya
  alındığı durumdan devam eder.
- **Sonraki ana aksiyon:** Askıya alma nedeninin periyodik olarak gözden
  geçirilmesi (Görev/Task ataması önerilir).

## Durum Akış Diyagramı (Özet)

```
Taslak → Müşteriye Gönderildi → [Müşteri Bilgisi Bekleniyor] → RFQ Onaylandı
       → Tedarikçi Araştırılıyor → Teklifler Bekleniyor
       → Karşılaştırma Hazırlanıyor → Müşteri Onayı Bekleniyor
       → Onaylandı → Sipariş Verildi → Sevkiyatta → Teslim Edildi
       → Tamamlandı

(Herhangi bir aşamadan) → İptal | Askıda
```

---

## İhracat Satış Geliştirme Pipeline'ı (v2.0, yeni)

Bu pipeline, bir **Fırsat** (`OPP-YYYY-#####`) kaydının yaşam döngüsünü
tanımlar — Anayasa v2.0'ın birincil hizmeti olan ihracat satış
geliştirme/ticari temsilcilik için. Yukarıdaki RFQ durum makinesiyle
**çakışmaz**; bir Fırsat, "RFQ" ve "Numune" aşamalarında yukarıdaki
Sourcing RFQ akışına dallanabilir (bir yabancı alıcının Türkiye'den
tedarik ihtiyacı doğduğunda).

```
Manufacturer Candidate → Manufacturer Qualified → Product Ready
    → Market Selected → Buyer Account Identified → Decision Maker Verified
    → Outreach Prepared → Contacted → Follow-up → Positive Signal
    → Meeting → RFQ → Sample → Offer → Negotiation → Won/Lost
    → Representation Opportunity → Trading Opportunity
```

| Durum | Açıklama |
|---|---|
| Manufacturer Candidate | Üretici aday olarak eklendi, Anayasa v2.0 §9 kriterlerine göre henüz değerlendirilmedi. |
| Manufacturer Qualified | Üretici zorunlu kabul kriterlerini karşılıyor. |
| Product Ready | Ürün/ürün grubu ihracat uygunluk analizinden geçti. |
| Market Selected | Hedef pazar ve alıcı segmenti belirlendi. |
| Buyer Account Identified | Uygun yabancı alıcı adayı bulundu (henüz doğrulanmadı). |
| Decision Maker Verified | Alıcı tarafında karar verici doğrulandı (Anayasa v2.0 §10). |
| Outreach Prepared | İlk temas materyali/mesajı hazırlandı. |
| Contacted | İlk temas kuruldu. |
| Follow-up | Takip aşamasında. |
| Positive Signal | Olumlu ticari sinyal alındı (Commercial Signal kaydı açıldı). |
| Meeting | Görüşme gerçekleşti. |
| RFQ | Alıcı teklif talebinde bulundu — gerekirse Sourcing RFQ akışına bağlanır. |
| Sample | Numune süreci işletiliyor. |
| Offer | Teklif iletildi. |
| Negotiation | Müzakere aşamasında. |
| Won/Lost | Fırsat kazanıldı veya kaybedildi (terminal durum, soft-delete ile korunur). |
| Representation Opportunity | Tekrarlanan olumlu sonuç, temsilcilik görüşmesini gündeme getirdi. |
| Trading Opportunity | Teminor'un kendi adına alım-satım yapması değerlendiriliyor. |

**Not:** "Won/Lost" bir terminal durumdur ama kalıcı silinmez —
Constitution v2.0 §10 (soft-delete/arşivleme ilkesi v1.0'dan değişmeden
korunmuştur, bkz. `coding-standards.md` §1).
