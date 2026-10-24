// 1 function hanya melakukan 1 buah operasi
// tujuannya agar function lebih modular dan lebih reusable

function hitungDiskon(harga, diskon) {
  return harga - harga * diskon;
}

function hitungPpn(harga) {
  const ratePpn = 11 / 100;
  return harga + harga * ratePpn;
}

function hitungTotalHarga(harga) {
  const hargaSetelahDiskon = hitungDiskon(harga, 0.25);
  const result = hitungPpn(hargaSetelahDiskon);
  return result;
}

const harga = 13500;
const total = hitungTotalHarga(harga);
// console.log(`total harga adalah: ${total}`);

/*
==================================================
*/
function removeCharacter(string, characterToRemove) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== characterToRemove) {
      result += string[i];
      //   console.log(string[i]);
    }
  }

  return result;
}

function reverseText(string) {
  //   console.log(string, '<<<string');
  // looping terbalik. dimulai dari string.length - 1 sampai dengan 0
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
    // console.log(string[i]);
  }
  return result;
}

function updateVowels(string) {
  let result = '';
  const dictionary = {
    a: 'b',
    i: 'j',
    u: 'v',
    e: 'f',
    o: 'p',
    s: '*',
    n: '#',
  };

  for (let i = 0; i < string.length; i++) {
    // if (string[i] === 'a') {
    //   console.log(string[i]);
    // } else if (string[i] === 'i') {
    //   console.log(string[i]);
    // }
    if (dictionary[string[i]]) {
      // console.log(
      //   string[i],
      //   'menjadi',
      //   dictionary[string[i]],
      // );
      result += dictionary[string[i]];
    } else {
      result += string[i];
    }
  }

  return result;
}

const password = 'aku anak indonesia';
const spaceRemoved = removeCharacter(password, ' ');
const reversed = reverseText(spaceRemoved);
const encryptedPassword = updateVowels(reversed);

console.log(reversed);
console.log(encryptedPassword);
