// 7. Tentukan mean, median, dan modus dari deret berikut. Jika ada lebih dari 2 modus, ambil angka yang nilainya paling kecil
// contoh 8 7 0 2 7 1 7 6 3 0 7 1 3 4 6 1 6 4 3

function hitungMean(deret) {
    let total = 0;
    for (let i = 0; i < deret.length; i++) {
        total += deret[i];
    }
    let mean = total / deret.length;
    return mean;
}

function hitungMedian(deret) {
    deret.sort((a, b) => a - b);
    let median;
    const tengah = Math.floor(deret.length / 2);

    if (deret.length % 2 === 0) {
        median = (deret[tengah - 1] + deret[tengah]) / 2;
        return median;
    } else {
        median = deret[tengah]; 
        return median;
    }    
}

function hitungModus(deret) {
    let jumlahModus = 0;
    let max = 0;
    let modus = 0;

    for (let a = 0; a < deret.length; a++) {
        for (let b = 0; b < deret.length; b++) {
            if (deret[a] === deret[b]) {
                jumlahModus++;
            }
        }
        if (jumlahModus > max) {
            max = jumlahModus;
            modus = deret[a];
        }
        jumlahModus = 0;
    }
    return modus;
}

const deret = [8, 7, 0, 2, 7, 1, 7, 6, 3, 0, 7, 1, 3, 4, 6, 1, 6, 4, 3];

const mean = hitungMean(deret);
const median = hitungMedian(deret);
const modus = hitungModus(deret);

console.log('Deret ',deret);
console.log(`Nilai Mean  : ${mean}`);
console.log(`Nilai Median: ${median}`);
console.log(`Nilai Modus : ${modus}`);
