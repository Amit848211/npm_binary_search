const binarySearch = require('binary-search-latest');

// Example usage
console.log(binarySearch);
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(array, target);

if (index >= 0) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found`);
}