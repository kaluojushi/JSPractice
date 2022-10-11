/**
 * @author MZJ
 * @date 2022-10-11
 * @description 百度笔试
 * @copyright baidu
 */


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var t = -1;
// rl.on('line', function(line){
//   if (t < 0) {
//     t = parseInt(line.trim())
//   } else {
//     console.log(fun1(line) ? "Yes" : "No");
//   }
// });

function fun1(str) {
  if (str.length !== 5) {
    return false;
  }
  return str.split("").sort().join("") === "Baidu".split("").sort().join("");
}

// console.log(fun1("duBai"));


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var t = -1;
// var n = -1, k = -1;
// rl.on('line', function(line){
//   if (t < 0) {
//     t = parseInt(line.trim())
//   } else if (n < 0) {
//     [n, k] = line.split(' ').map(Number);
//   } else {
//     var arr = line.split(' ').map(Number);
//     console.log(fun2(n, k, arr));
//     n = -1;
//     k = -1;
//   }
// });

function fun2(n, k, arr) {
  const cnt = new Map();
  for (const num of arr) {
    cnt.set(num, (cnt.get(num) || 0) + 1);
  }
  const cntArr = Array.from(cnt);
  cntArr.push([0, 0]);
  cntArr.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < cntArr.length; i++) {
    cntArr[i][1] += cntArr[i - 1][1];
  }
  for (let i = 0; i < cntArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (cntArr[i][1] - cntArr[j][1] === k) {
        return `${cntArr[j][0] + 1} ${cntArr[i][0]}`;
      }
    }
  }
  return "-1";
}

// console.log(fun2(4, 2, [1,2,1,2]));
// console.log(fun2(8, 8, [3,4,5,6,7,7,7,8]));


var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var x = -1;
rl.on('line', function(line){
  x = parseInt(line.trim())
  console.log(fun3(x));
});

function fun3(x) {
  const [s, n] = check(x);
  if (s === 1) {
    return 'r'.repeat(n);
  }
  if (s === 2) {
    return "re".repeat(n).slice(0, -1);
  }
  if (s === 3) {
    return "re".repeat(n);
  }
  let i = x;
  while (i > 0) {
    if (check(--i)[0] > 0) {
      break;
    }
  }
  const pre = fun3(i), len = pre.length, ch = pre[len - 1];
  const patch = ch === 'r' ? "der" : "dre";
  return fun3(i) + patch.repeat(Math.floor((x - i) / 3) + 1).slice(0, x - i);
}

function check(x) {
  let n = Math.floor(Math.sqrt(2 * x));
  if (n * (n + 1) === 2 * x) {
    return [1, n];
  }
  n = Math.floor(Math.sqrt(x));
  if (n * n === x) {
    return [2, n];
  }
  if (n * (n + 1) === x) {
    return [3, n];
  }
  return [-1, -1];
}

for (let i = 1; i <= 50; i++) {
  console.log(i, fun3(i), test(i, fun3(i)));
}

function test(x, str) {
  if (str.length > 1e5) {
    return false;
  }
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const sub = str.slice(i, j);
      if (sub.split('').reverse().join('') === sub) {
        cnt++;
      }
    }
  }
  return cnt === x;
}