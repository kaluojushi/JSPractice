function binarySearchDefinite(left, right, target) {
  let l = left, r = right;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (mid === target) {
      return mid;
    } else if (mid < target) {
      l = mid + 1;
    } else if (mid > target) {
      r = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearchDefinite(0, 100, 32));


function binarySearchDefiniteOfNums(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val < target) {
      l = mid + 1;
    } else if (val > target) {
      r = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearchDefiniteOfNums([1, 2, 3, 5, 6, 9], 3));
// console.log(binarySearchDefiniteOfNums([1, 2, 3, 5, 6, 9], 8));


function binarySearchLeft(left, right, condition) {
  let l = left, r = right;
  while (l <= r) {	// （1）
    const mid = l + Math.floor((r - l) / 2);
    if (condition(mid)) {
      r = mid - 1;	// （2）
    } else {
      l = mid + 1;	// (3)
    }
  }
  return l <= right ? l : -1;	// （4）
}

// console.log(binarySearchLeft(0, 100, x => x >= 101));


function binarySearchLeftOfNums(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    const val = nums[mid];
    if (val >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return nums[l] >= target ? l : -1;
}

// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 0));
// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 1));
// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 2));
// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 4));
// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 8));
// console.log(binarySearchLeftOfNums([1, 1, 2, 2, 2, 5, 7, 8], 10));


function binarySearchRight(left, right, condition) {
  let l = left, r = right;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (condition(mid)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l - 1 >= left ? l - 1 : -1;
}

// console.log(binarySearchRight(5, 100, x => x <= 5));


function binarySearchRightOfNums(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const val = nums[mid];
    if (val <= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l - 1 >= 0 ? l - 1 : -1;
}

console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 0));
console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 1));
console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 2));
console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 4));
console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 8));
console.log(binarySearchRightOfNums([1, 1, 2, 2, 2, 5, 7, 8], 10));