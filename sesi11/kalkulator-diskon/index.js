const hasil = document.getElementById('hasil');
const harga = document.getElementById('harga');
const hitung = document.getElementById('btnHitung');
const diskon = 10 / 100;
let hargaAkhir = 0;

function cekHarga() {
  console.log('onkeyup jalan');
  const currentHarga = Number(harga.value);
  if (currentHarga) {
    hitung.disabled = false;
  } else {
    hitung.disabled = true;
  }
}

function hitungDiskon() {
  const hargaDasar = Number(harga.value);
  hargaAkhir = hargaDasar - hargaDasar * diskon;

  hasil.innerText = hargaAkhir;
}

document.cookie = 'username=Dewi';
const date = new Date();
date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
document.cookie = `expires=${date.toUTCString()}`;

function tambahSession() {
  const currentCount = Number(
    sessionStorage.getItem('count'),
  );

  sessionStorage.setItem('count', currentCount + 1);
  const resultSession =
    document.getElementById('resultSession');
  resultSession.innerText = currentCount + 1;
}

function tambahLocal() {
  const currentCount = Number(
    localStorage.getItem('count'),
  );

  localStorage.setItem('count', currentCount + 1);
  const resultSession =
    document.getElementById('resultLocal');
  resultSession.innerText = currentCount + 1;
}
