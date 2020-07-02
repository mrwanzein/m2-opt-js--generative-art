function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
            for(let j=0; j<arr.length; j++){
                if(arr[j] > arr[j+1]) {
                    swap(arr, j, j+1)
                };
            }
    }
    return arr;
  }
  
  // Tests
  // (Add some others!)
  compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
  console.log(bubbleSort([234, 444, 3, 23, 54, 996, 239, 239]))
  
  // Test code
  function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
      console.log('✅ Test succeeded');
    } else {
      console.log(`⛔️ Expected “${arr1.join(',')}” to equal “${arr2.join(',')}”`);
    }
  }