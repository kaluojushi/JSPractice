/**
 * 求集合A关于集合U的补集
 */
function complement(A, U) {
  return U.filter(x => !A.includes(x));
}

// console.log(complement([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


/**
 * 实现一个数学处理的能力，支持链式调用，包括 平方、n次方、取绝对值
 * 调用时不用new，如myCalculator(-2).abs().square().pow(3).getValue()
 */
function myCalculator(num) {
  return {
    num: num,
    abs() {
      this.num = Math.abs(this.num);
      return this;
    },
    sqr() {
      this.num = this.num * this.num;
      return this;
    },
    pow(n) {
      this.num = Math.pow(this.num, n);
      return this;
    },
    getValue() {
      return this.num;
    }
  }
}

// console.log(myCalculator(-2).abs().sqr().pow(3).getValue());


/**
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 * 当有任务执行完毕后，自动补充任务，始终保持同时执行的任务有n个
 * 返回 { resolved: [], rejected: [] }
 */

async function parallel(tasks, n) {
  const ans = {resolved: [], rejected: []};
  const executing = new Set();
  for (const task of tasks) {
    const e = task().then(res => {
      executing.delete(e);
      ans.resolved.push(res);
    }).catch(err => {
      executing.delete(e);
      ans.rejected.push(err);
    });
    executing.add(e);
    if (executing.size >= n) {
      await Promise.race(executing);
    }
  }
  while (executing.size > 0) {
    await Promise.race(executing);
  }
  return ans;
}

