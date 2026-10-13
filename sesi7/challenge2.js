const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const riwayatPembelian = [];

function hitungHargaTiket(kategori, jumlah) {
  let hargaPerTiket = 0;
  if (kategori === 'anak') {
    hargaPerTiket = 25000;
  } else if (kategori === 'dewasa') {
    hargaPerTiket = 50000;
  } else if (kategori === 'lansia') {
    hargaPerTiket = 30000;
  } else {
    return -1; // tidak valid
  }

  return hargaPerTiket * jumlah;
}

function beliTiket() {
  rl.question(
    'Masukkan kategori penumpang (anak, dewasa, lansia): ',
    kategori => {
      rl.question('Masukkan jumlah penumpang: ', jumlah => {
        jumlah = Number(jumlah);
        const totalHarga = hitungHargaTiket(
          kategori,
          jumlah,
        );

        //apakah valid kategorinya
        if (totalHarga === -1) {
          console.log(
            'Kategori tidak valid, silakan coba lagi',
          );
          beliTiket();
        } else {
          console.log(
            `Total harga untuk ${jumlah} tiket kategori ${kategori} adalah Rp. ${totalHarga}`,
          );
          riwayatPembelian.push({
            kategori,
            jumlah,
            totalHarga,
          });
          tampilkanMenu();
        }
      });
    },
  );
}
function lihatRiwayat() {
  console.log('\n===== Riwayat Pembelian =====');
  if (riwayatPembelian.length === 0) {
    console.log('Tidak ada riwayat pembelian');
  }

  // kalau ada riwayat pembelian looping. melakukan suatu proses berulang
  for (let i = 0; i < riwayatPembelian.length; i++) {
    const item = riwayatPembelian[i];
    console.log(
      `${i + 1}. Kategori: ${item.kategori}, Jumlah: ${item.jumlah}, Total Harga: Rp. ${item.totalHarga}`,
    );
  }
  tampilkanMenu();
}

function tampilkanMenu() {
  console.log('\n==== Sistem Pembelian Tiket ====');
  console.log('1. Beli Tiket');
  console.log('2. Lihat Riwayat Pembelian');
  console.log('3. Keluar');

  rl.question('Pilih menu 1-3: ', menu => {
    switch (menu) {
      case '1':
        beliTiket();
        break;
      case '2':
        lihatRiwayat();
        break;
      case '3':
        console.log(
          'Terima kasih sudah menggunakan sistem kami',
        );
        rl.close();
        break;
      default:
        console.log(
          'Pilihan tidak valid, silahkan coba lagi',
        );
        tampilkanMenu();
        break;
    }
  });
}

tampilkanMenu();
