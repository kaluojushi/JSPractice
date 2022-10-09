/**
 * @author MZJ
 * @date 2022-10-09
 * @description 中望笔试
 * @copyright zhongwang
 */


function containsRepeatingLetter(str) {
  let pre = "";
  for (const ch of str) {
    if (isLetter(ch) && ch === pre) {
      return true;
    }
    pre = ch;
  }
  return false;
}

function isLetter(ch) {
  return ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
}


function cssStyle2DomStyle(sName) {
  const items = sName.split('-').filter(s => s.length > 0);
  return items.map((s, i) => i > 0 ? String.fromCharCode(s.charCodeAt(0) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0))) + s.slice(1) : s).join("");
}

// console.log(cssStyle2DomStyle("-webkit-border-image"));
// console.log(cssStyle2DomStyle("font-size"));


const _flatten = arr => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(..._flatten(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

// console.log(_flatten([1, [2, [3, [4]]]]));


class Human {
  constructor(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
  }
  getName() {
    return this.name;
  }

}

class Chinese extends Human {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}


class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(name, fn) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(fn);
  }
  emit(name, ...args) {
    if (this.listeners[name]) {
      this.listeners[name].forEach(fn => fn(...args));
    }
  }
}


const n = parseInt(readline());
const points = [];
for (let i = 0; i < n; i++) {
  points.push(readline().split(',').map(Number));
}
const p = readline().split(',').map(Number);
console.log(check(n, points, p));

function check(n, points, p) {
  const p1 = p;
  const p2 = [1e10, p1[1]];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    const p3 = points[i], p4 = points[i + 1] || points[0];
    if (isCross(p1, p2, p3, p4)) {
      cnt++;
    }
  }
  return cnt % 2 === 1;
}

function isCross(p1, p2, p3, p4) {
  const v1 = [p1[0] - p3[0], p1[1] - p3[1]];
  const v2 = [p2[0] - p3[0], p2[1] - p3[1]];
  const v3 = [p4[0] - p3[0], p4[1] - p3[1]];
  const v11 = vectorMultiply(v1, v3) * vectorMultiply(v2, v3);
  const v4 = [p3[0] - p1[0], p3[1] - p1[1]];
  const v5 = [p4[0] - p1[0], p4[1] - p1[1]];
  const v6 = [p2[0] - p1[0], p2[1] - p1[1]];
  const v22 = vectorMultiply(v1, v3) * vectorMultiply(v2, v3);
  return v11 <= 0 && v22 <= 0;
}

function vectorMultiply(v1, v2) {
  return v1[0] * v2[1] - v1[1] * v2[0];
}