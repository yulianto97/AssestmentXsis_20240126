// 9.	
// N = 3 -> 3 6 9
// N = 4 -> 4 8 12 16
// N = 5 -> 5 10 15 20 25

function perkalianN(n) {
    let hasil = [];
    for (let i = 1; i <= n; i++) {
        hasil.push(i * n);
    }
    console.log(`N = `,n,` -> `,hasil);
}

perkalianN(3); // 3 6 9
perkalianN(4); // 4 8 12 16
perkalianN(5); // 5 10 15 20 25