/**
 * @author MZJ
 * @date 2022-05-09
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const ans = [];
  for (const num of nums) {
    const val = Math.abs(num);
    if (nums[val - 1] < 0) {
      ans.push(val);
    } else {
      nums[val - 1] = -nums[val - 1];
    }
  }
  return ans;
};

// console.log(findDuplicates([4,3,2,7,8,2,3,1]));


function _rsa_encrypt(password, exp, mod) {
  let pwd_bytes = [];
  for (const ch of password) {
    let code = ch.charCodeAt(0);
    const st = [];
    do {
      st.push(code & 0xff);
      code >>= 8;
    } while (code);
    pwd_bytes = pwd_bytes.concat(st.reverse());
  }
  let pwd_int = 0n;
  for (let i = 0; i < pwd_bytes.length; i++) {
    pwd_int += BigInt(pwd_bytes[i]);
    if (i < pwd_bytes.length - 1) {
      pwd_int <<= 8n;
    }
  }
  const exp_int = BigInt("0x" + exp);
  const mod_int = BigInt("0x" + mod);
  let result_int = pwd_int % mod_int;
  for (let i = 1n; i < exp_int; i++) {
    result_int = result_int * pwd_int % mod_int;
  }
  return result_int.toString(16);
}

// console.log(_rsa_encrypt('Jxj962464', '10001', 'c552191f9a4a88ec154357b61e6bcb8686a6606c017f2ece3c2075e44f3d76510f3ff24aa7c34d15531ff9399649916334d63ec428a381d483f0fa8c07c63dd1'))


function getSign(timestamp, path, params) {
  const I = "c640ca392cd45fb3a55b00a63a86c618";
  let c = I + path;
  for (const [key, value] of Object.entries(params).sort((a, b) => a[0].localeCompare(b[0]))) {
    c += key + value.toString();
  }
  c += timestamp + " " + I;
  return c;
}

// console.log(getSign("1652103743138", "/api/login/", {"nocache": "1652103743138","venueSiteId": "42","searchDate": "2022-05-08",}))


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const cnt = new Array(10).fill(0);
  for (const digit of digits) {
    cnt[digit]++;
  }
  const ans = [];
  for (let i = 100; i <= 999; i += 2) {
    const cnt_i = new Array(10).fill(0);
    for (const digit of [Math.floor(i / 100), Math.floor(i / 10) % 10, i % 10]) {
      cnt_i[digit]++;
    }
    if (cnt_i.every((v, i) => v <= cnt[i])) {
      ans.push(i);
    }
  }
  return ans;
};

// console.log(findEvenNumbers([2,1,3,0]));
// console.log(findEvenNumbers([2,2,8,8,2]));
// console.log(findEvenNumbers([3,7,5]));


/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  let ans = 0;
  for (const str of patterns) {
    if (word.includes(str)) {
      ans++;
    }
  }
  return ans;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const values = [];
  preOrder(root);
  return values.join(',');

  function preOrder(node) {
    if (node) {
      values.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) {
    return null;
  }
  const values = data.split(',').map(i => Number(i));
  return getNode(0, 1e4);

  function getNode(lower, upper) {
    if (values.length === 0 || values[0] < lower || values[0] > upper) {
      return null;
    }
    const val = values.shift();
    const node = new TreeNode(val);
    node.left = getNode(lower, val);
    node.right = getNode(val, upper);
    return node;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// console.log(serialize(tree1));
// console.log(deserialize(serialize(tree1)));

const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3, null, new TreeNode(5)));
// console.log(serialize(tree2));
// console.log(deserialize(serialize(tree2)));

const tree3 = null;
// console.log(serialize(tree3));
// console.log(deserialize(serialize(tree3)));


/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans ^= start + 2 * i;
  }
  return ans;
};

// console.log(xorOperation(10, 5))


/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let ans = 0;
  const m = strs.length, n = strs[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        ans++;
        break;
      }
    }
  }
  return ans;
};

console.log(minDeletionSize(["cba","daf","ghi"]))
console.log(minDeletionSize(["zyx","wvu","tsr"]))