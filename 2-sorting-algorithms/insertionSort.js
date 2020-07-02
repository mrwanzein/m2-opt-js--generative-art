function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let decreaseIndexIfSwapped = i;
        
        for(let j=i-1; j>=0; j--) {
            if(arr[decreaseIndexIfSwapped] < arr[j]) {
                swap(arr, j, decreaseIndexIfSwapped);
                decreaseIndexIfSwapped -= 1;
            };
        }
    }
    return arr;
  }
  
  // Tests
  // (Add some others!)
  compareArrays(insertionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
  console.log(insertionSort([345, 53, 24, 4, 554, 68]));
  
  // Test code
  function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
      console.log('✅ Test succeeded');
    } else {
      console.log(`⛔️ Expected “${arr1.join(',')}” to equal “${arr2.join(',')}”`);
    }
  }