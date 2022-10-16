/**
 * @author MZJ
 * @date 2022-10-16
 * @description 腾讯笔试
 * @copyright tencent
 */


// const n = parseInt(readline());
// const q = readline().split(' ').map(Number);
// console.log(fun2(n, q));

function fun2(n, q) {
  let i = 0, j = n - 1;
  const ans = [];
  for (let k = 1; k <= n; k++) {
    if (k % 2) {
      if (q[i] >= q[j]) {
        ans.push(q[i++]);
      } else {
        ans.push(q[j--]);
      }
    } else {
      if (q[i] <= q[j]) {
        ans.push(q[i++]);
      } else {
        ans.push(q[j--]);
      }
    }
  }
  return ans.join(' ');
}

// console.log(fun2(3,[1,2,3]));
// console.log(fun2(21,[21,3,4,16,1,17,2,20,18,15,19,14,13,12,11,10,9,7,8,5,6]));


// const [n, x] = readline().split(' ').map(Number);
// const goods = new Array(n).fill(0).map(() => {});
// for (let i = 0; i < n; i++) {
//   const [x1, w1, x2, w2] = readline().split(' ').map(Number);
//   goods[i] = { x1, w1, x2, w2 };
// }
// console.log(fun3(n, x, goods));

function fun3(n, x, goods) {
  let ans = -1;
  dfs(0, 0, 0);
  return ans;

  function dfs(i, xSum, wSum) {
    if (i === n) {
      if (xSum === x) {
        ans = Math.max(ans, wSum);
      }
      return;
    }
    dfs(i + 1, xSum, wSum);
    const { x1, w1, x2, w2 } = goods[i];
    dfs(i + 1, xSum + x1, wSum + w1);
    dfs(i + 1, xSum + x2, wSum + w2);
  }
}

// console.log(fun3(2,6,[{x1:2,w1:10,x2:1,w2:7},{x1:6,w1:17,x2:4,w2:11}]));


// const arr1 = JSON.parse(readline());
// const arr2 = JSON.parse(readline());
// console.log(fun4(arr1, arr2));

function fun4(arr1, arr2) {
  const ans = [];
  const set1 = new Set(flat(arr1)), set2 = new Set(flat(arr2));
  for (const item of set1) {
    if (set2.has(item)) {
      ans.push(item);
    }
  }
  return JSON.stringify(ans.sort((a, b) => a - b));
}

function flat(arr) {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

// console.log(fun4([1,[2,3],4,2], [5,[4,[3]],2]));
// console.log(fun4([1,2], [4,3]));


// const calls = readline().split(' ');
// console.log(fun5(calls));

function fun5(calls) {
  if (typeof calls === "string") {
    calls = calls.split(' ');
  }
  const map = new Map(calls.map(str => str.split('.')));
  const ans = [];
  if (!isSync(calls[0][0])) {
    ans.push(calls[0][0]);
  }
  doCall(calls[0][0]);
  return ans.join('');

  function doCall(m) {
    let async = '';
    if (isSync(m)) {
      ans.push(m);
    }
    if (map.has(m)) {
      for (const mCall of map.get(m)) {
        if (isSync(mCall)) {
          doCall(mCall);
        } else {
          ans.push(mCall);
          async = mCall;
        }
      }
    }
    ans.push(m);
    if (async) {
      doCall(async);
    }
  }

  function isSync(ch) {
    return ch >= 'a' && ch <= 'z';
  }
}


console.log(fun5("a.bc b.d"));
console.log(fun5("a.Bc B.d"));
console.log(fun5("A.B B.C C.D D.E"));