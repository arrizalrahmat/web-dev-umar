const students = [
  {
    name: 'Arrizal',
    age: 15,
    gender: 'male',
  },
  {
    name: 'Rahmat',
    age: 17,
    gender: 'male',
  },
  {
    name: 'Lucy',
    age: 17,
    gender: 'female',
  },
];

// callback function adalah sebuah function yang di pass in ke dalam function lain sebagai parameter
// function handlerForeach(element) {
//   console.log(
//     `nama saya ${element.name}, umur saya ${element.age} tahun`,
//   );
// }

// students.forEach(handlerForeach);

// PENGGUNAAN CALLBACK SECARA SYNCHRONOUS (KODE DIBACA DARI ATAS KEBAWAH)

function doubleNumber(number) {
  console.log(
    'Angkanya setelah digandakan menjadi:',
    number * 2,
  );
}

function calculateNumber(number, callback) {
  console.log(`angka ${number} telah diterima`);

  callback(number);
}

// calculateNumber(12, doubleNumber);

function sayHello(student) {
  let greeting = '';
  if (student.gender === 'male') {
    greeting = 'Mr';
  } else {
    greeting = 'Mrs';
  }
  console.log(
    `Hello ${greeting}. ${student.name}, age ${student.age}`,
  );
}

function processName(students, cb) {
  //   console.log(students, '<<<<di dalam processName');
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    cb(students[i]);
  }
}

// processName(students, sayHello);
const fruits = ['apple', 'orange', 'pineapple', 'banana'];

// PENGGUNAAN CALLBACK ASYNCHRONOUS
// function juicer(choppedFruits, cb) {
//   console.log('start juicing....', choppedFruits);
//   setTimeout(() => {
//     const juices = choppedFruits.map(
//       e => e.split('-')[0] + '-juice',
//     );
//     cb(juices);
//   }, 1000);
// }

// function chopper(fruits, cb) {
//   console.log('start chopping....', fruits);
//   let choppedFruits = '';
//   setTimeout(() => {
//     choppedFruits = fruits.map(e => e + '-chopped');
//     cb(choppedFruits);
//   }, 1000);
// }

// function startJuicing(fruits) {
//   console.log('Start processing....', fruits);
//   chopper(fruits, choppedFruits => {
//     juicer(choppedFruits, juices => {
//       console.log(
//         juices.join(', '),
//         'is ready to be served',
//       );
//     });
//   });
// }
