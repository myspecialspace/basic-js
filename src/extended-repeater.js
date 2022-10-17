const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
//str is a string to repeat;
/*options = object, that contains properties:

repeatTimes =  number of repetitions of the str;
separator = string separating repetitions of the str;
addition = additional string that will be added to each repetition of the str;
additionRepeatTimes = number of repetitions of the addition;
additionSeparator = string separating repetitions of the addition.
*/
//separator default value is '+'. additionSeparator default value is '|'.
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let repeatingString = '';
  //The str and addition = strings by default.
  //In case when type of these parameters is different, they must be converted to a string.
  str = String(str);
  //addition = String(options.addition) || '';
  /*if (addition === undefined) {
    addition = '';
  }else {
    addition = String(options.addition);
  }*/
  (addition === undefined) ? (addition='') : (addition=String(options.addition));

  for (let i = 1; i <= repeatTimes; i++) {

    repeatingString = repeatingString + str;

    for (let k = 1; k <= additionRepeatTimes; k++) {
      repeatingString = repeatingString + addition;
      if (k !== additionRepeatTimes) {
        repeatingString = repeatingString + additionSeparator;
      }
    }

    if (i !== repeatTimes) {
      repeatingString = repeatingString + separator;
    }

  }

  return  repeatingString;
}

module.exports = {
  repeater
};
