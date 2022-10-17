const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
//diskNumber is a number of disks = number
//turnsSpeed is the speed of moving discs (in turns per hour) = number
//calculateHanoi function returns an object with 2 properties:
function calculateHanoi(disksNumber, turnsSpeed) {
  //2n − 1
  let minTurns = 2**disksNumber - 1;
  //Math.floor() rounds down and returns the largest integer <=to a given number (Math.floor(5.95) => 5)
  let obj = {
    turns: minTurns, //minimum number of turns to solve the puzzle
    seconds: Math.floor((60 * 60 * minTurns) / turnsSpeed) //minimum number of seconds to solve the puzzle at a given turnsSpeed
  };

  return obj;
}

module.exports = {
  calculateHanoi
};

