const str = "eai-sess=30bpcxxxxxxx56l4uga4551"
const reg = /eai\-sess=[a-z0-9]{26}/;
console.log(reg.test(str));
