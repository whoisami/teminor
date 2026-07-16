# Teminor — Decision Principles

**Doküman ID:** STRAT-05
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md`

> Bu belge, hem insan karar vericiler hem de bu repoda çalışan AI
> ajanları (Claude Code, seo-agent) için geçerlidir. Her yeni özellik,
> içerik parçası veya stratejik değişiklik önerisi, uygulanmadan önce bu
> filtrelerden geçer.

---

## 1. Dört Filtre

Her yeni özellik veya karar için:

1. **Müşteriye ölçülebilir değer katıyor mu?** — Soyut "daha iyi olur"
   değil, somut bir sonuç (zaman kazancı, risk azalması, netlik) var mı?
2. **Teminor operasyonunu sadeleştiriyor mu?** — Karmaşıklığı artıran
   değil, azaltan bir değişiklik mi?
3. **Tekrar eden manuel işi azaltıyor mu?** — Bir kerelik fayda mı, yoksa
   sürekli operasyonel yükü mü hafifletiyor?
4. **Gelecekte kullanılabilir temiz veri üretiyor mu?** — Karar, ileride
   analiz edilebilecek yapılandırılmış bir veri izi bırakıyor mu (bkz.
   `docs/operations/data-model.md`)?

Dördüne de "hayır" cevabı veren bir öneri, düşük öncelikli sayılır —
otomatik olarak reddedilmez, ama gerekçesi açıkça belirtilmeden
uygulanmaz.

## 2. Ek İlkeler

### Önce problem, sonra özellik

Bir özellik, kanıtlanmış bir problem olmadan önerilmez. Problem kanıtı:
gerçek müşteri geri bildirimi (`learnings/customer-learning-log.md`),
ölçülmüş veri (GA4, Search Console) veya operasyonel gözlem olabilir —
varsayım değil.

### Önce pilot, sonra otomasyon

Yeni bir süreç veya araç, önce manuel/küçük ölçekte (pilot) test edilir,
sonra otomatikleştirilir. Bu ilke hem satış modeline (30 günlük pilot,
bkz. `01-master-strategy.md` §5) hem de iç araç geliştirmeye uygulanır.

### Önce mevcut bileşeni kullan, sonra yeni bileşen ekle

Web sitesinde veya operasyon panelinde yeni bir ihtiyaç ortaya
çıktığında, önce mevcut bileşen kütüphanesi (`components/`) gözden
geçirilir. Yeni bileşen yalnızca mevcut olanlar gerçekten yetersizse
eklenir (bkz. `docs/operations/coding-standards.md`).

### Kanıtlanamayan iddia üretme

Bkz. Constitution §9. Bu ilke hem web sitesi metni hem de satış/pazarlama
materyalleri hem de iç raporlama için geçerlidir.

### Stratejik değişikliği Decision Log'a kaydet

Bkz. Constitution §12. Hangi değişikliklerin "stratejik" sayıldığına dair
kaba kural: hedef pazar, fiyatlandırma modeli, hizmet kapsamı, marka
konumlandırması veya risk sınırlarını etkileyen her karar stratejiktir.

### Tasarımı izinsiz değiştirme

Bkz. Constitution §10 ve `docs/strategy/03-website-blueprint.md` §13.

### Kritik kayıtları kalıcı olarak silme

Bkz. Constitution §10 ve `docs/operations/coding-standards.md` §1
(soft-delete).

## 3. Bu İlkelerin Uygulanma Alanı

Bu filtreler şu kararlarda kullanılır:
- Yeni web sitesi bölümü/bileşeni önerisi
- Operasyon dashboard'u modül/özellik önerisi
- SEO içerik/yapı önerisi (`.claude/agents/seo-agent.md`'deki "SEO
  Decision Rule" ile birlikte okunur — ikisi çelişmez, SEO Decision Rule
  SEO'ya özgü 3 soruyu sorar, bu belge daha genel 4 filtreyi sorar)
- Fiyatlandırma veya paket yapısı değişikliği önerisi
- Yeni bir üçüncü taraf entegrasyonu önerisi
