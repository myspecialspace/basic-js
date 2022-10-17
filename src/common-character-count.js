const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
//function that accepts two strings (s1 and s2) and returns number of common characters between them.
function getCommonCharacterCount(s1, s2) {
  //split() takes divides a String with separator '', returns array
  //sort() sorts the elements of an array in ascending order
  let arg1Array = s1.split('');
  let arg2Array = s2.split('').sort();

  let answer = [];

  for (let i = 0; i < arg1Array.length; i++) {
    if(arg1Array[i] === arg2Array[i]){
      answer.push(arg1Array[i]);
    }
  }
  return answer.length;
}

module.exports = {
  getCommonCharacterCount
};

