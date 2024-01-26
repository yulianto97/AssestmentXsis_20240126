// 14. Deret: 3 9 0 7 1 2 4
// N = 3 -> 7 1 2 4 3 9 0
// N = 1 -> 9 0 7 1 2 4 1

function geserDeret(arr, n) {
    let panjang = arr.length;
    let hasil = [];
    let start = panjang - (n % panjang);
    for (let i = start; i < panjang; i++) {
        hasil.push(arr[i]);
    }
    for (let i = 0; i < start; i++) {
        hasil.push(arr[i]);
    }
    console.log(hasil);
}

let deret = [3, 9, 0, 7, 1, 2, 4];
geserDeret(deret, 3);
geserDeret(deret, 1); 
