const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = ''
  let letter = 1; //number of letter to count
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        letter++;
      }else if(letter > 1){
        answer = answer + letter + str[i];
        letter = 1;
      }else if(letter = 1){
        answer = answer + str[i];
      }
  }
  return answer;
}

module.exports = {
  encodeLine
};
