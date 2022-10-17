const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberStr = n.toString();
  let numArr = [];

  for(let i = 0; i < numberStr.length; i++ ){
    //var res = numberStr.replace(numberStr.length[i], '');
    numArr.push(numberStr.slice(0,i) + numberStr.slice(i+1 ,numberStr.length));
  }

  return Math.max(...numArr);
}

module.exports = {
  deleteDigit
};
