/**
 * @author MZJ
 * @date 2022-04-11
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let cnt = 1, a = 1;
  for (let i = 0; i < n; i++) {
    cnt += 9 * a;
    a *= (9 - i);
  }
  return cnt;
};

// console.log(countNumbersWithUniqueDigits(3));


/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  return count("101") + count("010");

  function count(t) {
    let a = 0, b = 0, c = 0;
    for (const ch of s) {
      if (ch === t[2]) {
        c += b;
      }
      if (ch === t[1]) {
        b += a;
      }
      if (ch === t[0]) {
        a++;
      }
    }
    return c;
  }
};

// console.log(numberOfWays("001101"))
// console.log(numberOfWays("11100"))


/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const map = new Map();
  for (const match of matches) {
    const winner = match[0], loser = match[1];
    map.set(winner, map.get(winner) || 0);
    map.set(loser, (map.get(loser) || 0) + 1);
  }
  const ans = [[], []];
  for (const [i, cnt] of map) {
    if (cnt === 0 || cnt === 1) {
      ans[cnt].push(i);
    }
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
};

// console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
// console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]))


/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let l = 1, r = Math.max(...candies) + 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (valid(mid)) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1;

  function valid(i) {
    return candies.reduce((sum, candy) => sum + Math.floor(candy / i), 0) >= k;
  }
};

// console.log(maximumCandies([5,8,6], 3))
// console.log(maximumCandies([5,7,6], 4))
// console.log(maximumCandies([2,5], 11))
// console.log(maximumCandies([5,5,5], 3))


/**
 * @param {string} article
 * @param {number} index
 * @return {string}
 */
var deleteText = function (article, index) {
  if (article[index] === " ") {
    return article;
  }
  const n = article.length;
  let l = index, r = index;
  while (article[l] !== " " && l > 0) {
    l--;
  }
  while (article[r] !== " " && r < n - 1) {
    r++;
  }
  return article.slice(0, l) + (l > 0 && r < n - 1 ? " " : "") + article.slice(r + 1);
};

// console.log(deleteText("Singing dancing in the rain", 10))
// console.log(deleteText("Hello World", 2))
// console.log(deleteText("Hello World", 5))
// console.log(deleteText("Hello World", 7))
// console.log(deleteText("e RSg c R cf", 10) + "a")


/**
 * @param {number[][]} roads
 * @return {number}
 */
var numFlowers = function (roads) {
  const n = roads.length + 1;
  const d = new Array(n).fill(0);
  for (const road of roads) {
    d[road[0]]++;
    d[road[1]]++;
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, d[i] + 1)
  }
  return ans;
};

// console.log(numFlowers([[0,1],[1,3],[1,2]]))
// console.log(numFlowers([[0,1],[0,2],[1,3],[2,5],[3,6],[5,4]]))


/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const MAX = 100;
  let rows = 1, last = 0;
  for (const ch of s) {
    const width = widths[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (last + width <= MAX) {
      last += width;
    } else {
      rows++;
      last = width;
    }
  }
  return [rows, last];
};

// console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"));
// console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"))


/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
  const [num1, num2] = expression.split("+");
  let min = Number.MAX_VALUE, ii = 0, jj = 0;
  for (let i = 0; i < num1.length; i++) {
    for (let j = 1; j <= num2.length; j++) {
      const res = cal(num1.slice(0, i), num1.slice(i), num2.slice(0, j), num2.slice(j));
      if (res < min) {
        min = res;
        [ii, jj] = [i, j];
      }
    }
  }
  const arr1 = num1.split(""), arr2 = num2.split("");
  arr1.splice(ii, 0, '(');
  arr2.splice(jj, 0, ')');
  return arr1.join("") + '+' + arr2.join("");

  function cal(x1, y1, x2, y2) {
    return Number(x1 || '1') * (Number(y1) + Number(x2)) * Number(y2 || '1');
  }
};

