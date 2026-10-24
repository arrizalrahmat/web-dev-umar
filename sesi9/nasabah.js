const daftarNasabah = [
  {nama: 'John', nilaiKredit: 80, kelasKredit: 'Platinum'},
  {nama: 'Jane', nilaiKredit: 60, kelasKredit: 'Gold'},
  {nama: 'Doe', nilaiKredit: 85, kelasKredit: 'Platinum'},
  {nama: 'Smith', nilaiKredit: 77, kelasKredit: 'Silver'},
  {nama: 'Budi', nilaiKredit: 92, kelasKredit: 'Platinum'},
  {nama: 'Siti', nilaiKredit: 55, kelasKredit: 'Silver'},
  {nama: 'Andi', nilaiKredit: 70, kelasKredit: 'Gold'},
  {nama: 'Rina', nilaiKredit: 48, kelasKredit: 'Silver'},
  {nama: 'Dewi', nilaiKredit: 88, kelasKredit: 'Gold'},
  {nama: 'Agus', nilaiKredit: 65, kelasKredit: 'Platinum'},
];

function groupingNasabah(list) {
  const result = {};

  for (let i = 0; i < list.length; i++) {
    // destruct variable
    const {nama, nilaiKredit, kelasKredit} = list[i];
    // jika di object result sudah ada current kelaskredit maka push ke array kelasKredit tersebut
    if (result[kelasKredit]) {
      result[kelasKredit].push({nama, nilaiKredit});
      //jika di object result beluma da current kelasKredit maka create new kelasKredit dan assign [{current nasabah}]
    } else {
      result[kelasKredit] = [{nama, nilaiKredit}];
    }
    // console.log(
    //   `namanya adalah ${nama}, nilai kreditnya ${nilaiKredit}, kelasnya ${kelasKredit}`,
    // );
  }

  return result;
}

const groupedNasabah = groupingNasabah(daftarNasabah);
console.log(groupedNasabah, '<<hasil akhir');
