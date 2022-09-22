/**
 * @author MZJ
 * @date 2022-09-22
 * @description 华为面试
 * @copyright huawei
 */

/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 例 1：
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * 示例 2：
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 解释：需要合并 [1] 和 [] 。
 * 合并结果是 [1] 。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

const nums11 = [1, 2, 3, 0, 0, 0], nums12 = [1], nums13 = [1, 2, 5, 9, 0, 0];
merge(nums11, 3, [2, 5, 6], 3)
merge(nums12, 1, [], 0)
merge(nums13, 4, [6, 7], 2)
// console.log(nums11)
// console.log(nums12)
// console.log(nums13)


/**
 * 一套针对重复字符串的缩写规则，连续单个字符会被缩写为“重复次数”+“字符”，例如“AAA”会被缩写为“3A”（单个字符例如“A”会被缩写为“1A”）。
 * 现给两个缩写后的字符串recordsA与recordsB，请对比复原后多少一致的字符（即相同的位置的字符是相同的）。
 * 示例1：recordsA=“2A2B2A3C”，recordsB=“3C2B2A2D”
 * 输出：2
 * 示例2：recordsA=“11A2B3C”，recordsB=“2D5A2B1A3C3B”
 * 输出：6
 * 提示：
 * 1. 0<recordsA.length,recordsB.length<=10000
 * 2. 字符中的数字<=10^6,需要考虑性能
 */

/**
 * @param {string} recordsA
 * @param {string} recordsB
 * @return {number}
 */

// function fun(recordsA, recordsB) {
//   let ans = 0;
//   const arrA = recordsA.replace(/([A-Z])/g, match => match + " ").trim().split(" ");
//   const arrB = recordsB.replace(/([A-Z])/g, match => match + " ").trim().split(" ");
//   const m = arrA.length, n = arrB.length;
//   let i = 0, j = 0;
//   let idxStartA = -1, idxStartB = -1, idxEndA = -1, idxEndB = -1, chA = "", chB = "";
//   let moveA = true, moveB = true;
//   while (i < m && j < n) {
//     const pA = arrA[i], pB = arrB[j];
//     chA = pA[pA.length - 1];
//     chB = pB[pB.length - 1];
//     if (moveA) {
//       idxStartA = idxEndA + 1;
//       idxEndA = idxStartA + Number(pA.slice(0, pA.length - 1)) - 1;
//     }
//     if (moveB) {
//       idxStartB = idxEndB + 1;
//       idxEndB = idxStartB + Number(pB.slice(0, pB.length - 1)) - 1;
//     }
//     if (chA === chB) ans += Math.min(idxEndA, idxEndB) - Math.max(idxStartA, idxStartB) + 1;
//     if (idxEndA > idxEndB) {
//       j++; moveB = true; moveA = false;
//     } else {
//       i++; moveA = true; moveB = false;
//     }
//   }
//   return ans;
// }

console.log(fun("2A2B2A3C", "3C2B2A2D"));
console.log(fun("11A2B3C", "2D5A2B1A3C3B"));
console.log(fun("4A2D", "2B1A2C1D"));