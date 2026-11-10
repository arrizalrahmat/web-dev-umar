function checkNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve('Angka lebih besar dari 0');
      } else if (number <= 0) {
        reject('Angka harus positif');
      } else {
        reject('Invalid number');
      }
    }, 1000);
  });
}

checkNumber(0)
  .then(msg => {
    console.log(msg);
  })
  .catch(error => {
    console.error('ERROR >>>', error);
  })
  .finally(() => {
    console.log('program selesai');
  });

// async function main() {
//   try {
//     const result = await checkNumber('kuda');
//     console.log(result);
//   } catch (error) {
//     console.error('ERRORRR >>>>>', error);
//   } finally {
//     console.log('selesai berjalan');
//   }
// }

// main();
