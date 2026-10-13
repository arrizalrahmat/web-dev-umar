const nilai = 'penguin';

// if if akan mengecek semua kondisi
// if (nilai < 30) {
//   console.log('E');
// }
// if (nilai < 50) {
//   console.log('D');
// }
// if (nilai < 60) {
//   console.log('C');
// }
// if (nilai < 80) {
//   console.log('B');
// }
// if (nilai < 100) {
//   console.log('A');
// }

// akan berhenti ketika ditemukan kondisi yang true
// if (nilai < 20) {
//   console.log('E');
// } else if (nilai < 40) {
//   console.log('D');
// } else if (nilai < 60) {
//   console.log('C');
// } else if (nilai < 80) {
//   console.log('B');
// } else if (nilai <= 100) {
//   console.log('A');
// } else {
//   console.log('nilai invalid');
// }

const height = 155;

// hanya pertanyaan ya atau tidak, hanya memiliki 2 kemungkinan jawaban
// if (height > 160) {
//   console.log('Boleh naik roller coaster');
// } else {
//   console.log('Tidak boleh naik roller coaster');
// }

// ternary operator
// short hand dari if else question
height > 160
  ? console.log('boelh naik roller coaster') // jika ya masuk sini
  : console.log('tidak boleh naik roller coaster'); //jika tidak masuk sini

const hasKTP = false;
const hasSIM = false;
const hasNameTag = true;

// if (hasKTP) {
//   console.log('boleh cetak boarding pass');
// } else if (hasSIM) {
//   console.log('boleh cetak boarding pass');
// } else if (hasNameTag) {
//   console.log('boleh cetak boarding pass');
// } else {
//   console.log('Tidak boleh naik pesawat');
// }
