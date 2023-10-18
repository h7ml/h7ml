/**
 * @description 手写数组去重
 * @param arr
 * @returns {*[]}
 */
function uniqueArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
uniqueArray([1, 2, 1, 2, 3, 1, 2]);
