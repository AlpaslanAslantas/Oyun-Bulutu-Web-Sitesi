let vurusSayisi = 0;
let levyeAlindi = false;
const takipci = document.getElementById('takipci-levye');

function levyeyiAl() {
    levyeAlindi = true;
    document.body.classList.add('levye-modu'); // Fare imlecini gizler
    document.getElementById('levye').style.display = 'none'; // Yerdeki levyeyi siler
    
    // Takip eden levyeyi görünür yap
    takipci.style.display = 'block';
    
    document.getElementById('ipucu').innerText = "CROWBAR KUŞANILDI! Headcrab'i avla!";
}

// Resmin fareyi takip etmesini sağlayan sihirli kod
document.addEventListener('mousemove', (e) => {
    if (levyeAlindi) {
        // Resmin farenin tam ucunda durması için koordinatları ayarla
        // -50 ve -50 değerlerini resminin duruşuna göre değiştirebilirsin
        takipci.style.left = (e.clientX - 20) + 'px';
        takipci.style.top = (e.clientY - 20) + 'px';
    }
});

// Vurma İşlemi
document.getElementById('headcrab').addEventListener('click', function() {
    if (!levyeAlindi) {
        alert("Silahın yok!");
        return;
    }

    vurusSayisi++;
    this.classList.add('hasar-aldi');
    setTimeout(() => this.classList.remove('hasar-aldi'), 150);

    if (vurusSayisi >= 4) {
        this.classList.add('oldu');
        setTimeout(() => {
            window.location.href = "halflife_easteregg.html";
        }, 1000);
    }
});