/*
Number
Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN.
*/

// Kode Number
const input = "12345";
const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);

console.info(Number("salah"));