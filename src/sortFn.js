/*** 
 * @method 冒泡排序
 * @param {Array} 需要排序的数组
 * @description 用第一个元素和后面的元素依次比较, 如果大于后面的元素, 则互换位置, 否则继续下一轮比较
*/
const bubbleSort = arr => {
  const arrLength = arr.length;
  let flag = false;
  if (arrLength < 2) return arr;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      console.log(arr[j], '--', arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break; // 没有发生数据交换, 提前停止冒泡
  }
  return arr;
}

const bubbleFn = arr => { 
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // i = 0 
    // i = 1
    // i = 2
    // i = 3
    for (let j = 0; j < len - i - 1; j++) {
      // j = 0
      //     2          1
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
5, 4, 3, 2, 1, 5
4, 5, 3, 2, 1, 5
4, 3, 5, 2, 1, 5
4, 3, 2, 5, 1, 5
4, 3, 2, 1, 5, 5

3, 4, 2, 1, 5, 5
3, 2, 4, 1, 5, 5
3, 2, 1, 4, 5, 5
3, 2, 1, 4, 5, 5

2, 3, 1, 4, 5, 5
2, 1, 3, 4, 5, 5
2, 1, 3, 4, 5, 5

1, 2, 3, 4, 5, 5
1, 2, 3, 4, 5, 5


const array = [5, 4, 3, 2, 1, 5];
console.log('bubbleSort:', bubbleSort(array));
console.log('bubbleFn:  ', bubbleFn(array));

/*** 
 * @method 插入排序
 * @param {Array} 需要排序的数组
 * @description 
*/
const insertSort = arr => {
  const arrLength = arr.length;
  let cur, pre;
  for (let i = 1; i < arrLength; i++) {
    cur = arr[i];
    pre = i - 1;
    while (pre >= 0 && arr[pre] > cur) {
      arr[pre + 1] = arr[pre];
      pre --
    }
    arr[pre + 1] = cur;
  }
  return arr;
}

const insertArr = [2, ]
