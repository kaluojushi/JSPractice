function setAge1(obj) {
  obj.age = 26;
}
let obj1 = {};
setAge1(obj1);
console.log(obj1.age);

function setAge2(obj) {
  obj.age = 26;
  obj = {};
  obj.age = 36;
}
let obj2 = {};
setAge2(obj2);
console.log(obj2.age);