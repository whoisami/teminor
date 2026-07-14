# Teminor — Organik Arama Envanteri (Search Map)

Bu dosya, teminor.com'daki her indekslenebilir sayfanın arama niyeti,
mevcut metadata'sı ve internal linking durumunu tek yerden takip eder.
Search Console verisi bağlandığında, buradaki "ana arama niyeti" ve
"cannibalization riski" alanları gerçek query/impression verisiyle
çapraz doğrulanacak ve güncellenecektir.

**Son güncelleme:** 2026-07-14 (SEO Sprint #3)
**Kapsam:** 13 indekslenebilir URL (6 statik sayfa + 7 blog yazısı) —
`sitemap.xml`'de doğrulandı.

---

## / (Ana Sayfa)

- **Ana arama niyeti:** Markalı + jenerik karışık — "teminor", "dış kaynak satın alma departmanı", "satın alma danışmanlığı"
- **Hedef kullanıcı:** Karar verici (işletme sahibi, operasyon müdürü) ilk kez markayla karşılaşıyor
- **Mevcut title:** "Satın Alma Departmanınızı Biz Yönetelim" *(not template'e girmiyor — bkz. not)*
- **Mevcut meta description:** "Teminor, KOBİ'ler için dış kaynaklı satın alma departmanıdır. Talep alımından raporlamaya, tedarikçi araştırmasına kadar satın alma sürecinizi yönetir."
- **H1:** "Satın Alma Departmanınızı Biz Yönetelim."
- **Ana konu:** Dış kaynaklı satın alma departmanı hizmeti (marka değer önerisi)
- **İkincil konular:** Zaman/maliyet/risk faydaları, güven sinyalleri, hizmet paketlerine giriş
- **Bağlı hizmet:** Tüm hizmet paketleri (üst seviye)
- **Internal links:** → /iletisim (hero CTA x2, WhatsApp), /neden-teminor ("Detaylı bilgi alın"), en güncel 3 blog yazısı (dinamik)
- **Cannibalization riski:** Düşük — marka/ana sayfa olarak head query'yi doğal şekilde sahipleniyor; /hizmetler ile "satın alma departmanı" örtüşmesi niyet farkıyla (marka vs. ticari/fiyat) ayrışıyor.
- **İyileştirme ihtiyacı:** LOW RISK — blog önizleme bölümünden `/blog` indeksine doğrudan link yoktu, yalnızca tekil yazı kartları vardı (bkz. Sprint #3 düzeltmeleri).

*Not: Next.js title template'i (`%s | Teminor`) yalnızca layout'a göre alt segmentlere uygulanıyor; kök `app/page.tsx` aynı segment seviyesinde olduğu için template'e girmiyor ve `<title>` marka son eki almadan render ediliyor. Bu, framework'ün beklenen davranışı — hata değil.*

---

## /neden-teminor

- **Ana arama niyeti:** Değerlendirme aşaması — "neden dış kaynak satın alma", "satın alma departmanı outsourcing güvenilir mi"
- **Hedef kullanıcı:** Modeli değerlendiren, güven/kontrol endişesi taşıyan karar verici
- **Mevcut title:** "Neden Teminor" → render edilen `<title>`: **"Neden Teminor | Teminor"** (tespit edilen defekt, bkz. LOW RISK düzeltmeler)
- **Mevcut meta description:** "Teminor'un dış kaynaklı satın alma modelinin temel ilkeleri: ortaklık yaklaşımı, onay mekanizması, esnek operasyon modeli ve şeffaf ücretlendirme."
- **H1:** "Satın alma sürecinizi devrederken kontrolü kaybetmezsiniz."
- **Ana konu:** Ortaklık modeli, onay mekanizması, şeffaflık (4 temel ilke)
- **İkincil konular:** Kendiniz-yaparsanız-vs-Teminor karşılaştırması, sektörel örnek senaryolar
- **Bağlı hizmet:** Genel model (tüm paketler)
- **Internal links:** → /iletisim, WhatsApp; gelen: home, 4 blog yazısından (Sprint #1/#3 internal linking)
- **Cannibalization riski:** Düşük
- **İyileştirme ihtiyacı:** LOW RISK — `<title>` "Teminor | Teminor" tekrarı düzeltildi (bkz. aşağıda).

---

## /hizmetler

- **Ana arama niyeti:** Ticari/işlem niyeti — "satın alma hizmet paketleri fiyat", "RFQ hizmeti Türkiye"
- **Hedef kullanıcı:** Fiyat/paket karşılaştıran, satın almaya yakın karar verici
- **Mevcut title:** "Hizmetler" → "Hizmetler | Teminor"
- **Mevcut meta description:** "Teminor'un satın alma hizmet paketlerini inceleyin: talep hacminize uygun Başlangıç, Aktif, Yoğun/Kurumsal modelleri veya proje bazlı tedarik desteğini seçin."
- **H1:** "İhtiyacınıza göre kurulan satın alma hizmet paketleri."
- **Ana konu:** 4 hizmet paketi (Başlangıç/Aktif/Yoğun-Kurumsal/Proje Bazlı)
- **İkincil konular:** RFQ kotası, yanıt süresi, fiyatlandırma modeli (sayısal tutar yok)
- **Bağlı hizmet:** Tüm paketler (bu sayfa hizmet kataloğunun kendisi)
- **Internal links:** → /iletisim (5 CTA: 4 paket + alt), WhatsApp; gelen: 3 blog yazısından, home
- **Cannibalization riski:** Düşük-Orta — "satın alma departmanı" ifadesi home ile örtüşüyor ama niyet farkı (marka vs. ticari) ayrıştırıcı.
- **İyileştirme ihtiyacı:** Yok — Sprint #1/#2'de metadata zaten güncel içerikle hizalandı.

---

## /blog (Blog Listesi)

- **Ana arama niyeti:** Bilgi edinme — "satın alma blog", kategori/arşiv sayfası
- **Hedef kullanıcı:** Araştırma aşamasındaki, henüz markayla tanışmamış kullanıcı
- **Mevcut title:** "Blog" → "Blog | Teminor"
- **Mevcut meta description:** "Teminor blogunda satın almanın stratejik önemi, dış kaynak satın alma modeli ve KOBİ'ler için tedarik yönetimi üzerine yazılar bulabilirsiniz."
- **H1:** "Satın Alma Üzerine Yazılar"
- **Ana konu:** Blog arşivi/indeks
- **İkincil konular:** —
- **Bağlı hizmet:** Dolaylı (her yazı üzerinden)
- **Internal links:** → 7 yazının tamamı; gelen: nav, footer, home (yazı kartları üzerinden, artık ayrıca doğrudan indeks linki de var)
- **Cannibalization riski:** Yok (arşiv sayfası, tekil query hedeflemiyor)
- **İyileştirme ihtiyacı:** Yok

---

## /iletisim

- **Ana arama niyeti:** İşlem niyeti — "teminor iletişim", "RFQ formu", dönüşüm sayfası
- **Hedef kullanıcı:** Karar vermiş, teklif/iletişim isteyen kullanıcı
- **Mevcut title:** "İletişim" → "İletişim | Teminor"
- **Mevcut meta description:** "Teminor ile iletişime geçin. Formu doldurun veya doğrudan WhatsApp'tan yazın; 24 saat içinde size dönüş yapalım."
- **H1:** "Satın alma sürecinizi konuşalım."
- **Ana konu:** İletişim formu + RFQ formu (dönüşüm sayfası)
- **İkincil konular:** WhatsApp/telefon/e-posta kanalları
- **Bağlı hizmet:** Tüm paketler (giriş noktası)
- **Internal links:** Gelen: nav, footer, tüm sayfalardaki birincil CTA'lar (yoğun iç link hedefi)
- **Cannibalization riski:** Yok
- **İyileştirme ihtiyacı:** Yok

---

## /gizlilik

- **Ana arama niyeti:** Yok (ticari arama niyeti taşımaz) — yalnızca uyumluluk/güven sayfası
- **Hedef kullanıcı:** KVKK bilgisi arayan mevcut/potansiyel müşteri
- **Mevcut title:** "Gizlilik Politikası ve KVKK Aydınlatma Metni" → "...| Teminor"
- **Mevcut meta description:** "Teminor Gizlilik Politikası ve KVKK Aydınlatma Metni: kişisel verilerin işlenme amaçları, hukuki sebepleri ve haklarınız hakkında bilgi edinin."
- **H1:** Aynı başlık
- **Ana konu:** KVKK/gizlilik (yasal, jenerik placeholder — bkz. dosya içi not)
- **İkincil konular:** —
- **Bağlı hizmet:** Yok
- **Internal links:** Gelen: yalnızca footer
- **Cannibalization riski:** Yok
- **İyileştirme ihtiyacı:** Yok (indexability kararı tutarlı: noindex yok, sitemap'te var — bilinçli ve tutarlı bir seçim)

---

## /blog/dis-kaynak-satin-alma-departmani-nedir

- **Ana arama niyeti:** "dış kaynak satın alma departmanı nedir", "satın alma departmanı nasıl kurulur"
- **Hedef kullanıcı:** Konsepti yeni öğrenen karar verici
- **Mevcut title / meta description:** Frontmatter'daki `title`/`metaDescription` ile birebir
- **H1:** Post başlığı (template'ten)
- **Ana konu:** Dış kaynak satın alma departmanı — tanım, süreç, uygunluk
- **İkincil konular:** Maliyet/zaman tasarrufu, pilot çalışma modeli
- **Bağlı hizmet:** /hizmetler (pilot çalışma)
- **Internal links:** → /hizmetler (CTA); İlgili Yazılar: kobiler-icin-dis-kaynak-satin-alma, satin-almanin-sirketler-icin-stratejik-onemi
- **Cannibalization riski:** **YÜKSEK** — `kobiler-icin-dis-kaynak-satin-alma` ile hem başlık hem `keywords` alanında ciddi örtüşme ("dış kaynak satın alma departmanı" vs "dış kaynak satın alma", ikisi de "satın alma maliyet tasarrufu"/benzer temayı hedefliyor). İki yazı da "İlgili Yazılar" ile birbirine bağlı (mitigasyon var) ama net bir açı farkı (biri genel tanım, diğeri KOBİ-özel zaman/maliyet) query seviyesinde yeterince ayrışmıyor olabilir.
- **İyileştirme ihtiyacı:** MEDIUM/backlog — büyük içerik değişikliği bu sprintin kapsamı dışında, `seo-backlog.md`'ye eklendi.

## /blog/kobiler-icin-dis-kaynak-satin-alma

- **Ana arama niyeti:** "KOBİ dış kaynak satın alma", "satın alma departmanı outsourcing"
- **Hedef kullanıcı:** 20-100 çalışan ölçeğinde, tam zamanlı departman kurmayı değerlendiren işletme sahibi
- **Ana konu:** KOBİ'ler için dış kaynak satın alma modeli — zaman/maliyet tasarrufu
- **İkincil konular:** Hangi sektörler uygun, kontrol kimde kalır
- **Bağlı hizmet:** /hizmetler
- **Internal links:** → /hizmetler, /neden-teminor; İlgili Yazılar: dis-kaynak-satin-alma-departmani-nedir, satin-alma-departmani-olan-sirketlere-teminor-faydasi
- **Cannibalization riski:** **YÜKSEK** (yukarıdaki yazıyla aynı çift)
- **İyileştirme ihtiyacı:** MEDIUM/backlog (yukarıyla aynı madde)

## /blog/kobiler-icin-gizli-maliyet-analizi

- **Ana arama niyeti:** "gizli satın alma maliyetleri", "toplam sahip olma maliyeti"
- **Hedef kullanıcı:** Birim fiyat karşılaştırmasının ötesine geçmek isteyen satın alma kararvericisi
- **Ana konu:** Görünmeyen maliyet kalemleri (MOQ, lojistik, kalite reddi, yönetim zamanı)
- **İkincil konular:** Toplam maliyet tablosu, ana/yedek tedarikçi planı
- **Bağlı hizmet:** /hizmetler
- **Internal links:** → /hizmetler; İlgili Yazılar: tedarikci-dolandiriciligindan-korunma-yontemleri, satin-alma-surecinin-ticari-degeri
- **Cannibalization riski:** Düşük-Orta — `satin-alma-surecinin-ticari-degeri` ile "maliyet" temasında kavramsal örtüşme var ama açı farklı (ticari değer/fayda vs. gizli maliyet kalemleri); doğrudan keyword çakışması yok.
- **İyileştirme ihtiyacı:** Yok (izlenmeye devam edilecek)

## /blog/satin-alma-departmani-olan-sirketlere-teminor-faydasi

- **Ana arama niyeti:** "satın alma departmanı için destek", "kurumsal satın alma desteği"
- **Hedef kullanıcı:** Zaten satın alma ekibi olan, kapasite/alternatif tedarikçi desteği arayan şirket
- **Ana konu:** Mevcut satın alma departmanına tamamlayıcı destek modeli
- **İkincil konular:** Kapasite desteği, benchmark, RFQ desteği
- **Bağlı hizmet:** /hizmetler
- **Internal links:** → /hizmetler; İlgili Yazılar: tedarikci-dolandiriciligindan-korunma-yontemleri, kobiler-icin-dis-kaynak-satin-alma
- **Cannibalization riski:** Düşük — hedef kitlesi (departmanı olan şirketler) diğer "dış kaynak" yazılarından (departmanı olmayan şirketler) net ayrışıyor.
- **İyileştirme ihtiyacı:** Yok

## /blog/satin-alma-surecinin-ticari-degeri

- **Ana arama niyeti:** "satın almanın ticari faydaları", "satın alma maliyet tasarrufu"
- **Hedef kullanıcı:** Satın almayı maliyet kalemi değil değer kalemi olarak görmeyi öğrenen yönetici
- **Ana konu:** Satın alma sürecinin ticari değeri (5 fayda maddesi)
- **İkincil konular:** Nakit akışı, raporlama
- **Bağlı hizmet:** /hizmetler
- **Internal links:** → /hizmetler, /neden-teminor; İlgili Yazılar: kobiler-icin-gizli-maliyet-analizi, satin-almanin-sirketler-icin-stratejik-onemi
- **Cannibalization riski:** Orta — `keywords` alanında "satın alma maliyet tasarrufu", `dis-kaynak-satin-alma-departmani-nedir` ile birebir aynı ifadeyi paylaşıyor.
- **İyileştirme ihtiyacı:** MEDIUM/backlog — bu üçlünün (bu yazı + iki dış kaynak yazısı) keyword hedeflemesi bir sonraki içerik planlamasında netleştirilmeli.

## /blog/satin-almanin-sirketler-icin-stratejik-onemi

- **Ana arama niyeti:** "satın almanın önemi", "stratejik satın alma"
- **Hedef kullanıcı:** Satın almayı henüz stratejik bir fonksiyon olarak görmeyen işletme sahibi
- **Ana konu:** Satın almanın stratejik/rekabetçi önemi (giriş seviyesi, en üst huni içeriği)
- **İkincil konular:** Departman kurmanın maliyeti vs. dış kaynak
- **Bağlı hizmet:** /iletisim (genel CTA)
- **Internal links:** → /iletisim, /neden-teminor; İlgili Yazılar: satin-alma-surecinin-ticari-degeri, dis-kaynak-satin-alma-departmani-nedir
- **Cannibalization riski:** Düşük — en genel/giriş seviyesi içerik, diğer yazılarla tamamlayıcı.
- **İyileştirme ihtiyacı:** Yok

## /blog/tedarikci-dolandiriciligindan-korunma-yontemleri

- **Ana arama niyeti:** "tedarikçi dolandırıcılığı", "tedarikçi doğrulama yöntemleri"
- **Hedef kullanıcı:** Risk/güvenlik odaklı satın alma kararvericisi
- **Ana konu:** Tedarikçi doğrulama disiplini ve sözleşmesel koruma
- **İkincil konular:** Risk türleri (sahte firma, kalite ikamesi, hayalet teslimat)
- **Bağlı hizmet:** /hizmetler
- **Internal links:** → /hizmetler; İlgili Yazılar: kobiler-icin-gizli-maliyet-analizi, satin-alma-departmani-olan-sirketlere-teminor-faydasi
- **Cannibalization riski:** Yok — sitede benzersiz bir açı (risk/dolandırıcılık), başka hiçbir sayfa bu temayı hedeflemiyor.
- **İyileştirme ihtiyacı:** Yok

---

## Özet — Cannibalization Riski Yüksek Çiftler

| Sayfa A | Sayfa B | Ortak hedef | Mevcut mitigasyon |
|---|---|---|---|
| `dis-kaynak-satin-alma-departmani-nedir` | `kobiler-icin-dis-kaynak-satin-alma` | "dış kaynak satın alma (departmanı)" | Karşılıklı "İlgili Yazılar" linki mevcut; içerik açısı henüz yeterince ayrışmamış |
| `dis-kaynak-satin-alma-departmani-nedir` | `satin-alma-surecinin-ticari-degeri` | "satın alma maliyet tasarrufu" (keyword) | Dolaylı — doğrudan link yok |

Bu iki bulgu `seo-backlog.md`'ye MEDIUM öncelikle eklendi. Çözüm (başlık/keyword
yeniden odaklama veya içerik birleştirme) "büyük içerik değişikliği" sayılacağı
için bu sprintte uygulanmadı — kullanıcı onayı ve ayrı bir içerik planlama
turu gerektirir.
