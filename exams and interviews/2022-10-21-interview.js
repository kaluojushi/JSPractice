/**
 * @author MZJ
 * @date 2022-10-21
 * @description 携程面试
 * @copyright ctrip
 */


// function multiply(a, b) {
//   if (a.length < b.length) {
//     return multiply(b, a);
//   }
//   let ans = "0";
//   for (let i = b.length - 1; i >= 0; i--) {
//     const db = b[i];
//     ans = add(ans, mul(a, db) + "0".repeat(b.length - 1 - i));
//   }
//   return ans;
//
//   function mul(a, d) {
//     const ans = [];
//     let carry = 0;
//     for (let i = a.length - 1; i >= 0; i--) {
//       const da = a[i];
//       const res = Number(da) * Number(d) + carry;
//       ans.push(res % 10);
//       carry = Math.floor(res / 10);
//     }
//     if (carry > 0) {
//       ans.push(carry);
//     }
//     return ans.reverse().join("");
//   }
//
//   function add(a, b) {
//     let i = a.length - 1, j = b.length - 1;
//     const ans = [];
//     let carry = 0;
//     while (i >= 0 || j >= 0) {
//       const da = a[i--] || 0, db = b[j--] || 0, res = Number(da) + Number(db) + carry;
//       ans.push(res % 10);
//       carry = Math.floor(res / 10);
//     }
//     if (carry > 0) {
//       ans.push(carry);
//     }
//     return ans.reverse().join("");
//   }
// }


function multiply(a, b) {
  const m = a.length, n = b.length;
  const ans = new Array(m + n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i + j + 1] += Number(a[i]) * Number(b[j]);
    }
  }
  for (let i = ans.length - 1; i >= 0; i--) {
    if (ans[i] >= 10) {
      const temp = ans[i];
      ans[i] %= 10;
      ans[i - 1] = Math.floor(temp / 10);
    }
  }
  const index = ans.findIndex(x => x !== 0);
  return ans.slice(index).join("");
}

console.log(multiply("123456789", "123456789"));
console.log(multiply("9856356712356", "61356137653"));
console.log(multiply("9856356712356", "0"));