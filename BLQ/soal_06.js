// 6.	Tanpa menggunakan fungsi Reverse, buatlah fungsi untuk menentukan apakah sebuah kata adalah palindrome* atau tidak
// *Palindrome adalah kata yang jika dibalik tetap sama, contohnya “katak”, “12021”, “malam”

var input = 'Katak';
var inputlw = input.toLowerCase();

let panjang = input.length;
let hasil = "";

for (let i = panjang - 1; i >= 0; i--) {
    hasil += inputlw[i];
}

if (inputlw === hasil) {
    console.log(input + " adalah palindrom");
} else {
    console.log(input + " bukan palindrom");
}