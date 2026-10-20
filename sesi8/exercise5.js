const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const itemPrices = [
  {
    name: 'Sabun',
    price: 7000,
  },
  {
    name: 'Shampo',
    price: 15000,
  },
  {
    name: 'Pasta Gigi',
    price: 12000,
  },
  {
    name: 'Sikat Gigi',
    price: 8000,
  },
  {
    name: 'Deterjen',
    price: 20000,
  },
  {
    name: 'Tisu',
    price: 10000,
  },
  {
    name: 'Minyak Goreng',
    price: 35000,
  },
  {
    name: 'Gula',
    price: 16000,
  },
  {
    name: 'Beras',
    price: 65000,
  },
  {
    name: 'Telur',
    price: 28000,
  },
];

const transactions = [];

function main() {
  console.log('===== Program perhitungan transaksi =====');
  console.log('Daftar harga barang: ');

  itemPrices.forEach((value, index) => {
    console.log(
      `${index + 1}. ${value.name}: Rp. ${value.price}`,
    );
  });

  rl.question(
    'Masukkan item (urutan 1-10), masukkan exit untuk selesai: ',
    item => {
      if (item === 'exit') {
        hitungTotal();
        rl.close();
        return;
      }
      const itemIndex = Number(item) - 1;
      if (
        isNaN(itemIndex) ||
        itemIndex < 0 ||
        itemIndex > 9
      ) {
        console.log(
          'pilihan tidak valid, masukkan item yang valid',
        );
        main();
      }

      rl.question(
        'Masukkan jumlah yang ingin dibeli: ',
        qty => {
          const quantity = Number(qty);
          const subTotal =
            itemPrices[itemIndex].price * quantity;
          console.log({
            name: itemPrices[itemIndex].name,
            price: itemPrices[itemIndex].price,
            quantity,
            subTotal,
          });
          transactions.push({
            name: itemPrices[itemIndex].name,
            price: itemPrices[itemIndex].price,
            quantity,
            subTotal,
          });

          main();
        },
      );
    },
  );
}

function hitungTotal() {
  console.table(transactions);
  let total = 0;
  transactions.forEach(item => {
    total += item.subTotal;
  });
  console.log(`Total Transaksi: Rp ${total}`);
}

main();
