// 8. Tentukan nilai minimal dan maksimal dari penjumlahan 4 komponen deret ini
// 1 2 4 7 8 6 9

let deret = [1, 2, 4, 7, 8, 6, 9];
deret.sort((a, b) => a - b);

let min = 0;
let max = 0;

for (let i = 0; i < 4; i++) {
    min += deret[i];
    max += deret[deret.length - 1 - i];
}

console.log("Nilai Minimal  :", min);
console.log("Nilai Maksimal :", max);
