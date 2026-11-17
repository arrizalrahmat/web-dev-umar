const array = [64, 78, 12, 45, 89, 23, 56];

const selectionSort = arr => {
  // loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], '<<ini arr[i]');
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // console.log(
    //   arr[minIndex],
    //   '<<ini angka terkecil di loop',
    //   arr[i],
    // );

    // swap array terkecil dengan array[i]
    const swapped = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = swapped;
  }

  return arr;
};

const insertionSort = arr => {
  // loop mulai dari index ke 1 karena index ke 0 tidak memiliki angka pembanding di sebelah kirinya
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < i; j++) {
      //   console.log(arr[i], ':', arr[j]);
      if (arr[i] < arr[j]) {
        // console.log('swap', arr[i], arr[j]);
        const swapped = arr[i];
        arr[i] = arr[j];
        arr[j] = swapped;
        break; // keluar dari loop j karena sudah melakukan swap, tidak perlu membandingkan lagi
      }
    }
  }

  return arr;
};

const linearSearch = (arr, toFind) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], ':', toFind);
    if (arr[i] === toFind) {
      return arr[i];
    }
  }

  return -1;
};
// const sorted = insertionSort(array);

// console.log(sorted);
const foundElement = linearSearch(array, 13);
console.log(foundElement, '<<ini data yang dicari');
