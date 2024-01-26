// 16. Kamu dan 3 temanmu makan-makan di restoran, dan kalian memesan beberapa menu yang nanti pembayarannya akan dibagi rata. 
// Namun ada 1 orang yang alergi ikan, sehingga disepakati untuk 1 jenis makanan yang mengandung ikan itu hanya 3 orang yang akan membayar. 
// Pajak 10% dari harga makanan dan service 5% dari harga makanan. Tentukan berapa yang harus dibayar oleh masing-masing temanmu 
// (ingat ya ada 1 orang yang membayar lebih murah karena alergi).

// contoh: Makanan yang dipesan: 
// 	1. Tuna Sandwich	    	42K (mengandung ikan)
// 	2. Spaghetti Carbonara		50K 
// 	3. Tea pitcher		    	30K
// 	4. Pizza			    	70K
// 	5. Salad			    	30K
// 	6. …

function hitungPembayaran(makanan) {
    let totalBayar = 0;
    let biayaIkan = 0;
    const pajak = 0.10;
    const service = 0.05;

    makanan.forEach(item => {
        const harga = item.hargaMakanan;
        totalBayar += harga;
        if (item.mengandungIkan) {
            biayaIkan += harga;
        }
    });

    totalBayar *= (1 + pajak + service);
    const biayaTanpaIkan = (totalBayar - biayaIkan) / 4;
    const biayaDenganIkan = biayaTanpaIkan + (biayaIkan / 3);

    console.log(`Total bayar                   :`,totalBayar);
    console.log(`Biaya per orang tanpa ikan    :`,biayaTanpaIkan);
    console.log(`Biaya per orang dengan ikan   :`,biayaDenganIkan);
}

const makanan = [
    { nama: 'Tuna Sandwich', hargaMakanan: 42000, mengandungIkan: true },
    { nama: 'Spaghetti Carbonara', hargaMakanan: 50000, mengandungIkan: false },
    { nama: 'Tea Pitcher', hargaMakanan: 30000, mengandungIkan: false },
    { nama: 'Pizza', hargaMakanan: 70000, mengandungIkan: false },
    { nama: 'Salad', hargaMakanan: 30000, mengandungIkan: false }
];

hitungPembayaran(makanan);