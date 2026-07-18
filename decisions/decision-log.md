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

---

## DEC-2026-0002

- **Tarih:** 18 Temmuz 2026
- **Karar:** Teminor Şirket Anayasası v2.0 onaylandı. Ana
  konumlandırma **dış kaynak satınalma operasyonundan ihracat satış
  geliştirme, yabancı alıcı geliştirme ve ticari temsilciliğe**
  çevrilmiştir. Yeni ana marka cümlesi: "Üretimden Küresel Talebe."
  Satınalma ve Türkiye'den tedarik yetkinliği **kaldırılmamış**, ikinci
  ana yetkinlik olarak korunmuştur. Web sitesi ana mesajı, navigasyonu ve
  hizmet yapısı bu karara göre güncellenir (bkz. `docs/strategy/
  00-company-constitution.md` v2.0).
- **Gerekçe:** Kurucunun stratejik değerlendirmesi — ihracat satış
  geliştirme/ticari temsilcilik modelinin, satınalma dış kaynak
  modeline kıyasla daha savunulabilir bir giriş noktası ve gelir
  potansiyeli sunduğu kurucu tarafından belirlenmiştir.
- **Alternatifler:**
  - Satınalma modelini tamamen bırakmak: reddedildi — mevcut operasyonel
    altyapı (RFQ akışı, tedarikçi hafızası, onay mekanizması) doğrudan
    "Sourcing from Turkey" hizmetine taşınabilir; sıfırlamak gereksiz
    kayıptır.
  - Yalnızca satınalma odaklı kalmak: reddedildi — kurucu, ihracat satış
    geliştirmenin daha yüksek ticari potansiyel taşıdığını
    değerlendirmiştir.
- **Beklenen etki:** Web sitesi ana mesajı, hizmet paketleri, hedef
  kitle yolculukları, SEO anahtar kelime stratejisi ve blog kategorileri
  yeniden kurulur. v1.0 döneminde üretilen satınalma-merkezli içerik
  silinmez; `docs/strategy/archive/00-company-constitution-v1.0.md`
  altında arşivlenir ve "Stratejik Satınalma / Sourcing from Turkey"
  hizmetinin operasyonel referansı olarak korunur.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** İlk ücretli Buyer Validation Sprint satışı, ilk
  nitelikli RFQ, ilk temsilcilik sözleşmesi (bkz. Anayasa v2.0 §18)
- **Sonuç:** Beklemede

---

## DEC-2026-0003

- **Tarih:** 18 Temmuz 2026
- **Karar:** i18n mimarisi başlangıçta `/en` route group ile kurulacak
  (next-intl değil).
- **Gerekçe:** Şu anda yalnızca birkaç EN sayfa/blog planlanıyor;
  next-intl'in kurulum/mimari yükü bu hacimde orantısız. Tek kişilik
  operasyon için `/en` route group daha düşük maliyetli.
- **Alternatifler:**
  - next-intl ile tam i18n routing altyapısı: reddedildi — mevcut hacimde
    (birkaç EN sayfa/blog) kurulum ve bakım yükü orantısız.
- **Beklenen etki:** İlk EN içerik `/en` route group altında, ek
  bağımlılık veya yapılandırma katmanı olmadan yayınlanabilir.
- **Eşik:** EN sayfa sayısı 10-15'i geçtiğinde next-intl'e geçiş
  değerlendirilecek.
- **Tetikleyici:** Yeni bir EN sayfa/blog eklenmeden önce bu kayıt
  kontrol edilmeli.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** EN sayfa sayısı 10-15 eşiğine yaklaşıldığında
- **Sonuç:** Beklemede
