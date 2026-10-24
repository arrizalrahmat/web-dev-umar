const harga = [100, 122, 109, 121];
// akan menghitung harga plus ppn 11%

// tanpa map
// for (let i = 0; i < harga.length; i++) {
//   harga[i] = harga[i] + (harga[i] * 11) / 100;
// }
// console.log(harga);

// dengan map
const hargaPlusPpn = harga.map((h, i) => {
  console.log(`index ke ${i}: value: ${h}`);
  return h + (h * 11) / 100;
});
console.log(hargaPlusPpn);
