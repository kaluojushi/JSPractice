/**
 * @author MZJ
 * @date 2022-09-30
 * @description 京东笔试
 * @copyright jingdong
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
//     var [x, y] = line.split(' ').map(Number);
//     console.log(fun1(x, y));
//   }
// });

function fun1(x, y) {
  if (x >= y) {
    return "-1 -1";
  } else {
    return `1 ${y - x}`;
  }
}


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// rl.on('line', function(line){
//   const str = line.trim();
//   console.log(fun2(str));
// });

function fun2(str) {
  const n = str.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (str[i - 1] === str[i]) {
      ans++;
      i += 2;
    }
  }
  return ans;
}

// console.log(fun2("rede"));
// console.log(fun2("rrdd"));
// console.log(fun2("rreedd"));
// console.log(fun2("rrd"));
// console.log(fun2("rrrrrrrr"));


// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal:false
// });
//
// var n = -1;
// rl.on('line', function(line){
//   if (n < 0) {
//     n = parseInt(line.trim())
//   } else {
//     var arr = line.split(' ').map(Number);
//     console.log(fun3(n, arr));
//   }
// });

function fun3(n, arr) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const flag = new Array(n).fill(0);
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[i]) {
        flag[j] = -1;
      } else if (arr[j] > arr[i]) {
        flag[j] = 1;
      }
    }
    const preSum = new Array(n).fill(0);
    preSum[0] = flag[0];
    for (let j = 1; j < n; j++) {
      preSum[j] = preSum[j - 1] + flag[j];
    }
    const map = new Map();
    for (let j = 0; j <= i; j++) {
      const dif = preSum[i] - (preSum[j - 1] || 0);
      map.set(dif, (map.get(dif) || 0) + 1);
    }
    for (let j = i; j < n; j++) {
      const dif = preSum[j] - (preSum[i - 1] || 0);
      cnt += (map.get(-dif) || 0) + (map.get(1 - dif) || 0);
    }
    ans += cnt * arr[i];
  }
  return ans;
}

console.log(fun3(3, [1,3,2]));
console.log(fun3(4, [1,2,3,4]));
// console.log(fun3(6, [1,2,3,4,5,6]))