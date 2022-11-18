/**
 * @author MZJ
 * @date 2022-11-18
 * @description oppo笔试
 * @copyright oppo
 */


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
//
// rl.on('line', function(line){
//   const nums = line.split(" ").map(Number);
//   console.log(fun1(nums));
// });

function fun1(nums) {
  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const [a, b, c] = [nums[i], nums[j], nums[k]];
        if (a * a + b * b === c * c) {
          ans++;
        }
      }
    }
  }
  return ans;
}


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
//
// rl.on('line', function(line){
//   const name = line;
//   console.log(fun2(name));
// });

function fun2(name) {
  if (isUpperCase(name[0])) {
    return name;
  }
  const ans = [], n = name.length;
  for (let i = 0; i < n; i++) {
    if (isUpperCase(name[i])) {
      if (i > 0 && name[i - 1] === "_") {
        ans.push(name[i]);
      } else if (i > 0 && i < n - 1 && isUpperCase(name[i - 1]) && isUpperCase(name[i + 1])) {
        ans.push(name[i]);
      } else {
        ans.push("_" + name[i]);
      }
    } else {
      ans.push(name[i]);
    }
  }
  return ans.join("").toLowerCase();
}

function isUpperCase(ch) {
  return ch >= 'A' && ch <= 'Z';
}


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
//
// rl.on('line', function(line){
//   const text = line;
//   console.log(fun3(text));
// });

function fun3(text) {
  return text.split(" ").filter(word => isWord(word)).length;
}

function isWord(word) {
  if (/^\w*:\/\/.*?/.test(word)) {
    return false;
  }
  word = word.replace(/[^\w]/g, "");
  return !/^\d+$/.test(word) && /^\w+/.test(word);
}

const isDigit = ch => /\d/.test(ch);
const isLetter = ch => /[a-zA-Z]/.test(ch);

console.log(fun3("123-456-7890"));
console.log(fun3("He's 27."));
console.log(fun3("Visit our website at http://www.oppo.com/customer to learn more!"))
console.log(fun3("\"7-eleven , my favorite !\""))