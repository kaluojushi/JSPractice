function fun1(s) {
  s = s.replace(/</g, " <").replace(/>/g, "> ");
  const stack = [];
  const arr = s.split(" ");
  console.log(arr)
  for (const item of arr) {
    if (item[0] === "<" && item[item.length - 1] === ">") {
      if (item[1] === "/" && item.replace("/", "") === stack[stack.length - 1]) {
        stack.pop();
      } else if (item[1] !== "/") {
        stack.push(item);
      }
    }
  }
  return stack.length === 0;
}

// console.log(fun1("<h1><h2></h2></h1>"))
// console.log(fun1("test<tit>/<>"));


function fun3(n, m, doors) {
  let first = 0, asc = true;
  for (const door of doors) {
    if (door === "A") {
      first = asc ? (first + 1) % n : (first + n - 1) % n;
    } else if (door === "B") {
      first = asc ? (first + n - 1) % n : (first + 1) % n;
      asc = !asc;
    }
  }
  const ans = [];
  while (ans.length < n) {
    ans.push(first + 1);
    first = asc ? (first + 1) % n : (first + n - 1) % n;
  }
  return ans.join(" ");
}

// console.log(fun3(5, 4, ["A", "A", "B", "A"]))


