# Teminor — Keyword Clusters (Stratejik Kümeler)

**Doküman ID:** SEO-STRAT-02
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/seo/seo-agent-charter.md`

> Bu belge yalnızca **stratejik kümeleri** tanımlar. Arama hacmi (search
> volume), zorluk skoru (difficulty) veya sıralama tahmini gibi hiçbir
> doğrulanmamış rakam içermez — bunlar yalnızca Search Console/üçüncü
> taraf araç verisi sağlandığında eklenir (bkz. Constitution §9,
> `SEO_GROWTH_PLAN.md` §3 "Data Required" disiplini).

> **v2.0 Uyum Notu (18 Temmuz 2026):** Kümeler §1-§8, Teminor'un artık
> ikincil hizmeti olan "Stratejik Satınalma / Sourcing from Turkey" için
> geçerliliğini korur. Anayasa v2.0 ile birincil hizmet haline gelen
> ihracat satış geliştirme için yeni kümeler §9-§10'da eklenmiştir.

---

## Küme Yapısı

Her küme: **ana tema**, **arama niyeti** (bilgi/işlem), **ilgili mevcut
içerik** (varsa, gerçek dosya referansıyla) ve **durum** (mevcut içerik
var mı / boşluk mu) içerir.

### 1. Dış Kaynak Satın Alma

- **Niyet:** Karma (bilgi + işlem) — "nedir" sorgularından "nasıl
  başlarım"a geçiş.
- **İlgili mevcut içerik:** `content/blog/dis-kaynak-satin-alma-
  departmani-nedir.mdx`, `content/blog/kobiler-icin-dis-kaynak-satin-
  alma.mdx`
- **Durum:** İçerik mevcut, ama `SEO_SEARCH_MAP.md`'de bu iki yazı
  arasında yüksek cannibalization riski tespit edilmiş durumda
  (`seo-backlog.md` → "Blog cannibalization riski"). Bu belge bu riski
  çözmez, yalnızca kümenin varlığını teyit eder.

### 2. Satın Alma Operasyonu

- **Niyet:** Bilgi (üst huni).
- **İlgili mevcut içerik:** `content/blog/satin-almanin-sirketler-icin-
  stratejik-onemi.mdx`, `content/blog/satin-alma-surecinin-ticari-
  degeri.mdx`
- **Durum:** İçerik mevcut, geniş/genel seviyede.

### 3. RFQ

- **Niyet:** İşlem (alt huni, dönüşüme yakın).
- **İlgili mevcut içerik:** `/iletisim` sayfasındaki RFQ formu
  (`components/RFQForm.tsx`), ama bu konuyu doğrudan hedefleyen bir blog
  yazısı yok.
- **Durum:** **Boşluk.** RFQ sürecini açıklayan bir içerik (RFQ nedir,
  nasıl hazırlanır, Teminor'da RFQ süreci nasıl işler) `docs/seo/
  content-roadmap.md`'de değerlendirilebilir.

### 4. Teklif Karşılaştırma

- **Niyet:** Bilgi + işlem karışık.
- **İlgili mevcut içerik:** `/neden-teminor` sayfasındaki "Kendiniz
  Yaparsanız vs. Teminor ile" karşılaştırma tablosu (bkz. `app/
  neden-teminor/page.tsx`) bu temayı kısmen kapsıyor.
- **Durum:** Sayfa düzeyinde kısmi kapsam var, ayrı bir blog yazısı yok.

### 5. Tedarikçi Araştırma

- **Niyet:** Bilgi.
- **İlgili mevcut içerik:** Birçok blog yazısında yan tema olarak geçiyor
  (`kobiler-icin-dis-kaynak-satin-alma.mdx`,
  `satin-alma-departmani-olan-sirketlere-teminor-faydasi.mdx`), ama bu
  konuya adanmış bir yazı yok.
- **Durum:** Kısmi kapsam, adanmış içerik boşluğu var.

### 6. Tedarikçi Değerlendirme

- **Niyet:** Bilgi (güven/risk odaklı).
- **İlgili mevcut içerik:** `content/blog/tedarikci-dolandiriciligindan-
  korunma-yontemleri.mdx` — bu yazı doğrulama/güven temasını doğrudan
  işliyor, siteydeki en güçlü örtüşme burada.
- **Durum:** İyi kapsanmış.

### 7. Satın Alma Personeli vs. Dış Kaynak

- **Niyet:** İşlem (karar aşaması, "kendim mi yapayım yoksa dış kaynak mı
  kullanayım" karşılaştırması).
- **İlgili mevcut içerik:** `/neden-teminor` karşılaştırma tablosu +
  `content/blog/kobiler-icin-dis-kaynak-satin-alma.mdx` (maliyet
  karşılaştırması: tam zamanlı personel vs. dış kaynak).
- **Durum:** Kısmi kapsam.

### 8. Üretim Şirketlerinde Satın Alma

- **Niyet:** Bilgi + işlem, sektör-özel.
- **İlgili mevcut içerik:** Yok — mevcut kategori havuzu
  (`components/CategoryGrid.tsx`) ve mevcut blog içeriği ağırlıklı olarak
  catering/temizlik/tesis yönetimi sektörlerine odaklı; Master Strategy
  §2'deki "makine ve metal", "endüstriyel üretim" sektörleri web sitesi
  içeriğinde henüz doğrudan temsil edilmiyor.
- **Durum:** **Boşluk** — Master Strategy'deki öncelikli sektörlerle
  mevcut web sitesi içeriği arasındaki en büyük fark burada. Bu belge bu
  farkı raporlar, kapatmaz (içerik üretimi bu görevin kapsamı dışında).

### 9. İhracat Satış Geliştirme ve Yabancı Alıcı Bulma (TR, v2.0 — yeni, birincil)

- **Niyet:** Karma (bilgi + işlem).
- **Anahtar kelimeler:** yabancı alıcı bulma, ihracat müşterisi bulma,
  yurtdışı müşteri bulma, ihracat satış geliştirme, ihracat satış
  temsilciliği, yurtdışı satış temsilcisi, distribütör bulma, ithalatçı
  bulma, ihracata uygunluk analizi, dış kaynak ihracat departmanı.
- **İlgili mevcut içerik:** Yok — bu tamamen yeni bir küme.
- **Durum:** **Boşluk.** Öncelikli TR içerik listesi için bkz.
  `docs/seo/content-roadmap.md` §"v2.0 — İhracat Satış Geliştirme".

### 10. Türkiye'den Tedarik (TR/EN, v2.0 — genişletilmiş, ikincil)

- **Niyet:** İşlem (yabancı alıcı karar aşaması).
- **Anahtar kelimeler (TR):** Türkiye'den üretici bulma, Türkiye'den
  tedarik, stratejik satınalma.
- **Anahtar kelimeler (EN):** sourcing from Turkey, find suppliers in
  Turkey, Turkish manufacturer sourcing, Turkish supplier verification,
  export sales development Turkey, outsourced export sales, buyer
  development services, distributor search services, trade
  representation Turkey.
- **İlgili mevcut içerik:** Kısmen örtüşüyor — Küme 1 (Dış Kaynak Satın
  Alma) TR tarafında zaten bu temayı işliyor, ancak **İngilizce hiçbir
  içerik yok** (site tek dilli, `lang="tr"` — bkz. audit).
  Not: keyword stuffing yasağı (Anayasa v2.0 §13, CLAUDE.md "Asla")
  burada da bağlayıcıdır.
- **Durum:** **Boşluk** (EN tarafı) + tam TR/EN i18n routing altyapısı bu
  depoda henüz kurulmamıştır — ayrı bir mimari karar gerektirir (bkz.
  final rapor "Yapılmayan İşlemler").

## Küme-Sektör Eşleşmesi (Gözlem)

Mevcut web sitesi içeriği ve kategori havuzu, ağırlıklı olarak
catering/temizlik/tesis yönetimi sektörlerine (operasyonel/ürün
kategorisi ekseni) hizmet ediyor. Master Strategy §2'deki satış
öncelikli sektörler (makine/metal, endüstriyel üretim, ambalaj/plastik,
gıda üretimi, teknik servis/bakım, proje bazlı işletmeler) ile web
sitesi içeriği arasında kısmi bir örtüşme var (gıda üretimi ~ catering
temasına yakın, ambalaj/plastik ~ Ambalaj kategorisine yakın) ama tam
hizalama yok. Bu, `docs/seo/content-roadmap.md`'de değerlendirilecek bir
gözlemdir, bu belge kapsamında bir aksiyon önerilmez.
