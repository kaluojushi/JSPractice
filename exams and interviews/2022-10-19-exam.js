/**
 * @author MZJ
 * @date 2022-10-19
 * @description 蚂蚁笔试
 * @copyright ant
 */


function findParentDirectory(paths) {
  const ans = [];
  const dirs = paths.map(path => path.split('/'));
  for (let i = 0; i < dirs[0].length; i++) {
    const dir = dirs[0][i];
    if (dirs.every(d => d[i] === dir)) {
      ans.push(dir);
    } else {
      break;
    }
  }
  return ans.length > 1 ? ans.join('/') : null;
}

// console.log(findParentDirectory(['/home/admin/vue', '/home/admin/react']));
// console.log(findParentDirectory(['/home/admin/react/src', '/home/admin/react', '/home/admin/react/src/index.js',]));
// console.log(findParentDirectory(['/usr/bin', '/etc/config']));
// console.log(findParentDirectory(['/usr/bin', '/usr/bin', '/usr/bin']));


class LRUCache {
  /**
   *
   * @param capacity 容量
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}

// const aLRU = new LRUCache(2);
// aLRU.put(1, 1);
// aLRU.put(2, 2);
// console.log(aLRU.get(1)); // 返回  1
// aLRU.put(3, 3); // 该操作会使得密钥 2 作废
// console.log(aLRU.get(2)); // 返回 -1 (未找到)


function myCalculator(num) {
  return {
    num: num,
    abs() {
      this.num = Math.abs(this.num);
      return this;
    },
    sqr() {
      this.num = this.num * this.num;
      return this;
    },
    pow(n) {
      this.num = Math.pow(this.num, n);
      return this;
    },
    getValue() {
      return this.num;
    }
  }
}

// console.log(myCalculator(-2).abs().sqr().pow(3).getValue());


async function parallel(tasks, concurrency) {
  const ans = { resolved: [], rejected: [] };
  const executing = new Set();
  for (const task of tasks) {
    const p = Promise.resolve(task());
    const e = p
        .then((res) => {
          executing.delete(e);
          ans.resolved.push(res);
        })
        .catch((err) => {
          executing.delete(e);
          ans.rejected.push(err);
        });
    executing.add(e);
    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }
  while (executing.size) {
    await Promise.race(executing);
  }
  console.log(executing);
  console.log(ans);
  return ans;
}

async function doTest() {
  try {
    const tasks = [
      () => new Promise((resolve) => setTimeout(resolve, 1000)),
      () => Promise.resolve('foo'),
      // () => fetch('https://codesandbox.io'),
      () => Promise.reject(new Error('tttttttttttttt')),
      () => 'bar',
      () =>
          new Promise((resolve) => {
            const img = new Image();
            img.src =
                'https://gw.alipayobjects.com/mdn/member_frontWeb/afts/img/A*h7o9Q4g2KiUAAAAAAAAAAABkARQnAQ';
            img.onload = resolve;
            img.width = 0;
            img.height = 0;
            document.body.append(img);
          }),
    ];
    const { resolved, rejected } = await parallel(tasks, 2);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

doTest();