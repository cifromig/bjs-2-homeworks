function compareArrays(arr1, arr2) {
  let result;
  
  if (arr1.length === arr2.length) {
    function isBigEnough(element, index, array) {
      return element === arr2[index];
    }
    result = arr1.every(isBigEnough); 
  }
  else {
    result = false
  }
  return result; // boolean
}

// let res = compareArrays ([1,2,3], [1,2,3])

function advancedFilter(arr) {
  let resultArr;

      resultArr = arr.filter(item => item>0);
      resultArr = resultArr.filter(item => item%3 === 0);
      resultArr = resultArr.map(item => item*10);
  
  return resultArr; // array
}

advancedFilter ([-1,1,2,3])