# Teminor — Messaging Guide

**Doküman ID:** STRAT-02
**Versiyon:** 1.0
**Tarih:** 16 Temmuz 2026
**Üst referans:** `docs/strategy/00-company-constitution.md`

> Bu belge web sitesi metnini, satış görüşmesi dilini veya SEO içeriğini
> **değiştirmez** — mevcut metinlerin (`app/page.tsx`, `app/hizmetler/
> page.tsx`, `content/blog/*`) hangi ilkelerden türediğini belgeler ve
> gelecekteki metin çalışmaları için referans oluşturur.

---

## 1. Marka Tonu

Sakin, güvenilir, ticari, açık, abartısız. Satış dili değil, operasyon
dili. Heyecan yaratmaya çalışmaz — netlik ve güven yaratır.

## 2. Ana Mesaj

> **"İş yükünü biz alıyoruz, kontrol sizde kalıyor."**

Bu, Constitution §5'teki ana değer önerisinin kısaltılmış, konuşma diline
yakın versiyonudur. Web sitesi hero mesajıyla (`components/Hero.tsx`:
"Satın alma departmanınız yoksa, biz oluruz.") aynı ilkeden gelir, birebir
aynı cümle olması gerekmez.

## 3. Kullanılacak İfadeler

- "İş yükünü biz alıyoruz, kontrol sizde kalıyor."
- "Yazılı onayınız olmadan hiçbir sipariş verilmez."
- "Departmanınız varsa da, ek kapasite olarak yanınızdayız."
- "Karşılaştırmalı teklif toplarız."
- "Süreci sizin yerinize yürütürüz."
- "Değerlendirme sonrası birlikte karar veririz." (kapsam dışı
  taleplerde kullanılacak — otomatik kabul/red imajı vermez)

## 4. Kaçınılacak İfadeler (Yasak)

Aşağıdaki ifadeler hiçbir kanalda (web, e-posta, LinkedIn, satış
görüşmesi) kullanılamaz:

- **en ucuz**
- **kesin tasarruf**
- **garanti**
- **her şeyi buluruz**
- **departmanınızı tamamen devralıyoruz**
- **yazılı onay olmadan karar veririz**

Bu liste, Constitution §9 (Kanıtlanamayan İddialar Yasağı) ve `/CLAUDE.md`
→ "Asla" bölümüyle aynı bağlayıcılıktadır. Mevcut web sitesi metinleri bu
kurala zaten uyumludur (SEO Sprint #1-5 boyunca doğrulanmıştır, bkz.
`SEO_SCORE.md`) — bu belge geriye dönük bir düzeltme gerektirmez, ileriye
dönük bir kısıt tanımlar.

## 5. CTA Örnekleri

- "Hemen Görüşelim" (mevcut, `components/Hero.tsx`)
- "Fiyat Teklifi İçin Bize Ulaşın" (mevcut, `app/hizmetler/page.tsx`)
- "WhatsApp'tan Yaz" (mevcut)
- "Bize ulaşın, birlikte konuşalım" (mevcut, `components/CategoryGrid.tsx`)

Yeni CTA metinleri bu tonun devamı olmalı: doğrudan, eylem odaklı,
abartısız. "Ücretsiz" kelimesinin CTA'da öne çıkarılmaması ilkesi zaten
uygulanmıştır (bkz. `decisions/` içinde bu konudaki geçmiş karar; ayrı
bir Decision Log kaydı bu doküman kapsamında oluşturulmamıştır çünkü
karar bu dokümandan önce, web sitesi çalışması sırasında alınmıştır).

## 6. Güven Mesajları

- "Her talepte en az birkaç tedarikçiden teklif toplanır." (gerçek
  değer: `MIN_SUPPLIER_COMPARISON`, kodda tek kaynaktan besleniyor —
  bkz. `lib/site.ts`)
- "Hiçbir sipariş yazılı onayınız olmadan verilmez."
- "Gizli komisyon yok — ne için ödediğinizi bilirsiniz."

## 7. İtiraz Cevapları

### Kontrol kaybı itirazı

> "Satın almayı devretmek, kontrolü kaybetmek değildir. Her teklif
> karşılaştırması sizinle paylaşılır, her sipariş yazılı onayınızdan
> geçer. Biz araştırma, müzakere ve operasyonel takibi yürütürüz; nihai
> karar mercii her zaman sizsiniz."

### Gizli komisyon itirazı

> "Ücretlendirmemiz baştan netleştirilen, anlaşılır bir yapıya dayanır.
> Tedarikçiden gizli komisyon almayız — bu, tedarikçi seçiminde tarafsız
> kalmamızı sağlar."

### Mevcut satın alma ekibi varsa

> "Zaten bir satın alma departmanınız varsa, Teminor onun yerine geçmeyi
> değil, onu güçlendirmeyi hedefler: yoğun dönem kapasite desteği,
> alternatif tedarikçi araştırması veya ikincil kategorilerde RFQ
> desteği gibi noktasal hizmetler sunarız."

Bu üç itiraz cevabı, mevcut `content/blog/*.mdx` yazılarında (özellikle
`satin-alma-departmani-olan-sirketlere-teminor-faydasi.mdx` ve
`kobiler-icin-dis-kaynak-satin-alma.mdx`) zaten işlenmiş temaların
stratejik özetidir.

## 8. Kanal Bazlı Dil Kuralları

| Kanal | Kural |
|---|---|
| Web sitesi | Resmi ama sıcak; kısa cümleler; jargon yok (bkz. `docs/strategy/03-website-blueprint.md`) |
| E-posta | Doğrudan, kişiselleştirilmiş; ilk cümlede değer önerisi |
| LinkedIn | Ticari ama insani; vaka/istatistik paylaşılmadan önce Constitution §9 kontrolünden geçer |
| Satış görüşmesi | Teşhis odaklı — önce dinle, sonra konumlandır (bkz. `docs/strategy/04-go-to-market.md` → Teşhis Soruları) |

## 9. Bu Belge ile Mevcut Web Sitesi Metni Arasındaki İlişki

Bu belge oluşturulduğunda web sitesi metinleri **değiştirilmemiştir**.
Mevcut metinler zaten bu ilkelerle büyük ölçüde uyumludur (bkz. önceki
tasarım/dil revizyonu, commit `f99b21d`). Gelecekte web sitesi metin
değişikliği yapılacaksa, bu belge referans alınır ve değişiklik
Constitution §10 (Tasarımı izinsiz değiştirme yasağı) kapsamında
kullanıcı onayı gerektirir.
