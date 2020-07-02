function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
    let copyArr = arr.slice();
    
    for(let i=0; i<arr.length; i++) {
        let min = Math.min(...copyArr);
        copyArr.splice(copyArr.indexOf(min), 1);
        swap(arr, i, arr.indexOf(min));
    }
    
    return arr; 
  }
  
  // Tests
  // (Add some others!)
  compareArrays(selectionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
  console.log(selectionSort([245, 5 , 65, 845, 66, 24]))
  
  // Test code
  function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
      console.log('✅ Test succeeded');
    } else {
      console.log(`⛔️ Expected “${arr1.join(',')}” to equal “${arr2.join(',')}”`);
    }
  }