const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
//first letters of the names of its members in upper case sorted alphabetically
//return string based on members(given array)
//Names of the members - strings. Values with other type - ignored. wrong members type - return false.
//Team member name may contain whitespaces -delete whitespaces
function createDreamTeam(members) {
  //Array.isArray() static method determines whether the passed value is an Array
  //wrong members type - return false.
  if (!Array.isArray(members)) return false;
  //empty array
  let dreamTeamArr = [];
  //go through array
  for (let i = 0; i < members.length; i++) {
    //Names of the members - strings. Values with other type - ignored, delete whitespaces with trim()
    //trim() method removes whitespace from both ends of a string and returns a new string
    if (typeof members[i] === "string" && members[i].length > 0) {
      dreamTeamArr.push(members[i].trim()[0]); //push() adds one or more elements to the end of an array
    }
  }
  //map() creates a new array  goes on every element in the calling array.
  //sort() method sorts array in ascending order
  //join() creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
  let str = dreamTeamArr.map((i) => i.toUpperCase()).sort().join('');

  return str;
}

module.exports = {
  createDreamTeam
};
