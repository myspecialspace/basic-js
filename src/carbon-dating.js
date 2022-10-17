const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
//parseInt() ??? function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//function dateSample(sampleActivity) that calculates sample approximate age (in years).
//sampleActivity is a string. Calculated sample age must be number
//Age must be integer. Age must be rounded up (ceiling).

function dateSample(sampleActivity) {
  //parseFloat() function parses a string argument and returns a floating point number.
  const sampleActivityNumber = parseFloat(sampleActivity); //string to number

  //isNaN() function determines whether a value is NaN or not. (is number?)
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivityNumber) || sampleActivityNumber > MODERN_ACTIVITY || sampleActivityNumber <= 0){
    return false;
  } else {
    //Math.ceil() always rounds up and returns the smaller integer >= to a given number.
    //ln(N/N0)/k = t, where k= 0.693/t1\2 => ln(N/N0) / (0.693/ t1/2), t1/2 - HALF_LIFE_PERIOD
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (0.693 / HALF_LIFE_PERIOD));
  }
}

module.exports = {
  dateSample
};
