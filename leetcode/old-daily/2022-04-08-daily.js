/**
 * @author MZJ
 * @date 2022-04-08
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const queue = [root], ans = [];
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.val)
      if (node.children) {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
    ans.push(level);
  }
  return ans;
};

function Node(val,children) {
  this.val = val;
  this.children = children;
};

// console.log(levelOrder(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])));
// console.log(levelOrder(new Node(1, [new Node(2), new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]), new Node(4, [new Node(8, [new Node(12)])]), new Node(5, [new Node(9, [new Node(13)]), new Node(10)])])));


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  const n = goal.length;
  for (let i = 0; i < n; i++) {
    if (valid(i)) {
      return true;
    }
  }
  return false;

  function valid(i) {
    for (let j = 0; j < n; j++) {
      if (goal[j] !== s[(j + i) % n]) {
        return false;
      }
    }
    return true;
  }
};

// console.log(rotateString("abcde", "cdeba"))


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  const mask = 665772;
  let ans = 0;
  for (let i = left; i <= right; i++) {
    if (1 << countOne(i) & mask) {
      ans++;
    }
  }
  return ans;

  function countOne(num) {
    return num.toString(2).split('0').join("").length;
  }
};

// console.log(countPrimeSetBits(10, 15));


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const n = letters.length;
  let l = 0, r = n - 1;
  if (target >= letters[r]) {
    return letters[0];
  }
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (letters[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return letters[l];
};

// console.log(nextGreatestLetter(["a", "b"], "z"));
// console.log(nextGreatestLetter(["c", "f", "j"], "z"));


/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  while (tx > sx && ty > sy && tx !== ty) {
    if (tx > ty) {
      tx %= ty;
    } else {
      ty %= tx;
    }
  }
  if (tx === sx && ty === sy) {
    return true;
  } else if (tx === sx) {
    return ty > sy && (ty - sy) % tx === 0;
  } else if (ty === sy) {
    return tx > sx && (tx - sx) % ty === 0;
  } else {
    return false;
  }
};

// console.log(reachingPoints(1,1,3,5))
// console.log(reachingPoints(1,1,2,2))
// console.log(reachingPoints(1,1,1,1))


/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  let temp = start ^ goal, ans = 0;
  while (temp) {
    ans++;
    temp &= temp - 1;
  }
  return ans;
};

// console.log(minBitFlips(10, 7))
// console.log(minBitFlips(3, 4))


/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
  const time1 = current.split(":").map(i => Number(i)), time2 = correct.split(":").map(i => Number(i));
  const min1 = time1[0] * 60 + time1[1], min2 = time2[0] * 60 + time2[1];
  let dif = min2 - min1, ans = 0;
  for (const m of [60, 15, 5, 1]) {
    ans += Math.floor(dif / m);
    dif %= m;
  }
  return ans;
};

// console.log(convertTime("02:30", "04:35"))
// console.log(convertTime("11:00", "11:01"))
// console.log(convertTime("02:30", "04:29"))


/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  const n = BigInt(nums.length);
  let ans = 0n, c = 1n;
  for (let i = 0n; i < n; i++) {
    ans = (ans + c * BigInt(nums[i])) % 10n;
    c = c * (n - 1n - i) / (i + 1n);
  }
  return Number(ans);
};

// console.log(triangularSum([1,2,3,4,5]))
// console.log(triangularSum([5]))
// console.log(triangularSum([5,3,5,1,7,2,6,6,4,0,4,6,4,3,1,4,0,8,2,4,3,4,9,0,5,5,0,4,6,0,6,3,4,2,2,7,3,8,1,0,5,3,1,9,0,2,2,5,8,6,2,3,2,3,5,8,5,4,1,2,0,9,3,4,4,4,1,5,1,9,2,0,8,4,3,2,4,1,9,2,4,9,2,0,1,2,3,3,8,6,0,7,3,5,7,7,9,2,5,3,2,3,4,9,3,3,5,3,4,0,7,2,1,2,5,0,5,0,6,9,7,6,5,3,2,9,8,9,4,1,8,4,8,3,7,2,2,0,1,2,3,2,2,5,8,0,1,1,3,3,3,8,4,5,6,2,6,5,7,0,4,6,6,2,2,6,7,6,1,2,7,7,6,0,4,9,9,8,1,8,3,3,5,4,5,0,9,4,0,8,6,3,7,1,8,3,4,6,6,1]))


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ans = 0;
  while (n) {
    ans++;
    n &= n - 1;
  }
  return ans;
};

console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(-3));