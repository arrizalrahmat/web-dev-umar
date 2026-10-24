const numbers = [1, 5, 6, 2, 3, 8, 10];

// tanpa reduce
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total, '<<< total');

// dengan reduce
// const total = numbers.reduce((prev, curr) => {
//   console.log(`prev: ${prev}, current: ${curr}`);
//   return prev + curr;
// }, 0);

// console.log('total>>>', total);
