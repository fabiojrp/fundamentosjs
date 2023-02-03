var n1 = 123;
var n2 = "123";

console.log(n1 === n2);
//conversão implícita
console.log(n1 == n2);

//conversão explícita
console.log(n1 + Number(n2));