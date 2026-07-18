# Teminor — Go-to-Market

**Doküman ID:** STRAT-04
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md` (v2.0),
`docs/strategy/01-master-strategy.md`

> **v2.0 Uyum Notu (18 Temmuz 2026):** Bu belgedeki ICP, öncelikli 5 il,
> satış hunisi ve ilk temas mesajı, satınalma dış kaynak modeli
> döneminde tanımlanmıştır ve artık yalnızca **Stratejik Satınalma /
> Sourcing from Turkey** hizmet hattının satış hunisidir. Teminor'un
> birincil hizmeti olan ihracat satış geliştirme için go-to-market
> hunisi Anayasa v2.0 §17 "İlk Operasyon Önceliği" ile başlar: tek
> üretici + tek ürün grubu + tek alıcı segmentiyle ücretli Buyer
> Validation Sprint. Bu belge silinmemiştir; ikinci hizmet hattı için
> geçerliliğini korur.

---

## 1. ICP — 20-250 Çalışan

Ana hedef kitle çalışan sayısına göre üç alt segmente ayrılır:

| Segment | Çalışan Aralığı | Karakteristik |
|---|---|---|
| Küçük | 20-60 | Satın alma genellikle patron/operasyon müdürünün ek işi; departman yok |
| Orta | 61-150 | Tek kişilik veya çok küçük satın alma fonksiyonu olabilir; büyüme baskısı var |
| Büyük | 151-250 | Kısmi satın alma ekibi olabilir; Teminor tamamlayıcı/kapasite desteği modeliyle devreye girer |

Segmentasyonun amacı satış mesajını kalibre etmektir: küçük segmentte
"departmanınız yoksa biz oluruz" mesajı baskın, büyük segmentte "ek
kapasite" mesajı baskın olmalıdır (bkz. `02-messaging-guide.md` §3).

## 2. Öncelikli Beş İl (İlk 90 Gün)

İzmir, Manisa, Aydın, Denizli, Uşak — bkz. `decisions/decision-log.md`
→ DEC-2026-0001 için tam gerekçe.

## 3. Öncelikli Sektörler

Bkz. `01-master-strategy.md` §2: makine ve metal, endüstriyel üretim,
ambalaj ve plastik, gıda üretimi, teknik servis ve bakım, proje bazlı
işletmeler.

## 4. Karar Vericiler

- Şirket sahibi
- Genel müdür
- Operasyon müdürü
- Finans müdürü
- Satın alma sorumlusu

Bu liste, `/CLAUDE.md`'deki ICP listesiyle (Genel Müdür, Satın Alma
Müdürü, Operasyon Müdürü, Üretim Müdürü, Fabrika Sahibi, Catering/
Temizlik Firması Sahibi, Tesis Yönetim Firması) tamamen aynı değildir —
CLAUDE.md'deki liste SEO/içerik hedeflemesi için sektör-ağırlıklı bir
listedir, buradaki liste satış/outbound için rol-ağırlıklı bir listedir.
İki liste birbirini tamamlar, çelişmez.

## 5. İlk Teklif: 30 Günlük Pilot

Bkz. `01-master-strategy.md` §5. Satış görüşmesinde ilk teklif her zaman
tam kapsamlı yıllık hizmet değil, sınırlı kapsamlı 30 günlük pilottur.

## 6. Satış Hunisi

```
Farkındalık → İlk Temas → Teşhis → Pilot Teklifi → Pilot Onayı (yazılı)
            → Pilot Yürütme → Pilot Sonuç Raporu → Uzun Vadeli Teklif
            → Sözleşme
