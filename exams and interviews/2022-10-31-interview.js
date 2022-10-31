/**
 * @author MZJ
 * @date 2022-10-31
 * @description 美团面试
 * @copyright meituan
 */


function myPromiseAll(list) {
  const arr = Array.from(list);
  const len = arr.length;
  const ans = new Array(len);
  let cnt = 0;
  return new Promise((resolve, reject) => {
    for (const i in arr) {
      const p = Promise.resolve(arr[i]);
      p.then(res => {
        ans[i] = res;
        cnt++;
        if (cnt === len) {
          resolve(ans);
        }
      }).catch(err => {
        reject(err);
      });
    }
  });
}

const p1 = Promise.resolve(3);
const p2 = new Promise(resolve => {
  setTimeout(resolve, 1000, 9);
})
const p3 = Promise.resolve(5);
const p4 = 2;
const p = myPromiseAll([p1,p2,p3,p4]);
p.then(res => console.log(res));