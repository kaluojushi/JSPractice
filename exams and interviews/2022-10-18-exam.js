/**
 * @author MZJ
 * @date 2022-10-18
 * @description 大华笔试
 * @copyright didi
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {')': '(', ']': '[', '}': '{'};
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.length && stack[stack.length - 1] === map[ch]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid(']'));
console.log(isValid('['));
console.log(isValid('(('));
console.log(isValid('))'));


// n是奇数，计算1+3+5+...+n，不能用乘除法、for、while、if、else、switch、case等关键字
function sum(n) {
  return n + 1 && n + sum(n - 2);
}

console.log(sum(1));
console.log(sum(5));
console.log(sum(7));
console.log(sum(15));