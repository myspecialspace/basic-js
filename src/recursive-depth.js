const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) { //method calculateDepth that takes an array and returns its depth. count number of arrays
    //Depth of a flat array is 1
    let depth = 0;
    //calculateDepth method must pass the given array recursively
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
          depth = Math.max(depth, this.calculateDepth(arr[i]));
        }
    }

    return depth+1;
  }
}

module.exports = {
  DepthCalculator
};

/*
Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

--------РЕКУРСИЯ это когда функция вызывает сама себя----------
рекурсия используется,когда вы не знаете какая будет вложенность и сколько ее = гоняют дерево
хотим вывести array без вложенности
const array = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14, [15, 16]]]]]], 17] //функция принимает массив, он со вложенностью [5, 6, [7, 8]]
const result = []; //сюда кладется результат из проверки в for числа

const flattenArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        const currentValue = arr[i] // arr[0] это 1
        if(typeof currentValue !== 'number') { // typeof 1 = числу, правильно? да!
            flattenArray(currentValue)
        } else {
          result.push(currentValue) //берет этот результат и кладет в массив const result = [];
        }

    }
}
*/
