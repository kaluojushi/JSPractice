/**
 * @author MZJ
 * @date 2022-03-19
 * @description 双周赛
 * @copyright LeetCode
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const cnt of map.values()) {
    if (cnt % 2) {
      return false;
    }
  }
  return true;
};

// console.log(divideArray([3,2,3,2,2,2]))
// console.log(divideArray([1,2,3,4]))


/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
  const ch1 = pattern[0], ch2 = pattern[1];
  let cnt1 = 0, cnt2 = 0;
  const preCh1 = [];
  for (const ch of text) {
    if (ch === ch2) {
      cnt2++;
      preCh1.push(cnt1);
    }
    if (ch === ch1) {
      cnt1++;
    }
  }
  const before = preCh1.reduce((sum, p) => sum + p, 0);
  return before + Math.max(cnt1, cnt2);
};

// console.log(maximumSubsequenceCount("abdcdbc", "ac"));
// console.log(maximumSubsequenceCount("aabb", "ab"));

// console.log(maximumSubsequenceCount("vnedkpkkyxelxqptfwuzcjhqmwagvrglkeivowvbjdoyydnjrqrqejoyptzoklaxcjxbrrfmpdxckfjzahparhpanwqfjrpbslsyiwbldnpjqishlsuagevjmiyktgofvnyncizswldwnngnkifmaxbmospdeslxirofgqouaapfgltgqxdhurxljcepdpndqqgfwkfiqrwuwxfamciyweehktaegynfumwnhrgrhcluenpnoieqdivznrjljcotysnlylyswvdlkgsvrotavnkifwmnvgagjykxgwaimavqsxuitknmbxppgzfwtjdvegapcplreokicxcsbdrsyfpustpxxssnouifkypwqrywprjlyddrggkcglbgcrbihgpxxosmejchmzkydhquevpschkpyulqxgduqkqgwnsowxrmgqbmltrltzqmmpjilpfxocflpkwithsjlljxdygfvstvwqsyxlkknmgpppupgjvfgmxnwmvrfuwcrsadomyddazlonjyjdeswwznkaeaasyvurpgyvjsiltiykwquesfjmuswjlrphsdthmuqkrhynmqnfqdlwnwesdmiiqvcpingbcgcsvqmsmskesrajqwmgtdoktreqssutpudfykriqhblntfabspbeddpdkownehqszbmddizdgtqmobirwbopmoqzwydnpqnvkwadajbecmajilzkfwjnpfyamudpppuxhlcngkign",
// "rr"))


/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  let sum = 0;
  const pq = new PriorityQueue();
  for (const num of nums) {
    sum += num;
    pq.offer(num);
  }
  const sumHalf = sum / 2;
  let ans = 0;
  while (sum > sumHalf) {
    const half = pq.poll() / 2;
    sum -= half;
    pq.offer(half);
    ans++;
  }
  return ans;
};

class PriorityQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
    this.compare = (a, b) => a > b;
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

// console.log(halveArray([5,19,8,1]));
// console.log(halveArray([3,8,20]));


/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  const n = floor.length;
  const pq = new PriorityQueue();
  let len = 0;
  for (let i = 0; i < n; i++) {
    len += Number(floor[i]);
    if (floor[i] === '0' || i === n - 1) {
      if (len > 0) {
        pq.offer(len);
      }
      len = 0;
    }
  }
  while (pq.size && numCarpets) {
    let top = pq.poll();
    if (top >= carpetLen) {
      top -= carpetLen;
    } else {
      top = 0;
    }
    numCarpets--;
    if (top > 0) {
      pq.offer(top);
    }
  }
  let ans = 0;
  while (pq.size) {
    ans += pq.poll();
  }
  return ans;
};

// console.log(minimumWhiteTiles("10110101", 2, 2))
// console.log(minimumWhiteTiles("11111", 2, 3))
console.log(minimumWhiteTiles("0010000101101001111010010101110001100111000010100011111011100101011000111101001000010011010",
22,
19))