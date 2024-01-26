// 2. Di perpustakaan, anda bias meminjam buku selama beberapa hari, durasinya berbeda-beda setiap buku tergantung dari konten buku tersebut. 
// Jika terlambat mengembalikan, maka akan dikenakan denda sebesar 100/hari. 

// Berikut adalah contoh buku yang dipinjam seorang anggota perpustakaan
// Nama Buku	Durasi Peminjaman (hari)
//      A	        14
//      B	        3
//      C	        7
//      D	        7

// Buatlah kalkulasi penghitungan denda jika buku tersebut dipinjam pada rentang waktu
// a.	28 Februari 2016 – 7 Maret 2016*
// b.	29 April 2018 – 30 Mei 2018

// Jika tidak ada denda, cukup tulis 0 (nol). Asumsikan perpustakaan buka setiap hari, tidak ada hari libur.
// *Tahun 2016 adalah tahun kabisat

const buku = {
    'A': 14,
    'B': 3,
    'C': 7,
    'D': 7
};

function hitungDenda(tanggalMulai, tanggalAkhir, durasiPinjam) {
    const mulai = new Date(tanggalMulai);
    const akhir = new Date(tanggalAkhir);
    const totalHari = ((akhir - mulai) / (1000 * 60 * 60 * 24) +1);
    let denda = 0;
    if (totalHari > durasiPinjam) {
        denda = (totalHari - durasiPinjam) * 100;
    }
    return denda;
}

console.log(`Denda periode 28 Februari 2016 – 7 Maret 2016`)
Object.keys(buku).forEach(kontenBuku => {
    console.log(`Buku ${kontenBuku}:`, hitungDenda('2016-02-28', '2016-03-07', buku[kontenBuku]));
});

console.log(`\nDenda periode 29 April 2018 – 30 Mei 2018 `)
Object.keys(buku).forEach(kontenBuku => {
    console.log(`Buku ${kontenBuku}:`, hitungDenda('2018-04-29', '2018-05-30', buku[kontenBuku]));
});