/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  const sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  return sortedArr.concat(arr1.slice(i), arr2.slice(j));
};

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) {
    return nums;
  }
  const arrMiddle = Math.floor(nums.length / 2);

  return merge(
    mergeSort(nums.slice(0, arrMiddle)),
    mergeSort(nums.slice(arrMiddle))
  );
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
