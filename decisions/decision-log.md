# Teminor — Decision Log

**Doküman ID:** DEC-LOG
**Versiyon:** 1.0

## Kullanım Standardı

Bu dosya, Teminor'un stratejik kararlarının kalıcı, sıralı kaydıdır.

- Her karar `DEC-YYYY-####` formatında bir kod alır (yıl + 4 haneli
  sıra numarası, sıfır dolgulu).
- Kayıtlar **kronolojik sırayla, en eski en üstte** eklenir — mevcut bir
  kayıt asla düzenlenmez veya silinmez. Bir kararın değiştiği/iptal
  edildiği durumda, yeni bir kayıt açılır ve eski kayıt "Sonuç" alanında
  yeni kayda referans verir.
- Her kayıt şu alanları içerir: **Tarih, Karar, Gerekçe, Alternatifler
  (değerlendirilip reddedilenler), Beklenen etki, Sahip, Gözden geçirme
  (tarihi), Sonuç (Beklemede/Doğrulandı/Revize edildi)**.
- Hangi kararların buraya kaydedileceği: bkz. `docs/strategy/
  00-company-constitution.md` §12 ve `docs/strategy/
  05-decision-principles.md` §2 ("Stratejik değişikliği Decision Log'a
  kaydet") — kaba kural: hedef pazar, fiyatlandırma modeli, hizmet
  kapsamı, marka konumlandırması veya risk sınırlarını etkileyen her
  karar.
- Bu dosya, Constitution'dan sonra en yüksek önceliğe sahip kaynaktır
  (bkz. `/CLAUDE.md` → Strategic Sources, sıra #2) — Constitution'la
  çelişmeyen ama onu güncel durumlar için detaylandıran kararlar burada
  tutulur.

---

## DEC-2026-0001

- **Tarih:** 16 Temmuz 2026
- **Karar:** Teminor'un hedef müşteri aralığı 20-250 çalışan olarak
  sabitlendi. Kurumsal pazar Türkiye geneli; ilk 90 günlük satış ve
  outbound odağı İzmir, Manisa, Aydın, Denizli ve Uşak olarak belirlendi.
- **Gerekçe:** Yeni kurulum döneminde saha erişimi, güven oluşturma,
  referans üretme ve satış döngüsünü kısaltma.
- **Alternatifler:**
  - Coğrafi sınır yok: reddedildi; erken faz odaklanmayı ve saha
    erişimini zayıflatır.
  - Yalnızca İzmir: reddedildi; yeterli hedef müşteri yoğunluğu ve
    sektör çeşitliliği sağlamayabilir.
- **Beklenen etki:** Satış hunisinin odaklanması ve web sitesi
  mesajlaşmasının Türkiye geneline ölçeklenebilir kalması.
- **Sahip:** Kaan, Kurucu/CEO
- **Gözden geçirme:** İlk 90 günün sonunda
- **Sonuç:** Beklemede
