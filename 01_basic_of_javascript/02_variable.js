
let a = "yasin";
var b = 12;
const c = 15;

console.log(a);
console.log(b);


// <- let is a blocked scoped: -> 
{
    let a = "yasin arafat";
    console.log(a);
}

console.log("");
console.log(a);


// <- we can't change constant value: -> 
console.log("Can't change const value:D) ")
c = 16;

