/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const n1 = nums1.length, n2 = nums2.length;
  let left = nums1[0] + nums2[0], right = nums1[n1 - 1] + nums2[n2 - 1];
  let pairSum = right;
  while (left <= right) {
    const mid = (left + right) >> 1;
    let count = 0, start = 0, end = n2 - 1;
    while (start < n1 && end >= 0) {
      if (nums1[start] + nums2[end] > mid) {
        end--;
      } else {
        count += end + 1;
        start++;
      }
    }
    if (count < k) {
      left = mid + 1;
    } else {
      pairSum = mid;
      right = mid - 1;
    }
  }

  const res = [];
  let pos = n2 - 1;
  for (let i = 0; i < n1; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
      pos--;
    }
    for (let j = 0; j <= pos && k > 0; j++, k--) {
      res.push([nums1[i], nums2[j]]);
    }
  }

  pos = n2 - 1;
  for (let i = 0; i < n1 && k > 0; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
      pos--;
    }
    for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] === pairSum; j--, k--) {
      res.push([nums1[i], nums2[pos]]);
    }
  }

  return res;
};