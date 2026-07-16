# Teminor — Master Strategy

**Doküman ID:** STRAT-01
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md`

---

## 1. Hedef Pazar Tanımı

- **Çalışan aralığı:** 20-250 (Constitution §6 ile birebir)
- **Kurumsal pazar:** Türkiye geneli
- **İlk 90 günlük satış/outbound odağı:** İzmir, Manisa, Aydın, Denizli,
  Uşak (bkz. `decisions/decision-log.md` → DEC-2026-0001; bu 5 il seçimi
  bir Decision Log kaydına bağlıdır, değiştirilmeden önce yeni bir karar
  kaydı gerekir)

## 2. Öncelikli Sektörler

1. Makine ve metal
2. Endüstriyel üretim
3. Ambalaj ve plastik
4. Gıda üretimi
5. Teknik servis ve bakım
6. Proje bazlı işletmeler

Bu liste, `docs/strategy/04-go-to-market.md`'deki segmentasyonun ve
`docs/seo/keyword-clusters.md`'deki içerik önceliklendirmesinin temelidir.
Önceki web sitesi içeriğinde (blog yazıları, kategori havuzu) yer alan
catering/temizlik/tesis yönetimi gibi sektörler bu listeyle **çelişmez** —
onlar operasyonel/ürün kategorisi odaklı (bkz. mevcut `content/blog/*`,
`components/CategoryGrid.tsx`), buradaki liste ise satış/ICP odaklı
sektör önceliğidir. İki liste farklı eksenlerde çalışır; web sitesi
içeriği bu doküman kapsamında **değiştirilmemiştir**.

## 3. Ana Hizmet

**Dış kaynak satın alma operasyon desteği.** Teminor, müşterinin satın
alma ihtiyacını uçtan uca yönetir — talep toplamadan teslimat takibine
kadar.

## 4. Temel Hizmet Akışı

```
Talep → RFQ → Tedarikçi Araştırma → Teklif → Karşılaştırma
      → Müşteri Onayı → Sipariş → Teslimat Takibi
```

Bu akış, `docs/operations/workflow-statuses.md`'deki durum makinesinin
ve `docs/operations/data-model.md`'deki RFQ/Teklif/Sipariş varlıklarının
kavramsal temelidir. Web sitesindeki mevcut "Nasıl Çalışır?" bölümü
(`components/HowItWorks.tsx`) bu akışın kullanıcıya dönük, sadeleştirilmiş
bir özetidir — bu doküman iç operasyon akışının tam halidir, ikisi
çelişmez, ikincisi birincisinin detaylandırılmış hâlidir.

## 5. İlk Ticari Giriş: 30 Günlük Pilot

Yeni bir müşteriyle ilişki, sınırlı kapsamlı bir **30 günlük pilot
hizmetle** başlar:

- Dar/tanımlı bir kategoriyle sınırlıdır
- Belirli sayıda ürün kalemi ve RFQ içerir
- Açık bir süre ve teslimat planına sahiptir
- Sonunda somut bir karşılaştırma ve öneri raporuyla sonuçlanır
- Devam etme zorunluluğu yoktur

**Önemli:** Pilot, ücretsiz bir danışmanlık hizmeti değildir — ücretli,
sınırlı kapsamlı bir ilk taahhüttür. Bu ayrım `docs/strategy/
02-messaging-guide.md`'de bağlayıcıdır.

## 6. Uzun Vadeli Model

Pilot sonrası, müşteri aylık veya yıllık bir dış kaynak satın alma
hizmetine geçer (mevcut web sitesindeki Hizmet 1-4 paket yapısı, bkz.
`app/hizmetler/page.tsx` — bu doküman bu paket yapısını **değiştirmez**,
yalnızca stratejik bağlamını netleştirir).

## 7. Ana Risk Sınırları

Aşağıdaki sorumluluklar **her zaman müşteriye aittir**, Teminor bunları
üstlenmez:

- Teknik doğrulama (satın alınan ürünün/hizmetin teknik uygunluğu)
- Ödeme
- Garanti
- Tedarikçi ifası (performans/teslimat riski nihayetinde tedarikçiye
  aittir, Teminor doğrulama ve takip sağlar ama garantör değildir)
- Nihai karar

Bu sınırlar, Constitution §7 (Yetki ve Kontrol İlkesi) ile birebir
uyumludur ve web sitesindeki RFQ formunun yasal uyarı metniyle
(`components/RFQForm.tsx`) tutarlıdır — o metin bu stratejik ilkenin
kullanıcıya dönük ifadesidir.

## 8. Bu Strateji ile Mevcut Uygulama Arasındaki İlişki

Bu belge, mevcut kod tabanında zaten uygulanmış davranışları (RFQ formu,
onay mekanizması, hizmet paketleri) **iptal etmez veya değiştirmez** —
onların stratejik gerekçesini belgeler. Kod ile bu belge arasında bir
çelişki tespit edilirse (örn. kodun stratejiyle uyuşmayan bir varsayım
içerdiği), bu bir Decision Log kaydı gerektirir, otomatik kod değişikliği
gerektirmez (bkz. Constitution §11 — üstünlük kuralı yalnızca ajan
kararlarını yönlendirir, kod otomatik değiştirilmez).
