// 4.	Buatlah fungsi untuk menampilkan n bilangan prima pertama

function cekPrima(num) {
    for (let i = 2; i * i <= num ; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printNBilanganPrima(n) {
    let count = 0;
    let angka = 2;

    while (count < n) {
        if (cekPrima(angka)) {
            console.log(angka);
            count++;
        }
        angka++;
    }
}

printNBilanganPrima(10);