## README.md
# Binary Search



Binary Search is a simple npm package that provides efficient binary search algorithms for searching sorted arrays.

## Installation

You can install the binary-search package via npm:

```bash
npm install binary-search-latest



const binarySearch = require('binary-search-latest');

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(array, target);

if (index >= 0) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found`);
}
