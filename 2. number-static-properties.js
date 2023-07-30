/*
Number Static Properties
number memiliki banyak static properties, 
static properties adalah number yang bisa kita akses propertinya tanpa membuat object numbernya.
seperti:
Number.MIN_VALUE untuk mendapatkan number minimal
Number.Max_VALUE untuk mendapatkan number maksimal 
*/

// contoh kode 

const input = "12345";
const number = Number(input);

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);