async function test() {
  try {
    const tasks = [
      () => new Promise(resolve => setTimeout(resolve, 1000, 'a')),
      () => Promise.resolve("foo"),
      () => Promise.reject(new Error("bar")),
      () => fetch("https://www.baidu.com"),
      () => new Promise(resolve => process.nextTick(resolve, 'b')),
      () => new Promise(resolve => setTimeout(resolve, 1500, 'c')),
      () => new Promise(resolve => setTimeout(resolve, 1500, 'd')),
    ];
    const {resolved, rejected} = await parallel(tasks, 3);
    console.log(resolved, rejected);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// test();

function fetch(url) { // 模拟fetch
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}


/**
 * 已知前序遍历和中序遍历，求二叉树
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function buildTree1(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const i = inorder.indexOf(preorder[0]);
  root.left = buildTree1(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree1(preorder.slice(i + 1), inorder.slice(i + 1));
  return root;
}

// console.log(buildTree1([8,7,5,4,3,2,1,6], [5,7,3,4,1,2,8,6]));


/**
 * 已知中序遍历和后序遍历，求二叉树
 */

function buildTree2(inorder, postorder) {
  if (postorder.length === 0) {
    return null;
  }
  const root = new TreeNode(postorder[postorder.length - 1]);
  const i = inorder.indexOf(postorder[postorder.length - 1]);
  root.left = buildTree2(inorder.slice(0, i), postorder.slice(0, i));
  root.right = buildTree2(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));
  return root;
}

// console.log(buildTree2([5,7,3,4,1,2,8,6], [5,3,1,2,4,7,6,8]));


/**
 * 已知前序遍历和后序遍历，求二叉树（不唯一，存疑）
 */

function buildTree3(preorder, postorder) {
  if (preorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  if (preorder.length === 1) {
    return root;
  }
  const i = postorder.indexOf(preorder[1]);
  root.left = buildTree3(preorder.slice(1, i + 2), postorder.slice(0, i + 1));
  root.right = buildTree3(preorder.slice(i + 2), postorder.slice(i + 1, postorder.length - 1));
  return root;
}

// console.log(buildTree3([8,7,5,4,3,2,1,6], [5,3,1,2,4,7,6,8]));


/**
 * 宏任务和微任务队列
 */

const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log("Timeout!"), 0);
  console.log("Last line!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log("Timeout!"), 0);
  console.log("Last line!");
}

// funcOne();
// funcTwo();

// Output: Last line! Promise! Promise! Last line! Timeout! Timeout!


// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('settimeout')
// })
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

// Output: script start  async1 start  async2  promise1  script end  async1 end  promise2  settimeout


/**
 * 下划线转驼峰
 */

function snake2camel(str) {
  return typeof str === "string" ? str.split('_').map((s, i) => i > 0 ? s[0].toUpperCase() + s.slice(1) : s).join('') : "";
}

// console.log(snake2camel());
// console.log(snake2camel(undefined));
// console.log(snake2camel(null));
// console.log(snake2camel(""));
// console.log(snake2camel("alipay"));
// console.log(snake2camel("alipay_first_quiz"));
// console.log(snake2camel("aaaa_bb_ccc"));


/**
 * 驼峰转下划线
 */

function camel2snake(str) {
  return typeof str === "string" && str.length > 0 ? (str[0] + str.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase() : "";
}

// console.log(camel2snake());
// console.log(camel2snake(undefined));
// console.log(camel2snake(null));
// console.log(camel2snake(""));
// console.log(camel2snake("alipay"));
// console.log(camel2snake("alipayFirstQuiz"));
// console.log(camel2snake("aaaaBbCcc"));
// console.log(camel2snake("AaaaBbCcc"));


/**
 * 两数之和，求下标
 */

function findSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

// console.log(findSum([1,2], 3));
// console.log(findSum([4,5,13,9], 13));
// console.log(findSum([4,5,13,9], 14));
// console.log(findSum([4,5,13,9], 9));
// console.log(findSum([1,8,10,11], 21));


/**
 * 返回URL的query解析结果
 */

function parseQueryString(url) {
  const ans = {};
  if (typeof url === "string") {
    const query = url.split("/?")[1];
    if (query) {
      const queries = query.split("&").map(s => s.split("="));
      for (const [key, value] of queries) {
        if (key) {
          ans[key] = decodeURIComponent(value || "");
        }
      }
    }
  }
  return ans;
}

// console.log(parseQueryString());
// console.log(parseQueryString("https://google.com"));
// console.log(parseQueryString("https://google.com?"));
// console.log(parseQueryString("https://google.com/?name=jeff&nick=dean"));
// console.log(parseQueryString("https://google.com/?name=jeff&nick=&"));
// console.log(parseQueryString("https://google.com/?name=jeff&name"));
// console.log(parseQueryString("https://google.com/?q=%E6%94%AF%E4%BB%98%E5%AE%9D"));
// console.log(parseQueryString("https://google.com/?q=%2F%3F%26%3D%2F%3F%26%3D%2F%3F%26%3D"));


/**
 * 将JSON对象转为Query String
 */

function toQueryString(map) {
  if (!map) {
    return "";
  }
  const ans = [];
  for (const [key, value] of Object.entries(map)) {
    ans.push(`${key}=${encodeURIComponent(value == null ? "" : value)}`);
  }
  return ans.join("&");
}

// console.log(toQueryString());
// console.log(toQueryString({}));
// console.log(toQueryString({ a: 1, b: 2 }));
// console.log(toQueryString({ a: 1, b: undefined }));
// console.log(toQueryString({ a: 1, b: null }));
// console.log(toQueryString({ a: 1, b: 0 }));
// console.log(toQueryString({ a: "支付宝" }));
// console.log(toQueryString({ a: "/?&=/?&=/?&=" }));


/**
 * 函数生成器，生成一个新函数，按index定义顺序传参
 */

function createRearFunc(func, indexes) {
  return function(...args) {
    return func(...indexes.map(i => args[i]));
  }
}

// console.log(createRearFunc((a, b, c) => [a, b, c], [2, 0, 1])("a", "b", "c"));


/**
 * 重排一个字符串，列出每个相邻字符不同的所有情况
 */

function reorganize(str) {
  const n = str.length;
  if (n === 1) {
    return [str];
  }
  const ans = new Set();
  for (let i = 0; i < n; i++) {
    for (const rest of reorganize(str.slice(0, i) + str.slice(i + 1))) {
      if (rest[0] !== str[i]) {
        ans.add(str[i] + rest);
      }
    }
  }
  return Array.from(ans);
}

// console.log(reorganize("aabb"));
// console.log(reorganize("aaabbbb"));
// console.log(reorganize("aabbbc"));
// console.log(reorganize("1bbbbb"));


/**
 * 判断一个链路是否对称闭环
 */

function isSymmetricalClosed(path) {
  const nodes = path.split("->");
  const n = nodes.length;
  if (n === 1) {
    return true;
  }
  const map = new Map();
  for (const node of nodes) {
    map.set(node, (map.get(node) || 0) + 1);
  }
  const odd = [];
  for (const [node, count] of map) {
    if (count % 2 === 1) {
      odd.push(node);
    }
  }
  return odd.length <= 1;
}

console.log(isSymmetricalClosed("1->2"));
console.log(isSymmetricalClosed("1"));
console.log(isSymmetricalClosed("1->5->3->5->1"));
console.log(isSymmetricalClosed("1->2->3->1"));