// console.log(minimizeResult("247+38"))
// console.log(minimizeResult("12+34"))
// console.log(minimizeResult("999+999"))


var RandomizedSet = function () {
  this.data = [];
  this.indicies = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indicies.has(val)) {
    return false;
  }
  const index = this.data.length;
  this.data.push(val);
  this.indicies.set(val, index);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indicies.has(val)) {
    return false;
  }
  const index = this.indicies.get(val);
  this.data[index] = this.data[this.data.length - 1];
  this.indicies.set(this.data[index], index);
  this.data.pop();
  this.indicies.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.data[Math.floor(Math.random() * this.data.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// const obj = new RandomizedSet();
// console.log(obj.insert(1));
// console.log(obj.remove(2))
// console.log(obj.insert(2));
// console.log(obj.getRandom());
// console.log(obj.remove(1));
// console.log(obj.insert(2));
// console.log(obj.getRandom());
// console.log(obj.data);
// console.log(obj.indicies);


/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
  const n = cont.length;
  let [x, y] = [cont[n - 1], 1];
  for (let i = n - 2; i >= 0; i--) {
    [x, y] = [cont[i] * x + y, x];
  }
  return [x, y];
};

// console.log(fraction([3, 2, 0, 2]))
// console.log(fraction([0, 0, 3]))
// console.log(fraction([2, 3]))


/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < k; i++) {
    const next = new Array(n).fill(0);
    for (const [from, to] of relation) {
      next[to] += dp[from];
    }
    dp = next;
  }
  return dp[n - 1];
};

// console.log(numWays(5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 3));
// console.log(numWays(3, [[0,2],[2,1]], 2));


/**
 * @param {number[]} scores
 * @return {number}
 */
var expectNumber = function (scores) {
  return new Set(scores).size;
};


/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  let arg = typeof s === "string" ? eval(s) : s;
  const res = new NestedInteger();
  if (typeof arg === "number") {
    res.setInteger(arg);
  } else {
    arg.forEach(item => res.add(deserialize(item)));
  }
  return res;
};

// console.log(deserialize("324").toString())
// console.log(deserialize("[123,[456,[789]]]").toString())
// console.log(deserialize("[1,2,[3,[[4,5,[6],7],8]]]").toString())

function NestedInteger() {
  this.type = 0;
  this.integer = 0;
  this.list = [];

  /**
   * @return {boolean}
   */
  this.isInteger = function () {
    return this.type === 1;
  };

  /**
   * @return {number|null}
   */
  this.getInteger = function () {
    if (this.type === 1) {
      return this.integer;
    } else {
      return null;
    }
  };

  /**
   * @return {void}
   */
  this.setInteger = function (value) {
    this.type = 1;
    this.integer = value;
  };

  /**
   * @return {void}
   */
  this.add = function (elem) {
    if (this.type !== 2) {
      this.type = 2;
      this.list = [];
    }
    this.list.push(elem);
  };

  /**
   * @return {NestedInteger[]|null}
   */
  this.getList = function () {
    if (this.type === 2) {
      return this.list;
    } else {
      return null;
    }
  };

  /**
   * @return {string}
   */
  this.toString = function () {
    if (this.type === 1) {
      return String(this.integer);
    } else if (this.type === 2) {
      return `[${this.list.toString()}]`;
    }
  }
};


/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  if (n === 1) {
    return 9;
  }
  const max = 10 ** n - 1;
  for (let left = max; left > max / 10; left--) {
    const right = String(left).split("").reverse().join("");
    const p = BigInt(String(left) + right);
    for (let x = BigInt(max); x >= p / x; x--) {
      if (p % x === 0n) {
        return Number(p % 1337n);
      }
    }
  }

  // return [9, 987, 123, 597, 677, 1218, 877, 475][n - 1];
};

for (let i = 1; i <= 8; i++) {
  console.log(i + ": " + largestPalindrome(i));
}