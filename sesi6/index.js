// console.log(3 + 5);

// deklarasi variabel var
var nama = 'Arrizal'; //deklarasi variabel
var nama = 'Rahmat'; // re-deklarasi variabel
nama = 'Kurniawan'; // re-assign variabel

// console.log(nama);
// deklarasi variabel let
let umur = 20; // deklarasi variabel
// let umur = 22; // tidak bisa re-deklarasi variabel
umur = 25; // re-assign variabel
// console.log(umur);

// deklarasi variabel const
const gender = 'Laki-laki'; // deklarasi variabel
// const gender = 'Perempuan'; // tidak bisa re-deklarasi variabel

// gender = 'Perempuan'; // tidak bisa re-assign variabel

// console.log(gender);
// let angka = 12;
// if (true) {
//   //   let angka = 20;
//   //   angka = angka + 10;
//   //   console.log(angka);
//   let mobil = 'toyota';
//   console.log(mobil);
// }
// console.log(mobil);
// console.log(angka, '<<global scope');

function add(num1, num2) {
  let hasilPenjumlahan = num1 + num2;
  return hasilPenjumlahan;
}

function divide(num1, num2) {
  return num1 / num2;
}

function masakSateAyam(dagingAyam, kacang, bumbu, garam) {
  let sateAyam = dagingAyam + kacang + bumbu + garam;
  // proses masak sate ayam
  return sateAyam;
}

const result = add(10, 20);
const result2 = divide(10, 2);
console.log(result2);

let myResult = '22'; //camel case
let my_result = 'hphphphphp'; //snake case
let MyResult = 'hahahah'; //pascal case

let _for = 'blablabla'; // tidak bisa menggunakan reserved word
// let class = 'kelas 1A'; // tidak bisa menggunakan reserved word
// console.log(myresult);
const userName = 'Arrizal';
const userProfile = {
  userName: 'Arrizal',
};

const grades = [90, 22, 100, 90, 89, false, 'blablabla'];
console.log(grades[0]);

const employee = {
  firstName: 'Arrizal',
  lastName: 'Kurniawan',
  age: 20,
  isMarried: false,
  address: {
    street: 'Jl. Raya',
    city: 'Jakarta',
    country: 'Indonesia',
  },
  hobbies: ['coding', 'reading', 'gaming'],
};

console.log(employee.address.country);
console.log(employee.hobbies[0]);

console.log(21 % 4);
let age = 20;
age++;
age++;
age++;
age++;
age--;
age--;
age--;

age += 10;
age *= 3;
age -= 40;
console.log(age);
