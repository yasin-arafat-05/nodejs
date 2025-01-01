
// <--------- regular funciton ---->

function add(a,b){
    return a+b;
}

function bool(a){
    a = false;
    return a;
}

function float(a){
    a = 12.666;
    return a;
}

console.log("<--------- regular function ----------> ");
console.log(add(23,23));
console.log(bool(true));
console.log(float(12.2334));

// <----------- Arrowed function ------------->
console.log("<--------- Arrowed Function ------------->");

const subtranction = (a,b) => a-b;
console.log(subtranction(34,30));

let addition = (a,b,c,d) => a+b-c+d;
console.log(addition(5,10,5,10));



// <--------------- Anonymous Function ----------->
console.log("<----------- Anonymous Function ------------>");
