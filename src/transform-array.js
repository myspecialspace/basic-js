const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
//returns transformed array
/*
--discard-next [1, 2, 3, '--discard-next', 4, 5] => [1, 2, 3, 5]
--discard-prev [1, 2, 3, '--discard-prev', 4, 5] => [1, 2, 4, 5]
--double-next [1, 2, 3, '--double-next', 4, 5] => [1, 2, 3, 4, 4, 5]
--double-prev [1, 2, 3, '--double-prev', 4, 5] => [1, 2, 3, 3, 4, 5]
*/
function transform(arr) {
  //The function should throw an Error with message 'arr' parameter must be an instance of the Array! if the arr is not an Array
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  //create empty new array
  let newArray = [];
  //go through given array
  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next': {
        i=i+2; //[1, 2, 3, '--discard-next', 4, 5] => [1, 2, 3, 5]
        break;
      }
      case '--discard-prev': {
        //pop() method removes the last element from an array and returns that element.
        newArray.pop(); //[1, 2, 3, '--discard-prev', 4, 5] => [1, 2, 4, 5]
        break;
      }
      case '--double-next': {
        //push() method adds one or more elements to the end of an array
        if(arr[i+1]){
          newArray.push(arr[i + 1]); //[1, 2, 3, '--double-next', 4, 5] => [1, 2, 3, 4, 4, 5]
        }
        break;
      }
      case '--double-prev': {
        if (arr[i-1]) {
          newArray.push(arr[i - 1]); //[1, 2, 3, '--double-prev', 4, 5] => [1, 2, 3, 3, 4, 5]
        }
        break;
      }
      default:
        newArray.push(arr[i]);
    }

  }

  return newArray;

}

module.exports = {
  transform
};
