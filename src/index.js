module.exports = function check(str, bracketsConfig) {
  let stack = []
  const BRACKETS_PAIR = {}
  for (let j=0; j< bracketsConfig.length; j++) {
    BRACKETS_PAIR[bracketsConfig[j][0]] = bracketsConfig[j][1]
  }
  
  for (let i = 0; i < str.length; i++) {
    let lastElementStack = stack[stack.length - 1]
    let currentElement = str[i]
    if (currentElement === BRACKETS_PAIR[lastElementStack]) {
      stack.pop(lastElementStack)
    } else if (BRACKETS_PAIR.hasOwnProperty(currentElement)) {
      stack.push(currentElement)
    } else {return false}
  }
  return stack.length === 0
}

