// 3. Buatlah fungsi untuk kalkulasi tarif parkir berikut

//      Masuk	                             Keluar	                    Tarif
// 27 Januari 2019 | 05:00:01	    27 Januari 2019 | 17:45:03	
// 27 Januari 2019 | 07:03:59	    27 Januari 2019 | 15:30:06	
// 27 Januari 2019 | 07:05:00	    28 Januari 2019 | 00:20:21	
// 27 Januari 2019 | 11:14:23	    27 Januari 2019 | 13:20:00	

// Ketentuan tariff:
// -	8 jam pertama: 1.000/jam
// -	8 jam 1 detik – 24 jam: 8.000 flat
// -	24 jam 1 detik – 8 jam kemudian: 15.000 flat + 1.000/jam

// Misalnya parkir selama 30 jam, maka tarifnya adalah:
// 15.000 + (30-24)*1.000 = 15.000+6.000 = 21.000

function hitungBiayaParkir(masuk, keluar) {
    const waktuMasuk = new Date(masuk);
    const waktuKeluar = new Date(keluar);
    const waktuParkir = waktuKeluar - waktuMasuk;
    
    const jam = waktuParkir / (1000 * 60 * 60);
    const jamParkir = parseInt(jam)

    if (jam <= 8) {
        return (jamParkir * 1000);
    } else if (jam <= 24) {
        return 8000;
    } else {
        const ekstraJam = jam - 24;
        const pembulatanEkstra = (ekstraJam % 1 === 0) ? ekstraJam : parseInt(ekstraJam) + 1;
        return 15000 + pembulatanEkstra * 1000;
    }
}

console.log("Tarif Parkir 1:", hitungBiayaParkir("2019-01-27 05:00:01", "2019-01-27 17:45:03"));
console.log("Tarif Parkir 2:", hitungBiayaParkir("2019-01-27 07:03:59", "2019-01-27 15:30:06"));
console.log("Tarif Parkir 3:", hitungBiayaParkir("2019-01-27 07:05:00", "2019-01-28 00:20:21"));
console.log("Tarif Parkir 4:", hitungBiayaParkir("2019-01-27 11:14:23", "2019-01-27 13:20:00"));