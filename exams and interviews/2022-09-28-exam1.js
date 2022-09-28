/**
 * @author MZJ
 * @date 2022-09-28
 * @description 携程笔试
 * @copyright xiecheng
 */

// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var t = -1;
// var cur_line = 0;
// rl.on('line', function(line){
//   if (t < 0) {
//     t = parseInt(line.trim())
//   } else {
//     const strs = line.split(' ');
//     const str1 = strs[0], str2 = strs[1];
//     console.log(check(str1, str2) ? "Yes" : "No");
//     cur_line++;
//   }
// });

function fun1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const n = str1.length;
  const cnt = new Array(26).fill(0);
  let i1 = -1, i2 = -1;
  for (let i = 0; i < n; i++) {
    cnt[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    if (str1[i] !== str2[i]) {
      if (i1 < 0) {
        i1 = i;
      } else if (i2 < 0) {
        i2 = i;
      } else {
        return false;
      }
    }
  }
  if (i1 === -1 && i2 === -1) {
    return cnt.some(v => v >= 2);
  }
  return str1[i1] === str2[i2] && str1[i2] === str2[i1];
}

// console.log(fun1("abc", "acb"));
// console.log(fun1("goto", "goto"));
// console.log(fun1("abc", "abc"));
// console.log(fun1("abc", "arc"));


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var t = -1;
// var cur_line = 0;
// rl.on('line', function(line){
//   if (t < 0) {
//     t = parseInt(line.trim())
//   } else {
//     const num = parseInt(line.trim());
//     console.log(fun2(num));
//     cur_line++;
//   }
// });

function fun2(num) {
  if (num % 233) {
    return -1;
  }
  return String(num / 233).split("").reduce((sum, v) => sum + Number(v), 0);
}

// console.log(fun2(232));
// console.log(fun2(233));
// console.log(fun2(466));
// console.log(fun2(23300));
// console.log(fun2(25863));


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var n = -1;
// var k = -1;
// var cur_line = 0;
// rl.on('line', function(line){
//   if (n < 0) {
//     const nk = line.split(" ");
//     n = parseInt(nk[0]);
//     k = parseInt(nk[1]);
//   } else {
//     const nums = line.split(" ").map(Number);
//     console.log(fun3(n, k, nums));
//     cur_line++;
//   }
// });

function fun3(n, k, nums) {
  if (n === k) {
    return 0;
  }
  if (k === 1) {
    return Math.max(...nums) - Math.min(...nums);
  }
  nums.sort((a, b) => a - b);
  let i = 0, j = n - 1, avg = 0, k1 = k;
  while (k1 > 1) {
    avg += nums[i++] / k;
    avg += nums[j--] / k;
    k1 -= 2;
  }
  if (k1 === 1) {
    return Math.min(cal(i + 1, j, avg + nums[i] / k), cal(i, j + 1, avg + nums[j] / k));
  }
  return cal(i, j, avg);

  function cal(i, j, avg) {
    return Math.max(nums[j], avg) - Math.min(nums[i], avg);
  }
}

console.log(fun3(4, 2, [5, 4, 2, 4]));
console.log(fun3(4, 4, [5, 4, 2, 4]));
console.log(fun3(7, 5, [2, 3, 4, 50, 60, 100, 120]));


var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var t = -1;
var n = -1, k = -1, x = -1;
rl.on('line', function(line){
  if (t < 0) {
    t = parseInt(line.trim());
  } else if (n < 0) {
    const nkx = line.split(" ");
    n = parseInt(nkx[0]);
    k = parseInt(nkx[1]);
    x = parseInt(nkx[2]);
  } else {
    const nums = line.split(" ").map(Number);
    console.log(fun4(nums, n, k, x));
    n = -1;
    k = -1;
    x = -1;
  }
});

function fun4(nums, n, k, x) {
  const kSum = new Array(n - k + 1).fill(0);
  for (let i = 0; i < n - k + 1; i++) {
    for (let j = 0; j < k; j++) {
      kSum[i] += nums[i + j];
    }
  }

}

console.log(fun4([1,2,1,1], 4, 3, 1));
console.log(fun4([1,2,3,4], 4, 2, 5));
console.log(fun4([1,100,1,1,1], 5, 3, 1));