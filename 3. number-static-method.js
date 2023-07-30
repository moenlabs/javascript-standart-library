/*
Number Static Method
Number memiliki banyak static method, seperti
Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
*/

const data = Number("12345");
const nilai = Number("moen");

console.info(Number.isInteger(data));
console.info(Number.isNaN(data));
console.info(Number.isInteger(nilai));
console.info(Number.isNaN(nilai));