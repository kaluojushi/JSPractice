/**
 * @author MZJ
 * @date 2022-12-01
 * @description 高途面试
 * @copyright gaotu
 */


/**
 * [求两个数组交集]
 * @param  {[number]} nums1
 * @param  {[number]} nums2
 * @return {[number]} [整数数组nums1和nums2的交集]
 */
const fn = (nums1, nums2) => {
  const map1 = new Map(), map2 = new Map();
  let ans = [];
  for (const num of nums1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }
  for (const num of nums2) {
    if (map1.get(num)) {
      ans.push(num);
      map1.set(num, map1.get(num)-1);
    }
    // map2.set(num, (map2.get(num) || 0) + 1);
  }
  // const ans = [];
  // for (const [x, c] of map1) {
  //     map1.set(x, Math.min(c, map2.get(x) || 0));
  //     const c1 = map1.get(x);
  //     for (let i = 0; i < c1; i++) {
  //         ans.push(x);
  //     }
  // }
  return ans;
}

console.log(fn([1,2,3], [1,2,3]))