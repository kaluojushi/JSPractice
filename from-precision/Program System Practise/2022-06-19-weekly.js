/**
 * @author MZJ
 * @date 2022-06-19
 * @description 周赛
 * @copyright LeetCode
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  let ans = "";
  for (let i = 0; i < 26; i++) {
    const ch1 = String.fromCharCode('a'.charCodeAt(0) + i);
    const ch2 = String.fromCharCode('A'.charCodeAt(0) + i);
    if (s.includes(ch1) && s.includes(ch2)) {
      ans = ch2;
    }
  }
  return ans;
};

// console.log(greatestLetter("lEeTcOdE"));
// console.log(greatestLetter("arRAzFif"));
// console.log(greatestLetter("AbCdEfGhIjK"));


/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
  if (num === 0) {
    return 0;
  }
  if (k === 0 && num % 10 !== 0) {
    return -1;
  }
  let cnt = 0;
  do {
    num -= k;
    cnt++;
  } while (num > 0 && num % 10 !== 0);
  return num >= 0 ? cnt : -1;
};

// console.log(minimumNumbers(58,9));
// console.log(minimumNumbers(37,2));
// console.log(minimumNumbers(0,7));
// console.log(minimumNumbers(10, 8));
// console.log(minimumNumbers(4,0));
// console.log(minimumNumbers(10,0));


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
  const n = s.length;
  const rightZero = new Array(n).fill(0);
  rightZero[n - 1] = s[n - 1] === '0' ? 1 : 0;
  for (let i = n - 2; i >= 0; i--) {
    rightZero[i] = rightZero[i + 1] + (s[i] === '0');
  }
  let zeros = rightZero[0], ones = 0, num = 0n;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '1') {
      num += 1n << BigInt(rightZero[i] + ones);
      if (num <= BigInt(k)) {
        ones++;
      } else {
        break;
      }
    }
  }
  return zeros + ones;
};

console.log(longestSubsequence("1001010", 5));
console.log(longestSubsequence("00101001", 6));
console.log(longestSubsequence("000101010011011001011101111000111111100001011000000100010000111100000011111001000111100111101001111001011101001011011101001011011001111111010011100011110111010000010000010111001001111101100001111",300429827))