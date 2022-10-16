/**
 * @author MZJ
 * @date 2022-10-16
 * @description 牛客直通笔试
 * @copyright niuke-directly
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

function fun1(s) {
  return s.includes("red") && !s.includes("der");
}


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
//     const arr = line.split(' ').map(Number);
//     console.log(fun2(n, arr));
//   }
// });

function fun2(n, arr) {
  let original = 0;
  for (let i = 0; i < n - 1; i++) {
    original += Math.abs(arr[i] - arr[i + 1]);
  }
  if (n <= 2) {
    return original;
  }
  let ans = original;
  ans = Math.max(ans, original - Math.abs(arr[1] - arr[2]) + Math.abs(arr[0] - arr[2]));
  ans = Math.max(ans, original - Math.abs(arr[n - 3] - arr[n - 2]) + Math.abs(arr[n - 3] - arr[n - 1]));
  for (let i = 1; i < n - 2; i++) {
    const [a, b] = [arr[i], arr[i + 1]];
    const [xa, bx] = [arr[i - 1], arr[i + 2]];
    const tmp = original - Math.abs(a - xa) - Math.abs(b - bx) + Math.abs(b - xa) + Math.abs(a - bx);
    ans = Math.max(ans, tmp);
  }
  return ans;
}

console.log(fun2(4, [1,2,3,4]));