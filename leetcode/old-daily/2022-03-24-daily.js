/**
 * @author MZJ
 * @date 2022-03-24
 * @description 每日刷题
 * @copyright LeetCode
 */

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  const m = img.length, n = img[0].length;
  const res = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0, count = 0;
      for (let ii = i - 1; ii <= i + 1; ii++) {
        for (let jj = j - 1; jj <= j + 1; jj++) {
          if (ii >= 0 && ii < m && jj >= 0 && jj < n) {
            sum += img[ii][jj];
            count++;
          }
        }
      }
      res[i][j] = Math.floor(sum / count);
    }
  }
  return res;
};

console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]));
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));