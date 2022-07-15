function shellSort(arr) {
  const final = [...arr], n = arr.length;
  let increment = n;
  while (true) {
    increment = Math.floor(increment / 2);
    for (let k = 0; k < increment; k++) {
      for (let i = k + increment; i < n; i += increment) {
        for (let j = i; j > k; j -= increment) {
          if (final[j - increment] > final[j]) {
            [final[j - increment], final[j]] = [final[j], final[j - increment]];
          } else {
            break;
          }
        }
      }
    }
    if (increment === 1) {
      break;
    }
  }
  return final;
}

let nums1 = [40, 100, 1, 5, 25, 10];
let nums2 = [42, 20, 17, 13, 28, 14, 23, 15];
let nums3 = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

// console.log(shellSort(nums1));

function binSort(arr) {
  const final = [...arr], n = arr.length;
  const min = Math.min(...final), max = Math.max(...final);
  const count = new Array(Math.max(max - min + 1)).fill(0);
  for (const num of final) {
    count[num - min]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  const temp = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    count[final[i] - min]--;
    temp[count[final[i] - min]] = final[i];
  }
  for (let i = 0; i < n; i++) {
    final[i] = temp[i];
  }
  return final;
}

console.log(binSort(nums3))