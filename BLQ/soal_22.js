// 22. Sederet lilin memiliki perbandingan laju meleleh mengikuti deret Fibonacci.
// Diketahui deret Fibonacci adalah sebagai berikut:
// 1    1   2	3	5	8	13
// Sehingga dapat dikatakan
// -	Lilin 1 dan 2 meleleh sepanjang 1 per detik
// -	Lilin ke-3 meleleh sepanjang 2 per detik
// -	Lilin ke-6 meleleh sepanjang 8 per detik
// -	Dan seterusnya…
// Jika diberikan panjang lilin awal masing-masing adalah
// 3	3	9	6	7	8	23
// Tentukan lilin mana yang paling pertama habis meleleh.

function lilinYangPertamaHabis(panjangLilin) {
    let fibonacci = [1, 1];
    for (let i = 2; i < panjangLilin.length; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    let indexLilinTercepat = 0;
    let waktuTercepat = panjangLilin[0] / fibonacci[0];

    for (let i = 1; i < panjangLilin.length; i++) {
        let waktuHabis = panjangLilin[i] / fibonacci[i];
        if (waktuHabis < waktuTercepat) {
            waktuTercepat = waktuHabis;
            indexLilinTercepat = i;
        }
    }
    console.log(`Lilin yang paling pertama habis adalah lilin nomor `,indexLilinTercepat+1);
}

const panjangLilin = [3, 3, 9, 6, 7, 8, 23];
lilinYangPertamaHabis(panjangLilin);