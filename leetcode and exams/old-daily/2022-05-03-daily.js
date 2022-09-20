/**
 * @author MZJ
 * @date 2022-05-03
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  return logs.sort((a, b) => {
    if (isLetterLog(a) && !isLetterLog(b)) {
      return -1;
    } else if (!isLetterLog(a) && isLetterLog(b)) {
      return 1;
    } else if (isLetterLog(a) && isLetterLog(b)) {
      const [a0, ...a1] = a.split(" "), [b0, ...b1] = b.split(" ");
      const a11 = a1.join(" "), b11 = b1.join(" ");
      return a11 !== b11 ? a11.localeCompare(b11) : a0.localeCompare(b0);
    }
  });

  function isLetterLog(str) {
    const t = str.split(" ")[1][0];
    return t >= "a" && t <= "z";
  }
};

// console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
// console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const n = nums.length;
  const map = new Map();
  for (const num of nums) {
    for (const x of num) {
      map.set(x, (map.get(x) || 0) + 1);
    }
  }
  const ans = [];
  for (const [x, cnt] of map) {
    if (cnt === n) {
      ans.push(x);
    }
  }
  return ans.sort((a, b) => a - b);
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  let ans = 1;
  for (let i = 2; i <= n; i++) {
    ans = (ans + k - 1) % i + 1;
  }
  return ans;
};

// console.log(findTheWinner(5, 2), 3);
// console.log(findTheWinner(6, 5), 1);
// console.log(findTheWinner(5, 3), 4);


/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  const n = number.length;
  const arr = number.split("");
  let ans = "0";
  for (let i = 0; i < n; i++) {
    if (arr[i] === digit) {
      const val = [...arr.slice(0, i), ...arr.slice(i + 1)].join("");
      if (ans.localeCompare(val) < 0) {
        ans = val;
      }
    }
  }
  return ans;
};


/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const n = cards.length;
  const map = new Map();
  let ans = -1;
  for (let i = 0; i < n; i++) {
    const value = cards[i];
    if (map.has(value)) {
      const dist = i - map.get(value) + 1;
      ans = ans === -1 ? dist : Math.max(ans, dist);
    }
    map.set(value, i);
  }
  return ans;
};

// console.log(minimumCardPickup([70,37,70,41,1,62,71,49,38,50,29,76,29,41,22,66,88,18,85,53]))


/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
  const m = rectangles.length, n = points.length;
  const ans = new Array(n).fill(0);
  const rows = new Array(101).fill(0).map(() => []);

  rectangles.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  for (const [l, h] of rectangles) {
    rows[h].push(l);
  }

  for (let i = 0; i < n; i++) {
    const [x, y] = points[i];
    let cnt = 0;
    for (let j = y; j <= 100; j++) {
      const row = rows[j];
      let l = 0, r = row.length - 1;
      while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (row[mid] >= x) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      if (row[l] < x) {
        l++;
      }
      cnt += row.length - l;
    }
    ans[i] = cnt;
  }
  return ans;
};

// console.log(countRectangles([[1,2],[2,3],[2,5]], [[2,1],[1,4]]));
// console.log(countRectangles([[1,1],[2,2],[3,3]], [[1,3],[1,1]]));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  const n = nums.length;
  let ans = 0, i = 0, prod = 1;
  for (let j = 0; j < n; j++) {
    prod *= nums[j];
    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }
    ans += j - i + 1;
  }
  return ans;
};

// console.log(numSubarrayProductLessThanK([10,5,2,6],100))
// console.log(numSubarrayProductLessThanK([1,2,3],0))


var RecentCounter = function() {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// let obj = new RecentCounter();
// console.log(obj.ping(1));
// console.log(obj.ping(100));
// console.log(obj.ping(3001));
// console.log(obj.ping(3002));


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.map = new Map();
  for (const num of nums2) {
    this.map.set(num, (this.map.get(num) || 0) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  const num = this.nums2[index];
  this.nums2[index] += val;
  this.map.set(num, this.map.get(num) - 1);
  this.map.set(num + val, (this.map.get(num + val) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let cnt = 0;
  for (const num of this.nums1) {
    cnt += (this.map.get(tot - num) || 0);
  }
  return cnt;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */


/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const set = new Set(bank);
  const visited = new Set();
  const adj = new Map();

  function isNext(gene1, gene2) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
      if (gene1[i] !== gene2[i]) {
        cnt++;
      }
    }
    return cnt === 1;
  }

  for (const gene1 of bank) {
    for (const gene2 of bank) {
      if (gene1 !== gene2 && isNext(gene1, gene2)) {
        if (!adj.has(gene1)) {
          adj.set(gene1, new Set());
        }
        if (!adj.has(gene2)) {
          adj.set(gene2, new Set());
        }
        adj.get(gene1).add(gene2);
        adj.get(gene2).add(gene1);
      }
    }
  }

  if (start === end) {
    return 0;
  }
  if (!set.has(end)) {
    return -1;
  }

  const queue = [];
  visited.add(start);
  for (const gene of bank) {
    if (isNext(start, gene) && !visited.has(gene)) {
      queue.push(gene);
      visited.add(gene);
    }
  }
  let ans = 1;
  while (queue.length) {
    const cnt = queue.length;
    for (let i = 0; i < cnt; i++) {
      const cur = queue.shift();
      if (cur === end) {
        return ans;
      }
      if (adj.has(cur)) {
        for (const next of adj.get(cur)) {
          if (!visited.has(next)) {
            queue.push(next);
            visited.add(next);
          }
        }
      }
    }
    ans++;
  }
  return -1;
};

// console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
// console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]));
// console.log(minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC","AAACCCCC","AACCCCCC"]));
console.log(minMutation("AACCTTGG","AATTCCGG",["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"]))