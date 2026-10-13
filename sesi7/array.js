const animals = ['Lion', 'Tiger', 'Rabbit', 'Antelope'];
// console.log(animals);

// // array memiliki index yang dimulai dari 0
// // console.log(animals[0]);
// // console.log(animals[1]);

// // tambah data ke array animals di index paling belakang
// animals.push('Bull');
// console.log(animals);

// // hapus data array animals index terakhir
// animals.pop();
// console.log(animals);

// // tambah data ke array animals di index 0 (pertama)
// animals.unshift('Chicken');
// console.log(animals);

// // hapus data array animals index 0
// animals.shift();
// console.log(animals);

// menggabungkan data2 pada array menjadi 1 string dengan pemisah

const text = animals.join(' dan ');
// console.log(text);
// animals.sort();
// console.log(animals);

// splice seperti memotong kue dan mengambil potongan tersebut untuk disimpan ke piring lain
// mengambil potongan array dan menyimpan potongan array tersebut di variable lain
// const newAnimals = animals.splice(1, 3); // potong array mulai dari index 1, sebanyak 3 elemen
// console.log(animals);
// console.log(newAnimals);

// slice mengambil potongan array tanpa mengubah array original
const copiedAnimals = animals.slice(1, 3); // potong array mulai dari index 1, sampai dengan < index 3
// console.log(animals);
// console.log(copiedAnimals);

const animalsString = animals.join(', '); // join dari array ke string dengan separator
console.log(animalsString);
const splittedAnimals = animalsString.split(', '); // split dari string ke array dengan separator
console.log(splittedAnimals);
