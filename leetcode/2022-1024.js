const nums = [2,2,1024,2];
const opt = {
  '+': 0,
  '-': 0,
  '*': 0,
  '**': 0,
  '//': 1,
  '%': 0,
  '|': 1,
  '&': 0,
  '^': 0,
  '>>': 1,
  '<<': 0,
};

get1024(nums, opt);

function get1024(nums, opt) {
  const opts = [];
  for (const [k, v] of Object.entries(opt)) {
    for (let i = 0; i < Math.min(3, v); i++) {
      opts.push(k);
    }
  }

  function calculate(n1, o, n2) {
    switch (o) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      case '**':
        return n1 ** n2;
      case '//':
        return Math.floor(n1 / n2);
      case '%':
        return n1 % n2;
      case '|':
        return n1 | n2;
      case '&':
        return n1 & n2;
      case '^':
        return n1 ^ n2;
      case '>>':
        return n1 >> n2;
      case '<<':
        return n1 << n2;
    }
  }

  function calculateAll(ns, os) {
    let n1 = ns[0];
    for (let i = 0; i < 3; i++) {
      n1 = calculate(n1, os[i], ns[i + 1]);
    }
    return n1;
  }

  function permutations(arr, length) {
    if (length > arr.length) {
      return [];
    }
    if (length === 1) {
      return arr.map((v) => [v]);
    }
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      const restPermutations = permutations(rest, length - 1);
      for (const p of restPermutations) {
        res.push([arr[i], ...p]);
      }
    }
    return res;
  }

  for (const ns of permutations(nums, 4)) {
    for (const os of permutations(opts, 3)) {
      if (calculateAll(ns, os) === 1024) {
        const ans = [ns[0]];
        for (let i = 0; i < 3; i++) {
          ans.push(os[i], ns[i + 1]);
        }
        console.log(ans.join(' '));
      }
    }
  }
}