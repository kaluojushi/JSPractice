function fun(M, sources, require) {
  const N = require[0];
  if (require[1] === 1) {
    sources.sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else if (a[2] !== b[2]) {
        return a[2] - b[2];
      } else {
        return a[0] - b[0];
      }
    });
  } else if (require[1] === 2) {
    sources.sort((a, b) => {
      if (a[2] !== b[2]) {
        return a[2] - b[2];
      } else if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });
  }
  const ans = [];
  for (const source of sources) {
    if (ans.length < N) {
      if (source[1] >= require[2] && source[2] >= require[3] && (source[3] === require[4] || require[4] === 9) && (source[4] === require[5] || require[5] === 2)) {
        ans.push(source[0]);
      }
    } else {
      break;
    }
  }
  ans.sort((a, b) => a - b);
  console.log(ans.reduce((str, i) => str + " " + i, "" + ans.length));
}

// fun(6, [
//     [0, 2, 200, 0, 1],
//     [1, 4, 330, 2, 1],
//     [2, 3, 400, 3, 1],
//     [3, 3, 330, 1, 1],
//     [4, 3, 320, 8, 1],
//     [5, 3, 330, 0, 1]
// ], [3, 2, 3, 300, 9, 2])


function fun2(N, time) {
  const dp = new Array(N + 1).fill(0);
  const preMax = new Array(N + 1).fill(0);
  time.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]);
  for (let i = 0; i < N; i++) {
    let t = time[i][0];
    dp[t] = Math.max(dp[t], preMax[t - 1] + time[i][1]);
    preMax[t] = Math.max(preMax[t], preMax[t - 1] + time[i][1]);
    if (t >= 2) {
      preMax[t - 1] = Math.max(preMax[t - 1], preMax[t - 2] + time[i][1]);
    }
  }
  let i = N;
  while (dp[i] === 0) {
    i--;
  }
  console.log(dp[i]);
}


// fun2(4, [[1, 6], [1, 7], [2, 15], [2, 20]]);
// fun2(3, [[1, 6], [1, 7], [2, 20]]);
// fun2(6, [[1, 6], [1, 7], [2, 15], [2, 20], [3, 100], [3, 50]])
// fun2(7, [[1, 6], [1, 7], [3, 2], [3, 1], [2, 4], [2, 5], [6, 1]])


function fun3(n, candies) {
  class PriorityQueue {
    constructor(compare = (a, b) => a > b) {
      this.queue = [];
      this.size = 0;
      this.compare = compare;
    }

    peek() {
      return this.size === 0 ? null : this.queue[0];
    }

    poll() {
      if (this.size === 0) {
        return null;
      }
      this._swap(0, --this.size);
      this._shiftDown(0);
      return this.queue.pop();
    }

    offer(val) {
      this.queue.push(val);
      this._shiftUp(this.size++);
    }

    _parent(index) {
      return index - 1 >> 1;
    }

    _child(index) {
      return (index << 1) + 1;
    }

    _shiftDown(index) {
      while (this._child(index) < this.size) {
        let child = this._child(index);
        if (child + 1 < this.size && this.compare(this.queue[child + 1], this.queue[child])) {
          child = child + 1;
        }
        if (this.compare(this.queue[index], this.queue[child])) {
          break;
        }
        this._swap(index, child);
        index = child;
      }
    }

    _shiftUp(index) {
      while (this._parent(index) >= 0) {
        let parent = this._parent(index);
        if (this.compare(this.queue[parent], this.queue[index])) {
          break;
        }
        this._swap(index, parent);
        index = parent;
      }
    }

    _swap(a, b) {
      [this.queue[a], this.queue[b]] = [this.queue[b], this.queue[a]];
    }
  }

  const sum = candies.reduce((sum, i) => sum + i, 0);
  if (sum % 2) {
    return -1;
  }
  const half = sum / 2;

  const pq = new PriorityQueue();
  for(const candy of candies) {
    pq.offer(candy);
  }
  if (pq.peek() > half) {
    return -1;
  }
  let ans = [], cnt = 0;
  while (cnt <= half) {

  }
}

fun3(5, [7,4,5,3,3])