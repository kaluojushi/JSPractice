/**
 * @author MZJ
 * @date 2022-05-08
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  const n = num.length;
  let ans = "";
  for (let i = 0; i < n - 2; i++) {
    if (num[i] === num[i + 1] && num [i] === num[i + 2]) {
      const val = num.substr(i, 3);
      if (val > ans) {
        ans = val;
      }
    }
  }
  return ans;
};

// console.log(largestGoodInteger("6777133339"));


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
  function postOrder(node) {
    if (node) {
      postOrder(node.left);
      postOrder(node.right);
      node.sum = node.val + (node.left ? node.left.sum : 0) + (node.right ? node.right.sum : 0);
      node.cnt = 1 + (node.left ? node.left.cnt : 0) + (node.right ? node.right.cnt : 0);
      if (node.val === Math.floor(node.sum / node.cnt)) {
        ans++;
      }
    }
  }

  let ans = 0;
  postOrder(root);
  return ans;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
  const n = pressedKeys.length;
  const memo1 = [1n, 1n, 2n];
  const memo2 = [1n, 1n, 2n, 4n];
  const MOD = BigInt(1e9 + 7);
  let ch = pressedKeys[0], cnt = 1, ans = 1n;
  for (let i = 1; i <= n; i++) {
    if (pressedKeys[i] && pressedKeys[i] === ch) {
      cnt++;
    } else {
      ans = ans * (ch === "7" || ch === "9" ? getMemo2(cnt) : getMemo1(cnt)) % MOD;
      ch = pressedKeys[i];
      cnt = 1;
    }
  }
  return Number(ans);

  function getMemo1(cnt) {
    if (memo1[cnt]) {
      return memo1[cnt];
    }
    return memo1[cnt] = ((getMemo1(cnt - 3) + getMemo1(cnt - 2)) % MOD + getMemo1(cnt - 1)) % MOD;
  }

  function getMemo2(cnt) {
    if (memo2[cnt]) {
      return memo2[cnt];
    }
    return memo2[cnt] = (((getMemo2(cnt - 4) + getMemo2(cnt - 3)) % MOD + getMemo2(cnt - 2)) % MOD + getMemo2(cnt - 1)) % MOD;
  }
};

// console.log(countTexts("22233"));
// console.log(countTexts("222222222222222222222222222222222222"));
// console.log(countTexts("88888888888888888888888888888999999999999999999999999999994444444444444444444444444444488888888888888888888888888888555555555555555555555555555556666666666666666666666666666666666666666666666666666666666222222222222222222222222222226666666666666666666666666666699999999999999999999999999999888888888888888888888888888885555555555555555555555555555577777777777777777777777777777444444444444444444444444444444444444444444444444444444444433333333333333333333333333333555555555555555555555555555556666666666666666666666666666644444444444444444444444444444999999999999999999999999999996666666666666666666666666666655555555555555555555555555555444444444444444444444444444448888888888888888888888888888855555555555555555555555555555555555555555555555555555555555555555555555555555555555999999999999999555555555555555555555555555554444444444444444444444444444444555"))


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      ans.push(nums[i]);
    }
  }
  return ans;
};

// console.log(findDuplicates([4,3,2,7,8,2,3,1]))


/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const n = s.length;
  let i = 0, j = n;
  const ans = [];
  for (const ch of s) {
    ans.push(ch === 'I' ? i++ : j--);
  }
  ans.push(i);
  return ans;
};

// console.log(diStringMatch("IDID"));
// console.log(diStringMatch("III"));
// console.log(diStringMatch("DDI"));

console.log("8fceb735082b5a529312040b58ea780b".length)
