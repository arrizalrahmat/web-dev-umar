const janji = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('nasi goreng');
  }, 1000);
});

function masak(order, qty) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${qty} ${order} siap disajikan`);
    }, 1000);
  });
}

async function pesan() {
  const makananku = await masak('Nasi Goreng', 3);

  console.log(makananku);
}

// pesan();

const fruits = ['apple', 'orange', 'pineapple', 'banana'];

function juicer(choppedFruits, cb) {
  console.log('start juicing....', choppedFruits);
  return new Promise(resolve => {
    setTimeout(() => {
      const juices = choppedFruits.map(
        e => e.split('-')[0] + '-juice',
      );
      resolve(juices);
    }, 1000);
  });
}

function chopper(fruits, cb) {
  console.log('start chopping....', fruits);
  return new Promise((resolve, reject) => {
    let choppedFruits = '';
    if (!Array.isArray(fruits)) {
      reject('fruits is not valid');
      return;
    }
    setTimeout(() => {
      choppedFruits = fruits.map(e => e + '-chopped');
      resolve(choppedFruits);
    }, 1000);
  });
}

// async await
async function mulaiJus(fruits) {
  const choppedFruits = await chopper(fruits);
  const juices = await juicer(choppedFruits);
  console.log(juices);
}

// then catch
function startJuicing(fruits) {
  chopper(fruits)
    .then(choppedFruits => {
      return juicer(choppedFruits);
    })
    .then(juices => {
      console.log(juices, 'sudah jadi...');
    })
    .catch(error => {
      console.log('Terjadi error...');
      console.log(error);
    });
}

startJuicing(fruits);
