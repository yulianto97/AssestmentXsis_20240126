// 20. A dan B bermain suit Gunting Batu Kertas. Dalam suit tersebut, jika menang maka maju 2 langkah dan jika kalah maka mundur satu langkah. 
// Jika sudah tidak ada jarak antara 2 pemain, maka pemain yang terakhir menanglah yang dinyatakan sebagai pemenang.
// Contohnya: 
// -	Jarak awal	: 2
// -	A		: G G G
// -	B		: K K B
// Jika posisi awal A dan B terpisah 2 langkah, maka setelah suit B mundur 1 langkah dan A maju 2 langkah, 
// sehingga posisi mereka sekarang terpisah 1 langkah. Jika kemudian A menang lagi, maka B mundur 1 langkah dan A maju 2 langkah, 
// sehingga tidak ada jarak lagi antara A dan B. Pemenang ditentukan dari pertama kalinya jarak antara A dan B menjadi nol, 
// jadi meskipun pada suit ke-3 A kalah, putaran ke-3 ini diabaikan.
// Dari kombinasi jarak awal dan suit yang dilakukan A dan B, tentukan siapakah pemenang game suit tersebut. 
// Jika sampai akhir suit jarak antara mereka belum sama dengan nol, maka hasilnya dinyatakan “Draw”.


function batuGuntingKertas(jarakAwal, suitA, suitB) {
    let jarak = jarakAwal;

    const menang = (pemainA, pemainB) => {
        if (pemainA === pemainB) return 0;
        if ((pemainA === 'G' && pemainB === 'K') || (pemainA === 'B' && pemainB === 'G') || (pemainA === 'K' && pemainB === 'B')) {
            return 1;
        }
        return -1;
    };

    for (let i = 0; i < suitA.length; i++) {
        let hasil = menang(suitA[i], suitB[i]);
        if (hasil === 1) {
            jarak -= 2; 
        } else if (hasil === -1) {
            jarak += 1;
        }
        if (jarak <= 0) {
            return hasil === 1 ? 'A Menang' : 'B Menang';
        }
    }
    return 'Draw';
}

const JarakAwal = 2
const A = ['G', 'G', 'G'];
const B = ['K', 'K', 'B'];
console.log(batuGuntingKertas(JarakAwal, A, B));