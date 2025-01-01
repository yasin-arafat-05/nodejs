

console.log("<--------- Array ------------->");
let colors = ['red','green','blue'];
console.log(colors);

colors.push("yellow1");
console.log(colors);

colors.pop();
console.log(colors);

console.log(colors.length);
console.log(colors[0]);
colors[0] = "red_changed";
console.log(colors);

console.log("");
console.log("<--------- Object (key,object)---------->");

let cars = {
    model : "tesla-Y",
    release_date : 2018,
}

console.log(cars);
console.log();
console.log(cars.model);
console.log(cars.release_date);
