/*
Number Instance Method

Number memiliki banyak instance method, seperti;
Number.toLocalString(locale) untuk mengubah number 
menjadi string sesuai locale
Number.toString(radix) untuk mengubah number menjadi
string sesuai radix
*/

// contoh kode 
const value = Number(123456789);
console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US")); // menunjukan jumlah aangka berdasarkan berapa ribuannya.