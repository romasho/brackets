const BRACKETS_PAIR = {
  [')']: '(',
  ['}']: '{',
  [']']: '['
}
const OPEN_BRACKETS = [ '(', '{', '[']


module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

