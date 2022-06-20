const mergeSort = arr => {
    if (arr.length <= 1) return arr;

    let midpoint = Math.min(arr.length /  2);

    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint, arr.length);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);


    return merge(leftSorted, rightSorted);
  }

const mergeInsertionSort = arr => {
    if (arr.length <= 1) return arr;

    let midpoint = Math.min(arr.length /  2);

    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint, arr.length);

    let leftSorted;
    let rightSorted;

    if (arr.length < 87) {
      leftSorted = insertionSort(left);
      rightSorted = insertionSort(right);
    } else {
      leftSorted = mergeInsertionSort(left);
      rightSorted = mergeInsertionSort(right);
    }

    return merge(leftSorted, rightSorted);
  }

  const merge = (arrA, arrB) => {
    const returnArr = [];

    let indexA = 0;
    let indexB = 0;

    while (indexA < arrA.length || indexB < arrB.length) {
      if (indexA === arrA.length) {
        returnArr.push(arrB[indexB]);
        indexB++;
      } else if (indexB === arrB.length) {
        returnArr.push(arrA[indexA]);
        indexA++;
      } else if (arrA[indexA] < arrB[indexB]) {
        returnArr.push(arrA[indexA]);
        indexA++;
      } else {
        returnArr.push(arrB[indexB]);
        indexB++;
      }
    }

    return returnArr;
  }

  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length - 1; i++) {
      let val = arr[i];

      let j = i - 1;

      while (arr[j] > val && j > 0) {
        arr[j + 1] = arr[j];
        j--
      }

      arr[j + 1] = val;
    }
    return arr;
  }

  const arr1 = [];
  const arr2 = [];

  let n = 20000000;

  for (let i = 0; i < n; i++) {
    arr1.push(Math.floor(Math.random() * 100000));
    arr2.push(Math.floor(Math.random() * 100000));
  }

  console.log(`n=${n}`);

  console.time(`merge`);
  mergeSort(arr1);
  console.timeEnd(`merge`);

  console.time(`merge-insertion`);
  mergeInsertionSort(arr2);
  console.timeEnd(`merge-insertion`);
