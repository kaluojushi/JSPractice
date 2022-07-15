/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const MOD = 1e9 + 7;
  const M = transposition([
      [0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0]
  ]);
  const res = fastPow(M, n - 1);
  let ans = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      ans = (ans + res[i][0]) % MOD;
    }
  }
  return ans;

  function transposition(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const res = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        res[j][i] = matrix[i][j];
      }
    }
    return res;
  }

  function multiply(matrixA, matrixB) {
    const m = matrixA.length;
    const n = matrixB[0].length;
    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < matrixA[i].length; k++) {
          res[i][j] = (res[i][j] + matrixA[i][k] * matrixB[k][j]) % MOD;
        }
      }
    }
    return res;
  }

  function fastPow(matrix, n) {
    const m = matrix.length;
    let res = new Array(m).fill(0).map(() => new Array(m).fill(0));
    let cur = matrix;
    for (let i = 0; i < m; i++) {
      res[i][i] = 1;
    }
    for (let i = n; i !== 0; i >>= 1) {
      if (i % 2 === 1) {
        res = multiply(cur, res);
      }
      cur = multiply(cur, cur);
    }
    return res;
  }
};

console.log(countVowelPermutation(144))