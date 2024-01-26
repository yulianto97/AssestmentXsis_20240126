// 17. Hattori sedang berlatih untuk menjadi ninja yang baik dengan berlari melewati gunung dan lembah. 
// Yang didefinisikan sebagai gunung dan lembah adalah:
// - Gunung: urutan Naik dan Turun yang bermula di 0 mdpl dan berakhir di 0 mdpl
// - Lembah: urutan Turun dan Naik yang bermula di 0 mdpl dan berakhir di 0 mdpl
// Hattori mencatat perjalanannya dengan simbol N saat ia menanjak dan T saat ia turun dalam sebuah urutan seperti berikut
// N N T N N N T T T T T N T T T N T N
// Berapa Gunung dan Lembah yang sudah dilewati Hattori? 

function hitungGunungLembah(arrayInput) {
    let mdpl = 0;
    let gunung = 0;
    let lembah = 0;
    let perjalanan = 0;
    
    for (let n = 0; n < arrayInput.length; n++) {
        if (arrayInput[n] === "N") {
            mdpl++;
        } else if (arrayInput[n] === "T") {
            mdpl--;
        }

        if (mdpl > 0) {
            perjalanan = 1;
        } else if (mdpl < 0) {
            perjalanan = -1;
        }

        if (mdpl === 0 && perjalanan === 1) {
            gunung++;
            perjalanan = 0;
        } else if (mdpl === 0 && perjalanan === -1) {
            lembah++;
            perjalanan = 0;
        }
    }

    console.log("Gunung = " + gunung);
    console.log("Lembah = " + lembah);
}

hitungGunungLembah(["N", "N", "T", "N", "N", "N", "T", "T", "T", "T", "T", "N", "T", "T", "T", "N", "T", "N"]); 
