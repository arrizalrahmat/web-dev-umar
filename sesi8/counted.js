// forEach
// const students = ['arrizal', 'rahmat', 'kurniawan'];

// akan melakuakn suatu function di setiap index dari array students
// students.forEach((value, index) => {
//   const item = `murid ke ${index + 1} adalah: ${value}`;
//   // untuk mengulangi cetak string item sebanyak 5 kali
//   console.log(item.repeat(5));
// });

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// nested loop (perulangan bersarang)
// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
//   console.log('=============');
// }

const students = [
  {
    name: 'Arrizal',
    class: 'I-A',
    scores: [100, 80, 50, 70, 90, 40, 100, 100],
  },
  {
    name: 'Rahmat',
    class: 'I-A',
    scores: [90, 85, 70, 60, 75, 80, 95, 100],
  },
  {
    name: 'Kurniawan',
    class: 'I-B',
    scores: [60, 70, 80, 90, 100, 50, 40, 30],
  },
  {
    name: 'Siti',
    class: 'I-B',
    scores: [100, 100, 95, 90, 85, 80, 75, 70],
  },
  {
    name: 'Budi',
    class: 'I-C',
    scores: [55, 65, 75, 85, 95, 45, 35, 25],
  },
];

// kita buka array terluar
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  let totalScore = 0;
  // console.log('student >>>', student);

  // perulangan untuk menambahkan setiap score didalam array scores
  for (let j = 0; j < student.scores.length; j++) {
    const score = student.scores[j];
    totalScore += score;
  }

  //hitung average
  const average = totalScore / student.scores.length;

  // assign average ke object students
  students[i].average = average;
}

console.log(students);
