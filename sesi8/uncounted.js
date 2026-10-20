const target = 100;
let score = 0;
let i = 1;

// return random number range 1 - 5
function generateRandomNumber(min = 1, max = 5) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// uncounted loop
// kita tidak tahu loop berapa kali akan berjalan sampai score >= 100
// gacha skor random number hingga mencapai max score 100
while (score < 100) {
  score = generateRandomNumber(1, 100);
  console.log(
    `Current Score: ${score}, Loop berjalan ${i} kali`,
  );
  i++;
}

// do while akan melakukan functionnya paling tidak 1x
// melakukan function setelah itu baru mengecek kondisi
// do {
//   score = generateRandomNumber(1, 100);
//   console.log(
//     `Current Score: ${score}, Loop berjalan ${i} kali`,
//   );
//   i++;
// } while (score < 100);
