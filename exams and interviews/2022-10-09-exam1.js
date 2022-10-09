/**
 * @author MZJ
 * @date 2022-10-09
 * @description 360笔试
 * @copyright 360
 */


// // const [N, M] = readline().split(' ').map(Number);
// // let nums = readline().split(' ').map(Number);
// const [N, M] = [4, 2];
// let nums = [1,2,4,3];
// for (let i = 0; i < M; i++) {
//   // const [t, x] = readline().split(' ').map(Number);
//   const [t, x] = [[1, 3], [0, 2]][i];
//   nums = fun1(nums, t, x);
// }
// console.log(nums.join(' '));

function fun1(nums, t, x) {
  return nums.slice(0, x).sort((a, b) => t === 0 ? a - b : b - a).concat(nums.slice(x));
}


// const [n, q] = readline().split(' ').map(Number);
const [n, q] = [100, 2];
const map = new Map();
for (let i = 0; i < q; i++) {
  // const [L, R] = readline().split(' ').map(Number);
  const [L, R] = [[1,30],[21,40]][i];
  console.log(fun2(L, R));
}

function fun2(L, R) {

}