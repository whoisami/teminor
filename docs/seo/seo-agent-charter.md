# Teminor — SEO Agent Charter (Stratejik Katman)

**Doküman ID:** SEO-STRAT-01
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md`

> **Bu belge `.claude/agents/seo-agent.md`'nin yerine geçmez, onu
> tamamlar.** `.claude/agents/seo-agent.md`, seo-agent'ın operasyonel
> davranışını (haftalık döngü, ICE puanlama, risk sınıflandırması,
> Analytics Health kontrolleri) tanımlar — bu belge, o operasyonel
> davranışın **stratejik neden**ini bağlar. İki belge çelişirse,
> Constitution §11 üstünlük kuralı gereği bu belge (ve onun üstündeki
> Constitution/Decision Log) önceliklidir, ama pratikte ikisi de aynı
> ilkelerden (Constitution §9, `/CLAUDE.md` "Asla" listesi) türediği için
> çelişme beklenmez.

---

## 1. Master Strategy'ye Bağlı Çalışma

seo-agent'ın önceliklendirmesi, `/CLAUDE.md`'deki Success Metrics
sıralamasının yanı sıra, `docs/strategy/01-master-strategy.md`'deki
sektör önceliklerine ve `docs/strategy/04-go-to-market.md`'deki ICP
tanımına da hizalı olmalıdır. Örneğin: içerik/anahtar kelime
önceliklendirmesi yapılırken, yalnızca mevcut `SEO_SEARCH_MAP.md`'deki
sayfa bazlı analiz değil, Master Strategy §2'deki 6 öncelikli sektör de
göz önünde bulundurulur.

## 2. Kanıtlanamayan İddia Üretmeme

Bkz. Constitution §9 ve `/CLAUDE.md` → "Asla". seo-agent, hiçbir
koşulda doğrulanmamış istatistik, müşteri sayısı veya tasarruf iddiası
üretmez veya önermez — bu kural zaten `/CLAUDE.md`'de bağlayıcıdır, bu
belge yalnızca teyit eder.

## 3. Hedef Müşteri Arama Niyetine Odaklanma

İçerik ve metadata kararları, `/CLAUDE.md`'deki ICP listesi ile
`docs/strategy/04-go-to-market.md` §4'teki karar verici rolleri
birlikte değerlendirilerek verilir. Bir anahtar kelime fırsatı, yüksek
arama hacmine sahip olsa bile, hedef ICP'nin arama niyetiyle
örtüşmüyorsa düşük öncelikli sayılır (bkz. `/CLAUDE.md` → SEO Decision
Rule, soru 1).

## 4. Spam SEO ve Keyword Stuffing Yasağı

Bkz. `/CLAUDE.md` → "Asla" (birebir bağlayıcı, bu belge tekrar etmez,
referans verir).

## 5. Search Console Veri Döngüsü

seo-agent, Search Console verisi sağlandığında `.claude/agents/
seo-agent.md`'deki "Search Console Veri Modeli" bölümündeki kurallarla
çalışır. Veri sağlanmadığı sürece hiçbir query/impression/click verisi
varsayılmaz — ilgili maddeler `SEO_GROWTH_PLAN.md` §3'te "Data Required"
olarak işaretli kalır. Bu belge bu disiplini **değiştirmez**, stratejik
gerekçesini ekler: Search Console verisi olmadan üretilen bir "fırsat",
Decision Principles (§05) §1'deki "temiz veri üretiyor mu?" filtresini
geçemez.

## 6. İç Bağlantı ve Content Cluster Yaklaşımı

Mevcut blog içeriği (`content/blog/*.mdx`) ve `SEO_SEARCH_MAP.md`'deki
cannibalization bulguları, gelecekte bir content cluster stratejisine
dönüştürülebilir: her öncelikli sektör (Master Strategy §2) veya her
hizmet paketi (Website Blueprint §11) için bir "pillar" sayfa + onu
destekleyen blog yazıları kümesi. Bu, `docs/seo/keyword-clusters.md`'deki
kümelerle ve `docs/seo/content-roadmap.md`'deki ilk 12 konuyla
uygulanmaya başlar. Şu an bu cluster yapısı **kurulmamıştır** — mevcut 7
blog yazısı ayrı ayrı, kümelenmemiş konulardır (bkz. `SEO_SEARCH_MAP.md`).

## 7. Mevcut SEO Dosyalarıyla Çelişmeme

Bu belge ve `docs/seo/` altındaki diğer dosyalar, mevcut SEO
altyapısını (`SEO_SCORE.md`, `seo-backlog.md`, `SEO_SEARCH_MAP.md`,
`SEO_GROWTH_PLAN.md`, `.claude/agents/seo-agent.md`) **kaldırmaz veya
geçersiz kılmaz.** Amaç stratejik üst bağlam sağlamaktır:

| Mevcut dosya | Rolü | Bu belgenin ilişkisi |
|---|---|---|
| `SEO_SCORE.md` | Kanıta dayalı puan kartı | Değişmedi, referans verilir |
| `seo-backlog.md` | ICE skorlu bulgu listesi | Değişmedi, referans verilir |
| `SEO_SEARCH_MAP.md` | Sayfa bazlı arama niyeti envanteri | Değişmedi, §3/§6'da referans verilir |
| `SEO_GROWTH_PLAN.md` | Haftalık döngünün okuduğu canlı plan | Değişmedi, §5'te referans verilir |
| `.claude/agents/seo-agent.md` | Operasyonel ajan tanımı | Değişmedi, bu belge onu tamamlar |

Herhangi bir gelecekteki güncelleme, mevcut 4+1 dosyanın (`SEO_SCORE.md`,
`seo-backlog.md`, `SEO_SEARCH_MAP.md`, `SEO_GROWTH_PLAN.md`,
`.claude/agents/seo-agent.md`) yapısını korumalıdır — bkz. `/CLAUDE.md`
→ Continuous Optimization Mode → "Bu modda asla yapılmaz" (yeni yönetim
dosyası oluşturmama kuralı).
