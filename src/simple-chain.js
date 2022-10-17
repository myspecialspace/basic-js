const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object that creates chains.
 *
 *The finished chain is a string and looks like this: '( value1 )~~( value2 )~~( value3 )'.

 addLink, reverseChain and removeLink methods are chainable, while the another ones are not.
 If addLink is called with no arguments, it adds an empty link ('( )') to the chain.
 If removeLink accepts invalid position (e.g. not a number, or a fractional number, or corresponding to a nonexistent link),
 it must throw an Error with message You can't remove incorrect link!.
 After calling the finishChain method, the existing chain must be deleted, as if an Error was thrown.
 */
const chainMaker = {
  //new array
  chain: [],
  getLength() {  //returns the current chain length as a number;
    return this.chain.length;
  },
  addLink(value='') { //adds a link containing a string representation of the value to the chain;
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) { // removes a chain link in the specified position;
    if (position > this.chain.length || position<1 || this.chain[position-1]==undefined || !Number.isInteger(position)){
       this.chain = [];
       throw new Error("You can\'t remove incorrect link!");
    } else {
      //splice - remove 1 element at index position-1
      this.chain.splice(position - 1, 1);
      return this;
    }

  },
  reverseChain() { //reverses the chain;
    this.chain.reverse();
    return this;
  },
  finishChain() { //ends the chain and returns it.
    let answer = this.chain.join('~~');
    this.chain = [];
    return answer;
  }
};

module.exports = {
  chainMaker
};

