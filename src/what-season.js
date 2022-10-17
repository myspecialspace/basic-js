const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
//take Date-object, returns the time of the year = string.

//seasons in English are: spring, summer, autumn (fall), winter.
//If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'.
//If the date argument is invalid, the function must throw an Error with message Invalid date!.
function getSeason(date) {
  const monthArr = {
    winter: [11, 0, 01],
    spring: [02, 03, 04],
    summer: [05, 06, 07],
    autumn: [08, 09, 10],
  };

  try {
    //isNaN() function determines whether a value is NaN or not.
    //getTime() method returns the number of milliseconds since 1 January 1970 00:00:00 UTC and the given date
    if (date === undefined || isNaN(date.getTime()) || date === null) {
      return 'Unable to determine the time of year!';
    }
    //indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    //getMonth() method returns the month in the specified date according to local time, 0-January
    return Object.keys(monthArr).find(i => monthArr[i].indexOf(date.getMonth()) >= 0);
  } catch(error) {
    throw new Error('Invalid date!');
  }


}

module.exports = {
  getSeason
};
