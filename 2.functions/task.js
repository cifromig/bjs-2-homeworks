// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0
  min = arr[0], 
  max = arr[0]

  for (let i=0; i < arr.length; ++i) {
      if (arr[i] < min) {
        min = arr[i] }
      else if (arr[i] > max) {
        max = arr[i]
      }
      sum = sum + arr[i]

  }
  avg = sum/(arr.length)
  avg =Number(avg.toFixed(2))

  return { min: min, max: max, avg: avg };
}

// let massiv = [-99,99,10]
// getArrayParams (massiv)


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; ++i) {
    sum = sum + arr[i]
  }
  return sum;
}
let arrTest = [1,2,3,4,5,6,7]
worker(arrTest)

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i=0; i < arrOfArr.length; ++i) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i])
    }
  }

   return max;
}

let arrOfArrTest = [[1, 2, 3, 4], [10, 20, -10, -20]];
makeWork(arrOfArrTest, worker)

// Задание 3
function worker2(arr) {
  
  let min, max, difference;
  min = arr[0], 
  max = arr[0]

  for (let i=0; i < arr.length; ++i) {
      if (arr[i] < min) {
        min = arr[i] }
      else if (arr[i] > max) {
        max = arr[i]
      }
   }
   difference = Math.abs(max - min)

   return difference;

}

worker2(arrTest)
makeWork(arrOfArrTest, worker2)