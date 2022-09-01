/***
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 * 示例 1:
 * 输入: "book" 输出: "oobk"
 * 解释: 'o'出现两次，'b'和'k'都只出现一次。
 * 因此'o'必须出现在'b'和'k'之前。此外，"ookb"也是一个有效的答案。
 * 示例 2:
 * 输入: "cacaca" 输出: "cccaaa"
 * 解释: 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。 注意"cacaca"是不正确的，因为相同的字母必须放在一起。
 */

function fun(str) {
  const cnt = new Array(26).fill(0).map((v, i) => [i, 0]);
  for (const ch of str) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)][1]++;
  }
  cnt.sort((a, b) => b[1] - a[1]);
  const ans = [];
  for (const [ch, c] of cnt) {
    if (c === 0) {
      break;
    }
    for (let i = 0; i < c; i++) {
      ans.push(String.fromCharCode(ch + 'a'.charCodeAt(0)));
    }
  }
  return ans.join("");
}

console.log(fun("book"));
console.log(fun("cacaca"));