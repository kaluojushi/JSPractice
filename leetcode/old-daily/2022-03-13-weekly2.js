/**
 * @author MZJ
 * @date 2022-03-13
 * @description 中国银联专场竞赛
 * @copyright LeetCode
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let node = head;
  const nums = [];
  while (node) {
    nums.push(node.val);
    node = node.next;
  }
  const n = nums.length;
  let i = 0, j = n - 1, cnt = 0;
  while (i < j) {
    if (nums[i] !== nums[j] && cnt <= 1) {
      if (nums[i] === nums [j - 1]) {
        j--;
        cnt++;
      } else if (nums[i + 1] === nums[j]) {
        i++;
        cnt++;
      } else {
        return false;
      }
    } else {
      i++;
      j--;
    }
  }
  return cnt <= 1;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(1)))))));
// console.log(isPalindrome(new ListNode(5, new ListNode(1, new ListNode(8, new ListNode(8, new ListNode(1, new ListNode(5))))))));
// console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));


var DiscountSystem = function() {
  this.actMap = new Map();
  this.userMap = new Map();
};

/**
 * @param {number} actId
 * @param {number} priceLimit
 * @param {number} discount
 * @param {number} number
 * @param {number} userLimit
 * @return {void}
 */
DiscountSystem.prototype.addActivity = function(actId, priceLimit, discount, number, userLimit) {
  this.actMap.set(actId, {
    priceLimit: priceLimit,
    discount: discount,
    number: number,
    userLimit: userLimit
  });
};

/**
 * @param {number} actId
 * @return {void}
 */
DiscountSystem.prototype.removeActivity = function(actId) {
  this.actMap.delete(actId);
};

/**
 * @param {number} userId
 * @param {number} cost
 * @return {number}
 */
DiscountSystem.prototype.consume = function(userId, cost) {
  if (!this.userMap.has(userId)) {
    this.userMap.set(userId, {});
  }
  let res = cost, resActId = -1;
  for (const [actId, item] of this.actMap) {
    if (item.number > 0 && (this.userMap.get(userId)[actId] || 0) < item.userLimit && cost >= item.priceLimit) {
      if (cost - item.discount < res) {
        res = cost - item.discount;
        resActId = actId;
      }
    }
  }
  if (this.actMap.has(resActId)) {
    this.actMap.get(resActId).number--;
  }
  this.userMap.get(userId)[resActId] = (this.userMap.get(userId)[resActId] || 0) + 1;
  return res;
};

/**
 * Your DiscountSystem object will be instantiated and called as such:
 * var obj = new DiscountSystem()
 * obj.addActivity(actId,priceLimit,discount,number,userLimit)
 * obj.removeActivity(actId)
 * var param_3 = obj.consume(userId,cost)
 */

// let obj1 = new DiscountSystem();
// obj1.addActivity(1,15,5,7,2);
// console.log(obj1.consume(10, 16));
// obj1.removeActivity(1);
// console.log(obj1.consume(102, 19));
//
// let obj2 = new DiscountSystem();
// obj2.addActivity(1,10,6,3,2);
// obj2.addActivity(2,15,8,8,2);
// console.log(obj2.consume(101, 13));
// obj2.removeActivity(2);
// console.log(obj2.consume(101, 17));
// console.log(obj2.consume(101, 11));
// console.log(obj2.consume(102, 16));
// console.log(obj2.consume(102, 21));


/**
 * @param {number[]} product
 * @param {number} limit
 * @return {number}
 */
var maxInvestment = function(product, limit) {
  const MOD = 1e9 + 7;
  const n = product.length;
  const map = new Map();
  for (const p of product) {
    map.set(p, (map.get(p) || 0) + 1);
  }
  const arr = Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  arr.push([0, 0]);
  let ans = 0;
  for (let i = 0; i < n && limit > 0; i++) {
    const cur = arr[i], next = arr[i + 1];
    if (cur[1] * (cur[0] - next[0]) <= limit) {
      ans += ((cur[0] + next[0] + 1) * (cur[0] - next[0]) / 2) * cur[1];
      ans %= MOD;
      limit -= cur[1] * (cur[0] - next[0]);
      next[1] += cur[1];
    } else {
      const d = Math.floor(limit / cur[1]), l = limit % cur[1];
      ans += ((cur[0] + cur[0] - d + 1) * d / 2) * cur[1];
      ans %= MOD;
      ans += (cur[0] - d) * l % MOD;
      ans %= MOD;
      break;
    }
  }
  return ans;
};

console.log(maxInvestment([4,5,3], 8));
console.log(maxInvestment([2,1,3], 20));
console.log(maxInvestment([20,15,5,3], 25));