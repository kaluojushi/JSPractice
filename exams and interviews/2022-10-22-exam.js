/**
 * @author MZJ
 * @date 2022-10-22
 * @description 58笔试
 * @copyright 58
 */


function reverseString(s) {
  return s.reduce((ans, ch) => {
    ans.unshift(ch);
    return ans;
  }, []);
}

// console.log(reverseString(['h', 'e', 'l', 'l', 'o']));


function filterMaxStr( str ) {
  const n = str.length;
  const map = new Map();
  let start = 0, max = 0, maxStart = 0;
  for (let i = 0; i < n; i++) {
    if (map.has(str[i])) {
      start = map.get(str[i]) + 1;  // 更新当前串的起始位置
    }
    map.set(str[i], i); // 更新ch的最新位置
    if (max < i - start + 1) {
      max = i - start + 1;
      maxStart = start;
    }
  }
  return str.slice(maxStart, maxStart + max);
}

// console.log(filterMaxStr("qwertezxc"));
// console.log(filterMaxStr("abcdeabc"));


function delivery( order ) {
  const n = order.length;
  order.sort((a, b) => a[1] - b[1]).unshift([0, 0]);
  let preY = 0, level = 1, maxY = 0;
  const maxX = [0], minX = [0];
  for (let i = 0; i < n + 1; i++) {
    const [x, y] = order[i];
    if (preY !== y) {
      level++;
      maxX.push(-Number.MAX_VALUE);
      minX.push(Number.MAX_VALUE);
      preY = y;
    }
    maxX[maxX.length - 1] = Math.max(maxX[maxX.length - 1], x);
    minX[minX.length - 1] = Math.min(minX[minX.length - 1], x);
    maxY = y;
  }
  const dp = new Array(level).fill(0).map(() => [0, 0]);
  dp[0][0] = Math.abs(maxX[0]) + maxX[0] - minX[0];
  dp[0][1] = Math.abs(minX[0]) + maxX[0] - minX[0];
  for (let i = 1; i < level; i++) {
    dp[i][0] = Math.min(dp[i - 1][0] + Math.abs(maxX[i] - minX[i - 1]), dp[i - 1][1] + Math.abs(maxX[i] - maxX[i - 1])) + maxX[i] - minX[i];
    dp[i][1] = Math.min(dp[i - 1][0] + Math.abs(minX[i] - minX[i - 1]), dp[i - 1][1] + Math.abs(minX[i] - maxX[i - 1])) + maxX[i] - minX[i];
  }
  return Math.min(dp[level - 1][0], dp[level - 1][1]) + maxY;
}

console.log(delivery([[1,1], [1,2], [2,2], [1,3], [3,3]]));
console.log(delivery([[1,0], [-1,0]]));
console.log(delivery([[1,1], [2,2]]));