```

Bu huni, web sitesindeki Commercial Funnel analiziyle (bkz.
`SEO_GROWTH_PLAN.md` §6: Visitor → Interested → Lead → RFQ → Customer)
ilişkilidir ama birebir aynı değildir — web sitesi funnel'ı dijital
davranışı, buradaki satış hunisi insan etkileşimli süreci tanımlar. "Lead"
(web) yaklaşık "İlk Temas/Teşhis" (satış) aşamasına, "RFQ" (web) "Pilot
Teklifi/Onayı" aşamasına karşılık gelir.

## 7. İlk Temas Mesajı

> "Merhaba [Şirket], satın alma sürecinizin ne kadarının sizin
> ekibinizin zamanını aldığını merak ediyorum. 20-250 çalışan
> ölçeğindeki işletmelerde bu genellikle dağınık ve zaman alıcı bir iş
> hâline geliyor — biz bu süreci, kararı sizde bırakarak devralıyoruz.
> Kısa bir görüşmeyle mevcut durumunuzu birlikte değerlendirebilir
> miyiz?"

Bu bir şablon taslağıdır, gerçek bir gönderim değildir. Kullanılmadan
önce satış ekibi tarafından kişiselleştirilmelidir.

## 8. Teşhis Soruları

Satış görüşmesinde kullanılacak, ürün satmadan önce durumu anlamaya
yönelik sorular:

1. Satın alma işini şu an kim/kimler yürütüyor?
2. Ayda ortalama kaç tedarik talebiniz oluyor?
3. Tedarikçi karşılaştırması yapıyor musunuz, yoksa çoğunlukla tek
   kaynaktan mı alıyorsunuz?
4. Son 6 ayda bir tedarik gecikmesi veya kalite sorunu yaşadınız mı?
5. Satın alma kararlarını kim onaylıyor, süreç ne kadar sürüyor?
6. Halihazırda bir satın alma departmanınız/personeliniz var mı?
7. En çok zaman alan veya en çok sorun çıkaran kategori hangisi?

Bu sorulara verilen gerçek cevaplar `learnings/customer-learning-log.md`'ye
kaydedilmelidir — bu doküman kapsamında varsayımsal cevap üretilmemiştir.

## 9. İlk 100 Şirket Listesi — Oluşturma Kriterleri

**Bu bölüm gerçek bir şirket listesi içermez** — yalnızca listenin nasıl
oluşturulacağını ve hangi veri alanlarının tutulacağını tanımlar.

Kriterler:
- Çalışan sayısı 20-250 aralığında
- Lokasyon: İzmir, Manisa, Aydın, Denizli veya Uşak
- Sektör: Master Strategy §2'deki 6 öncelikli sektörden biri
- Aktif/faal şirket (kapanmış/pasif değil)
- Halka açık iletişim bilgisi mevcut (web sitesi veya kayıtlı telefon/
  e-posta)

Veri yapısı (her kayıt için tutulacak alanlar):

| Alan | Açıklama |
|---|---|
| Şirket adı | — |
| Sektör | Master Strategy §2 listesinden biri |
| İl | 5 öncelikli ilden biri |
| Çalışan sayısı (tahmini) | Aralık olarak (20-60 / 61-150 / 151-250) |
| İletişim kanalı | Telefon/e-posta/web formu |
| Karar verici rolü (biliniyorsa) | §4 listesinden |
| İlk temas durumu | Henüz yapılmadı / Yapıldı / Yanıt bekleniyor / Teşhis aşamasında / Pilot teklif edildi |
| Kaynak | Listenin nereden türetildiği (ticaret odası, sektörel dizin vb.) |

## 10. İlk 90 Gün KPI'ları

- İlk temas kurulan şirket sayısı
- Teşhis görüşmesi yapılan şirket sayısı
- Sunulan pilot teklifi sayısı
- Onaylanan (yazılı onaylı) pilot sayısı
- Tamamlanan pilot sayısı
- Pilottan uzun vadeli hizmete geçen müşteri sayısı

Bu KPI'lar, `/CLAUDE.md`'deki Success Metrics sıralamasıyla (Qualified
Lead, RFQ, Contact Form, Phone Click, WhatsApp Click, Organic Conversion
Rate, Organic Traffic, Keyword Ranking) tutarlıdır — web sitesi
metrikleri bu satış KPI'larının dijital girdisidir, ayrı bir ölçüm
sistemi değildir.
