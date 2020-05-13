# Mini-Workshop 2: Sorting Algorithms

In Javascript, we’ve been relying on the `.sort` method to do all of the sorting for us. But it is also possible to write our own sorting algorithm!

In this workshop, we'll create our own sorting algorithms, so that we don't have to rely on `.sort`. We'll explore several variants.

# Context: What is an algorithm?

The word “algorithm” is a fancy computer-science word, but it really just refers to a program that takes some input and produces some output. For example, you could say that this is an algorithm that decides what to have for breakfast:

```js
function haveBreakfast(time) {
  if (time < 8) {
    // It's early! Make some eggs
    return 'eggs';
  } else {
    // No time for cooking, you're late for work!
    return 'oatmeal-bar';
  }
}
```

An algorithm doesn't have to be mathematical, or some advanced computer science concept! You've already written many algorithms in Javascript! And more broadly, every time you make a calculated decision, you're following an algorithm.

# Reading: Learning about sorting algorithms

Check out this comprehensive blog post for an intro to different sorting algorithms: https://blog.cloudboost.io/simple-sorting-algorithms-bd473e0ebd5

You can also watch this video, for when you get to Exercise 3: https://www.youtube.com/watch?v=67k3I2GxTH8

This workshop is very unguided; don't be afraid to google for things! Try to be granular in your google searches: don't google "how to do selection sort javascript", since that spoils all the fun! Search for small distinct parts of the problem you're stuck on.

IF you don't know where to start, read more about how the sorting process works in general. You can even look up a solution in another language (eg. "insertion sort python"), and see how you might migrate that solution to Javascript.

# Exercise 1: Selection Sort

Create a function which sorts an array based on a selection sort.

Copy this starter code to a new file, `selection-sort.js`:

```js
function selectionSort(arr) {
  // Your code here!
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
```

Write some tests, and solve the problem!

# Exercise 2: Insertion sort

Same deal. Create a new file, `insertionSort.js`, and copy this starter code:

```js
function insertionSort(arr) {
  // Your code here!
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
```

# Exercise 3: Bubble sort

Last one! Give a Bubble Sort algorithm a shot:

```js
function bubbleSort(arr) {
  // Your code here!
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
```
