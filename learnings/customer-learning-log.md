# Teminor — Customer Learning Log

**Doküman ID:** LEARN-LOG
**Versiyon:** 1.0

## Kullanım Standardı

Bu dosya, gerçek müşteri/aday görüşmelerinden (satış görüşmesi, teşhis
görüşmesi, pilot geri bildirimi) elde edilen ham öğrenmelerin kaydıdır.

- **Yalnızca gerçekleşmiş görüşmelerden** doldurulur — varsayımsal veya
  temsili ("persona") örnekler buraya yazılmaz. Bkz. `docs/strategy/
  00-company-constitution.md` §9 (Kanıtlanamayan İddialar Yasağı) — bu
  ilke müşteri verisi için de geçerlidir: gerçekleşmemiş bir görüşmeyi
  gerçekleşmiş gibi kaydetmek, kanıtlanamayan bir iddia üretmekle
  eşdeğerdir.
- Her kayıt bir **Kayıt ID** alır: `LRN-YYYY-####` formatında.
- Bu log, `docs/strategy/04-go-to-market.md` §8'deki teşhis sorularının
  gerçek cevaplarını toplamak için birincil kaynaktır.
- Bir kayıt stratejik bir örüntüye işaret ediyorsa (örn. birden fazla
  müşteri aynı itirazı dile getiriyorsa), bu durum "Decision Log gerekir
  mi?" alanında işaretlenir ve gerekiyorsa `decisions/decision-log.md`'ye
  yeni bir karar olarak taşınır.

## Şablon Alanları

Her yeni kayıt aşağıdaki alanları içerir:

| Alan | Açıklama |
|---|---|
| Kayıt ID | `LRN-YYYY-####` |
| Tarih | Görüşme tarihi |
| Şirket / Sektör | Anonimleştirilmiş olabilir, ama sektör bilgisi tutulur (Master Strategy §2 sektörleriyle eşleşecek şekilde) |
| Görüşülen Rol | `docs/strategy/04-go-to-market.md` §4 karar verici rollerinden biri |
| Müşterinin Kullandığı İfade | Doğrudan alıntı (parafraz değil, mümkünse) |
| Problem | Müşterinin tarif ettiği somut problem |
| Mevcut Çözüm | Müşterinin şu an bu problemi nasıl çözdüğü (varsa) |
| İtiraz | Dile getirilen tereddüt/itiraz (bkz. `docs/strategy/02-messaging-guide.md` §7'deki mevcut itiraz kategorileriyle eşleşiyor mu?) |
| Ödeme İsteği Sinyali | Müşterinin ödemeye/taahhüde yakınlığına dair gözlem |
| Önerilen Ürün/Hizmet Değişikliği | Bu görüşmeden çıkan somut bir öneri (varsa) |
| Sonraki Aksiyon | Takip adımı |
| Stratejik Etkisi | Bu öğrenme mevcut stratejiyi (Master Strategy, Messaging Guide vb.) doğruluyor mu, sorguluyor mu? |
| Decision Log Gerekir mi? | Evet/Hayır — Evet ise ilgili `DEC-YYYY-####` referansı eklenir |

## Kayıtlar

_Henüz kayıt yok. İlk gerçek müşteri/aday görüşmesi sonrası bu bölüme
`LRN-2026-0001` ile başlanacaktır._
