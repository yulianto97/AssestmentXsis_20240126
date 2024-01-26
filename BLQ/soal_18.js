// 18. Donna sangat menyukai kue, tetapi ia ingin badannya tetap bagus sehingga setiap Donna memakan kue dengan n kalori, 
// ia perlu berolahraga selama 0.1 x n x j menit, dengan j adalah selisih waktu dari ia memakan kue dan berolahraga (dalam satuan jam). 
// Agar tetap terhidrasi, Donna akan meminum 100 cc air setiap 30 menit berolahraga, dan 500 cc di akhir olahraga. 
// Berikut ini adalah jam makan dan kalori dari kue yang dimakan Donna hari ini
// Jam	    Kalori
//  9	    30
//  13   	20
//  15	    50
//  17	    80
// Jika Donna mulai olahraga jam 18, berapa cc air yang akan diminum Donna sepanjang berolahraga?


function hitungAirKalori(waktuMakan, kalori, mulaiOlahraga) {
    let totalOlahraga = 0;
    
    for (let i = 0; i < waktuMakan.length; i++) {
        const selisihWaktu = mulaiOlahraga - waktuMakan[i];
        const waktuMakanROti = 0.1 * kalori[i] * selisihWaktu;
        totalOlahraga += waktuMakanROti;
    }
    let waktuMinumAir = Math.floor(totalOlahraga / 30) * 100;
    const tambahanAir = 500;
    return waktuMinumAir + tambahanAir;
}

const waktuMakan = [9, 13, 15, 17];
const kalori = [30, 20, 50, 80];
const mulaiOlahraga = 18;
console.log(hitungAirKalori(waktuMakan, kalori, mulaiOlahraga) + ' cc');