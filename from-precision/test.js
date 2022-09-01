global.name = "bytedance";
function A() {
  console.log(age);
  this.name = 123;
  var age = 2;
  console.log(this.name)
  console.log(this.age);
}
A.prototype.getA = function(){
  console.log(this.name);
  console.log(this);
}
let a = new A();
let funA = a.getA;
funA();

let company = {address: '123', getThis() {return () => this}};
let c1 = Object.create(company);
console.log(c1.getThis()())


async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')