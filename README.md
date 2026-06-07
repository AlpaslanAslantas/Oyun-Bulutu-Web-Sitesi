# Oyun-Bulutu-Web-Sitesi
Oyun bulutu adındaki yapmış olduğum oyun indirme ve inceleme web sitesidir

Bu proje, Mersin Üniversitesi Teknik Bilimler Meslek Yüksekokulu Bilgisayar Programcılığı Programı, Programlama Temelleri dersi dönem sonu ödevi olarak geliştirilmiş bir oyun indirme ve inceleme sitesi prototipidir.

## 🚀 Proje Özellikleri
* **Teknolojik Altyapı:** HTML5, CSS3 ve JavaScript kullanılarak tamamen responsive olarak geliştirilmiştir.
* **Uygulamalar Sayfası:** Oyuncular için popüler araçlar (Lossless Scaling, MSI Afterburner, OBS vb.) listelenmiştir.
* **Half-Life Özel Sayfası:** Arka planda sessiz ve sürekli döngüde (loop) oynayan multimedya video entegrasyonu ile yerel sunucudan indirme başlatan aktif bir buton yer almaktadır.

## 🥚 Easter Egg (Gizli Sürpriz) Mekanizması
Half-Life sayfasının alt kısmında gizli bir levye (crowbar) objesi bulunmaktadır. Kullanıcı bu levyeyi alıp Headcrab görseline vurduğunda, JavaScript tetikleyicileri sayesinde gizli bir sayfaya yönlendirilir. Bu sayfada kullanıcıyı kült karakter G-Man ve esprili bir tebrik mesajı karşılar.

## 🛠️ Geliştirme Süreci ve Yapay Zeka (AI) Kullanımı
Bu projenin geliştirilme sürecinde, akademik dürüstlük ilkeleri gereği belirli aşamalarda yapay zeka araçlarından (LLM) **öğrenme ve algoritma mantığını kavrama** amaçlı destek alınmıştır:

1. **İndirme Butonları ve Dosya Tetikleyicileri:** Projenin başında, yerel dosya yolları üzerinden indirme işlemlerinin (download attribute) tarayıcı uyumlu ve kararlı çalışması adına yapay zekadan mantık algoritması desteği alınmış, öğrenilen yapı projeye uyarlanmıştır.

2. **Easter Egg JavaScript Mantığı:** Levye ve Headcrab görsellerinin tıklama olaylarını (Event Listeners) ardışık olarak dinleyen ve kullanıcının durumunu (levyeAlindi = true) hafızada tutarak yönlendirme yapan JavaScript mimarisinin kurulmasında yapay zeka mimarisinden ve kod bloklarından faydalanılmıştır.

*Bu yaklaşım, hazır kod kopyalamaktan ziyade yapay zekayı bir yazılım asistanı olarak kullanarak kodların mantığını öğrenmek ve projeyi sektörel standartlara ulaştırmak amacıyla tercih edilmiştir.*

## 📂 Proje Klasör Yapısı

Proje dosyaları mantıksal kategorilerine göre alt klasörler halinde modüler olarak ayrılmıştır:

* 📂 **SITEM** (Ana Dizin)
    * 📂 **Cikacakoyunsayfa/** _(Beklenen oyunlara ait alt detay sayfaları)_
        * 📄 `cyberpunk2077.html`
        * 📄 `gta6.html`
        * 📄 `maxpayne.html`
        * 📄 `witcher4.html`
    * 📂 **oyunsayfa/** _(Mevcut popüler oyunlara ait alt detay sayfaları)_
        * 📂 **Half-life/** _(Easter Egg ve özel video elementini barındıran dizin)_
        * 📄 `Doometernal.html`
        * 📄 `Gta-V.html`
        * 📄 `Mafia2.html`
        * 📄 `minecraft.html`
        * 📄 `Tf2.html`
    * 📂 **Resimler/** _(Sitede kullanılan tüm logo, ikon, oyun afişleri ve medya varlıkları)_
    * 📂 **site/** _(Ana navigasyon ve kök sayfalar)_
        * 📄 `cikicakoyunlar.html`
        * 📄 `hakkimda.html`
        * 📄 `index.html` _(Sitenin ana giriş sayfası)_
        * 📄 `oyunlar.html`
        * 📄 `style.css` _(Tüm projenin ortak stil/tasarım dosyası)_
        * 📄 `uygulamalar.html`
    * 📂 **Uygulamalarsayfa/** _(Performans ve yayıncı araçlarına ait alt detay sayfaları)_
        * 📄 `Discord.html`
        * 📄 `lossless.html`
        * 📄 `MsiAfterburner.html`
        * 📄 `OBS.html`
