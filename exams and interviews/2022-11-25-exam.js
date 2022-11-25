/**
 * @author MZJ
 * @date 2022-11-25
 * @description 高途笔试
 * @copyright gaotu
 */


function printQuintupling( end ) {
  let x = 5;
  const ans = [];
  while (x <= end) {
    ans.push(x);
    x += 5;
  }
  return ans;
}


function isValid( s ) {
  const map = { ')': '(', ']': '[', '}': '{' };
  const st = [];
  for (const ch of s) {
    if (ch in map && st.length > 0 && st[st.length - 1] === map[ch]) {
      st.pop();
    } else {
      st.push(ch);
    }
  }
  return st.length === 0;
}


function numFormat( num ) {
  const [int, float] = String(num).split(".");
  const digits = int.split("").reverse();
  const ints = digits.reduce((res, d, i) => res.concat(d, (i % 3 === 2 && i < int.length - 1 ? "," : "")), []).reverse();
  return ints.join("") + (float ? "." + float : "");
}

console.log(numFormat(12345))
console.log(numFormat(123456))
console.log(numFormat(1234567))
console.log(numFormat(123456.789123))