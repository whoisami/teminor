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

---

## DEC-2026-0004

- **Tarih:** 18 Temmuz 2026
- **Karar:** `ManufacturerApplicationForm.tsx` ve `BuyerRequestForm.tsx`
  component'leri `/iletisim` sayfasından kaldırıldı (madde 3, Düzeltme
  Paketi). `/iletisim` artık yalnızca tek bir genel iletişim formu
  (`ContactForm.tsx`) içerir. İki component **silinmedi**, kodda kalmaya
  devam ediyor ama şu anda hiçbir sayfada kullanılmıyor (dead code).
- **Gerekçe:** İletişim sayfasını sadeleştirmek; üretici başvurusu ve
  yabancı alıcı talebi akışlarının web sitesindeki nihai konumu henüz
  karara bağlanmadı.
- **Alternatifler (henüz karar verilmedi, yalnızca olasılıklar):**
  - Kendi ayrı sayfaları (örn. `/ihracat-basvurusu`, `/tedarik-talebi`)
  - `/hizmetler` sayfasındaki ilgili hizmet kartlarının altına gömülü
    (örn. Export Readiness Assessment kartının CTA'sı doğrudan
    `ManufacturerApplicationForm`'u açar)
  - `/neden-teminor` (Dış Satınalma Hizmeti) sayfasına `BuyerRequestForm`
    eklenmesi
- **Beklenen etki:** Şimdilik tüm ilgili CTA'lar (`/iletisim#uretici-
  basvurusu`, `/iletisim#alici-talebi`) genel `/iletisim` sayfasına veya
  `/neden-teminor`'a yönlendirilecek şekilde güncellendi.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** Form component'lerinin nihai yeri karara
  bağlandığında
- **Sonuç:** Beklemede

---

## DEC-2026-0005

- **Tarih:** 18 Temmuz 2026
- **Karar:** IP/ülke bazlı dil yönlendirmesi, Next.js `middleware.ts`
  yerine **Cloudflare Pages'in kendi `functions/_middleware.ts`
  mekanizmasıyla** kuruldu.
- **Gerekçe:** Bu site `next.config.ts`'te `output: "export"` ile statik
  export edilir; Next.js middleware bir Node/Edge sunucu gerektirir ve
  statik export ile **çalışmaz**. Cloudflare Pages'in kendi middleware
  özelliği ise statik dosyaların önünde, Cloudflare edge'inde çalışan
  ayrı bir mekanizmadır — mevcut mimariyi (statik export + Cloudflare
  Pages) bozmadan aynı sonucu (ziyaretçinin ülkesine göre `/en`'e
  yönlendirme) verir. `request.cf.country`, Cloudflare'ın kendi edge
  geolocation verisidir; ek bir üçüncü taraf servise ihtiyaç yoktur.
- **Alternatifler:**
  - Next.js middleware.ts: reddedildi — statik export ile teknik olarak
    çalışmıyor.
  - next-on-pages adaptörüyle Next.js'i tam sunucu modunda çalıştırmak:
    reddedildi — DEC-2026-0003'ün "mevcut hacimde orantısız" gerekçesiyle
    aynı mantıkla, mevcut statik export mimarisini kökten değiştirmek bu
    aşamada gereksiz risk/karmaşıklık ekler.
  - İstemci taraflı `/cdn-cgi/trace` fetch + JS redirect: reddedildi —
    Cloudflare Pages middleware, aynı sonucu edge'de ve yönlendirme
    flaşı olmadan verdiği için üstün.
- **Beklenen etki:** Ziyaretçi TR IP'siyle geliyorsa kökte (`/`) kalır,
  değilse `/en` altına yönlendirilir; header'daki dil değiştirici
  `teminor_lang` cookie'siyle bunu ezebilir.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** DEC-2026-0003'teki next-intl eşiğiyle birlikte
- **Sonuç:** Beklemede

---

## DEC-2026-0006

- **Tarih:** 18 Temmuz 2026
- **Karar:** TR ve EN site artık **iki ayrı hikaye** anlatır — aynı
  içeriğin çevirisi değildir. TR kitlesi: Türk üretici (mesaj: "sizin
  ihracat satış sürecinizi biz yönetiyoruz"). EN kitlesi: yabancı alıcı/
  distributor (mesaj: "Türkiye'den doğrulanmış üretici/tedarikçi
  buluyoruz, süreci sizin için yönetiyoruz"). Bunun sonucu olarak:
  - EN sitede ayrı bir "Dış Satınalma Hizmeti" (Strategic Sourcing)
    sayfası/sekmesi **kaldırıldı** — bu hizmet yalnızca TR kitlesi
    (yerli işletmelerin satın alma departmanları) içindir.
  - Eski `/en/hizmetler` ve `/en/neden-teminor` sayfaları **silindi**;
    ikisinin alıcı-perspektifli tek karşılığı olarak
    `/en/sourcing-from-turkey` oluşturuldu. Eski URL'ler
    `public/_redirects` üzerinden 301 ile yeni sayfaya yönlendirilir.
  - `/en/iletisim` → `/en/contact` olarak yeniden adlandırıldı (tam
    İngilizce slug, SEO amaçlı), 301 ile korunuyor.
  - TR anasayfa sadeleştirildi: ana H1 "Türk üreticiler için uluslararası
    satış kanalları kurarız" oldu; "Üretimden Küresel Talebe" resmi marka
    cümlesi (Anayasa v2.0 §5) H1'den kaldırılıp footer'da küçük punto
    olarak arşivlendi — **silinmedi**. Hero'da tek CTA'ya indirgendi
    (rakip "Nasıl Çalışıyoruz?" ve "Yabancı alıcıysanız" linkleri
    kaldırıldı). Yeni "Bizimle Çalışırsanız Ne Kazanırsınız" bölümü
    eklendi (süreç odaklı, istatistik içermeyen kazanım listesi);
    bunun yerine geçtiği eski "Neden Bizimle Çalışmalısınız" (BenefitCard
    grid), "Rakamlarla" (stats) ve "Buyer Validation Sprint" bölümleri
    anasayfadan kaldırıldı (redundant).
  - `/neden-teminor` (Dış Satınalma Hizmeti, TR) hero metni netleştirildi:
    hedef kitlenin yalnızca yerli işletmelerin satın alma departmanları
    olduğu, yabancı alıcılar için olmadığı açıkça belirtildi.
  - `RoiCalculator` component'i `/neden-teminor` sayfasından kaldırıldı
    (DIY-araç hissi "premium/kurumsal" izlenimle çelişiyordu) — component
    **silinmedi**, kullanılmıyor.
- **Gerekçe:** Kurucunun stratejik değerlendirmesi — iki farklı kitleye
  aynı mesajla hitap etmek hem TR hem EN tarafını sulandırıyordu; ayrıca
  TR anasayfa çok sayıda rakip CTA ve tekrarlanan bölüm içeriyordu.
- **Alternatifler:**
  - EN sitede "Dış Satınalma Hizmeti"ni farklı bir isimle koruma:
    reddedildi — kitle uyumsuzluğu (yabancı alıcı bu hizmetin hedefi
    değil) çözülmüyor, yalnızca isim değişmiş oluyordu.
  - RoiCalculator'ı silme: reddedildi — ileride farklı bir bağlamda
    (örn. hizmetler sayfası) yeniden kullanılabilir, kod kaybı gereksiz.
- **Beklenen etki:** Her iki site de kendi kitlesine daha net, daha az
  dağınık bir mesajla hitap eder; EN SEO'su artık gerçek buyer-intent
  anahtar kelimelere (find a supplier, sourcing from Turkey) daha uygun
  URL/slug yapısına sahiptir.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** İlk EN sourcing talebi / ilk TR ihracat başvurusu
  geldiğinde mesaj netliğinin işe yarayıp yaramadığı değerlendirilecek
- **Sonuç:** Beklemede

---

## DEC-2026-0007

- **Tarih:** 19 Temmuz 2026
- **Karar:** TR ve EN anasayfalar, yalnızca birincil hizmeti (ihracat
  satış geliştirme / yabancı alıcı geliştirme) anlatacak şekilde
  netleştirildi; Dış Satınalma / Sourcing hizmetine anasayfada hiçbir
  referans, çapraz link veya CTA bırakılmadı (kendi nav sekmeleri hariç).
  Somut olarak:
  - TR anasayfadan **tamamen Dış Satınalma'ya ait** iki bölüm kaldırıldı:
    "İkincil Hizmet" navy CTA bölümü (`/neden-teminor`'a giden buton) ve
    `CategoryGrid`/`SectorGrid` component'lerinin anasayfadaki kullanımı
    — her ikisi de içerik olarak Catering/Temizlik/Otel-Restoran/Filo gibi
    yalnızca yerli Dış Satınalma müşteri profillerini anlatıyordu ve
    zaten `/neden-teminor` sayfasındaki "Örnek Senaryolar" bölümüyle
    tamamen örtüşüyordu (redundant + yanlış sayfada). Component dosyaları
    silinmedi, yalnızca kullanılmıyor. FAQ'daki "Satınalma hizmetini de
    sunuyor musunuz?" sorusu da anasayfadan kaldırıldı (aynı gerekçe).
  - TR anasayfanın Problem bölümü daha doğrudan/somut dille yeniden
    yazıldı ("Yabancı Alıcıya Ulaşmak, Üretmekten Ayrı Bir İş").
  - EN anasayfaya eksik olan ayrı bir "The Solution" bölümü eklendi
    (önceden Problem'den doğrudan "What You Gain"e geçiliyordu, Çözüm
    katmanı yalnızca hero alt metninde gömülüydü) — TR ile birebir aynı
    üç katmanlı (Problem → Çözüm → Kazanım) görsel ayrışma sağlandı.
  - EN anasayfadaki `/en/sourcing-from-turkey`'e giden "See how the full
    process works →" çapraz linki kaldırıldı — o sayfa artık yalnızca
    kendi nav sekmesinden erişiliyor, TR'de `/neden-teminor`'un anasayfaya
    hiç link vermemesiyle simetrik.
  - Arka plan renk alternasyonu (`bg-white`/`bg-light-bg`) kaldırılan
    bölümlere göre yeniden düzenlendi.
- **Gerekçe:** Kurucunun talebi — anasayfa ziyaretçisi 5 saniyede
  Teminor'un hangi problemi çözdüğünü anlamalı; iki farklı hizmetin
  (birincil ihracat/alıcı geliştirme, ikincil Dış Satınalma) anasayfada
  karışması bu netliği bozuyordu.
- **Alternatifler:**
  - `CategoryGrid`/`SectorGrid` içeriğini silmek yerine `/neden-teminor`
    sayfasına taşımak: değerlendirildi ve reddedildi — o sayfada zaten
    aynı sektörleri kapsayan "Örnek Senaryolar" bölümü var, taşımak
    duplikasyon yaratırdı; component'ler kullanılmıyor olarak bırakıldı.
- **Beklenen etki:** Anasayfa ziyaretçisi yalnızca tek bir hizmet
  anlatısıyla karşılaşır; Dış Satınalma ilgisi olan ziyaretçi kendi nav
  sekmesinden o sayfaya ulaşır, mesaj karışıklığı olmaz.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** DEC-2026-0006 ile birlikte, ilk gerçek dönüşüm
  verisi geldiğinde
- **Sonuç:** Beklemede

---

## DEC-2026-0008

- **Tarih:** 19 Temmuz 2026
- **Karar:** İki küçük düzeltme birlikte uygulandı:
  1. TR "Dış Satınalma Hizmeti" sayfası `/neden-teminor`'dan
     `/dis-satinalma-hizmeti`'ye taşındı — eski slug, nav'daki ve
     içerikteki "Dış Satınalma Hizmeti" adıyla örtüşmüyordu (SEO ve
     kullanıcı netliği açısından yanlıştı). Eski URL, `public/_redirects`
     üzerinden yeni slug'a 301 ile yönlendiriliyor. Nav (`lib/site.ts`),
     dil değiştirici path eşleme tabloları (`lib/site.ts` +
     `functions/_middleware.ts`), `sitemap.ts`, iç linkler (`/hizmetler`
     sayfası ve 3 blog yazısı) ve kod yorumları güncellendi.
  2. `/hizmetler` sayfasındaki "Stratejik Satınalma" ve "Türkiye'den
     Tedarik" kartları **tek karta birleştirildi**. Analiz: ikisi de aynı
     müşteri profiline (yabancı alıcı + yerli işletme) hitap ediyordu ve
     süreç adımları fiilen ardışık aşamalardı — "Stratejik Satınalma"
     kapsam/strateji belirleme (adım 0), "Türkiye'den Tedarik" ise
     tedarikçi araştırma/RFQ/karşılaştırma/numune/sipariş yürütme
     (asıl icra) — yani müşterinin seçtiği iki alternatif hizmet değil,
     tek bir hizmetin iki fazıydı. Birleştirme, bu ayrımı ortadan
     kaldırıp tek bir "Stratejik Satınalma ve Türkiye'den Tedarik"
     kartında hem kapsam-belirleme hem yürütme adımlarını sıralı olarak
     anlatıyor. Bu çerçeve zaten `/dis-satinalma-hizmeti` sayfasındaki
     tek-hizmet anlatımıyla tutarlı.
- **Gerekçe:** Kurucunun tespiti — nav linki ile URL uyuşmazlığı kafa
  karıştırıyordu; iki kart aynı hizmeti anlatıyormuş gibi göründüğü için
  ziyaretçiye hangisini seçeceği net değildi.
- **Alternatifler:**
  - İki kartı gerçekten ayrıştırmak (farklı "Kimler İçin"/"Süreç" ile):
    değerlendirildi ve reddedildi — mevcut içerik gerçekten aynı
    işlemin farklı fazlarını anlatıyordu, yapay bir ayrım icat etmek
    yanıltıcı olurdu.
- **Beklenen etki:** `/hizmetler` sayfasında Dış Satınalma bölümü artık
  tek, net bir hizmet olarak okunur; nav linki ile URL her zaman eşleşir.
- **Sahip:** Kaan Eröz, Kurucu
- **Gözden geçirme:** İlk Dış Satınalma RFQ talebi geldiğinde
- **Sonuç:** Beklemede
