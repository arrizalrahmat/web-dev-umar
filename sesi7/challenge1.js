const readline = require('readline');

const correctUsername = 'asd123';
const correctPassword = 'ads123';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan username: ', username => {
  //cek kondisi username sudah tepat atau belum
  if (username !== correctUsername) {
    console.log('USername tidak ditemukan');
    rl.close();
    return;
  }
  rl.question('Masukkan password: ', password => {
    //cek kondisi password sudah tepat atau  belum
    if (password !== correctPassword) {
      console.log('Password salah');
      rl.close();
      return;
    }
    console.log('Anda berhasil login');
    rl.close();
  });
});
