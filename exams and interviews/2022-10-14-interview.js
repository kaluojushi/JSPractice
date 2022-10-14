/**
 * @author MZJ
 * @date 2022-10-14
 * @description 携程面试
 * @copyright xiecheng
 */

function yanghui(n) {
  let i = 0;
  let row = [1];
  while (i < n) {
    if (i > 0) {
      let temp = [1];
      for (let j = 1; j < row.length; j++) {
        temp.push(row[j - 1] + row[j]);
      }
      temp.push(1);
      row = temp;
    }
    console.log(row.join(' '));
    i++;
  }
}

yanghui(5);