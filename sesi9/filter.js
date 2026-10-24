const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//tanpa filter
const ganjil = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 1) {
    // console.log(angka[i], '<< ganjil');
    ganjil.push(angka[i]);
  } else {
    // console.log(angka[i], '<< genap');
  }
}

// console.log(ganjil);

// dengan filter
const genap = angka.filter(a => a % 2 === 0);
console.log(genap);
