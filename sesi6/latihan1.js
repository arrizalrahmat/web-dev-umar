// console.log('Selamat datang di kalkulator sederhana');

// process.stdout.write('Masukkan angka pertama: ');
// process.stdin.once('data', input1 => {
//   const angka1 = parseFloat(input1.toString().trim());

//   process.stdout.write('Masukkan angka kedua: ');
//   process.stdin.once('data', input2 => {
//     const angka2 = parseFloat(input2.toString().trim());

//     const hasilPenjumlahan = angka1 + angka2;
//     console.log(`Hasil penjumlahan: ${hasilPenjumlahan}`);
//     process.exit();
//   });
// });

const firstName = 'Arrizal';
const lastName = 'Kurniawan';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

const x = '7';
const y = 7;
const angka1 = 10;
const angka2 = 20;
const angka3 = 9;

// console.log(x === y);
// console.log(x !== y);
// console.log(x == y); // sebisa mungkin hindari penggunaan ini
// console.log(x > y);
// console.log(x >= y);
// console.log(x <= y);

// console.log(Number(x) === Number(y)); // gunakan strict equality operator but normalize the data first
// console.log('==========================================');
// console.log(true && false && true && true); // operator AND
// console.log(true || false || true || true);

// if (angka2 > angka1 && angka3 > angka2) {
//   console.log('angka sudah berurutan', 'AND');
// } else {
//   console.log('tidak berurutan', 'AND');
// }

// if (angka2 > angka1 || angka3 > angka2) {
//   console.log('angka sudah berurutan', 'OR');
// } else {
//   console.log('tidak berurutan', 'OR');
// }
const data = 0;
if (data) {
  // jika datanya ada maka lakukan line 54, jika tidak lakukan line 56
  console.log('datanya ada nih: ', data);
} else {
  console.log('datanya tidak ada');
}
