// 5.	Buatlah fungsi untuk menampilkan n bilangan Fibonacci pertama

let n = 10
let n1 = 0, n2 = 1, nTemp;

console.log(`Deret Fibonacci ${n} bilangan pertama:`);

for (let i = 1; i <= n; i++) {
    console.log(n1);
    nTemp = n1 + n2;
    n1 = n2;
    n2 = nTemp;
}