<br>
---

## ১. **ভেরিয়েবলস (Variables)**  
জাভাস্ক্রিপ্টে ভেরিয়েবল তিনটি কী-ওয়ার্ড দিয়ে ডিক্লেয়ার করা যায়: `var`, `let`, এবং `const`। 

### ✨ উদাহরণ:
```javascript
var x = 10; // পুরনো স্টাইল
let y = 20; // ব্লক স্কোপড
const z = 30; // অপরিবর্তনীয়
```

### ✨ **ভেরিয়েবল ব্যবহারে নিয়ম:**
1. **`var`:** এটি গ্লোবাল বা ফাংশন স্কোপড। 
2. **`let`:** এটি ব্লক স্কোপড। ব্লকের বাইরে এক্সেস করা যায় না।  
3. **`const`:** এটি অপরিবর্তনীয়। একবার ভ্যালু সেট করলে তা পরিবর্তন করা যায় না।

```javascript
let age = 25;
if (true) {
  let age = 30; // এই age ভিন্ন
  console.log(age); // Output: 30
}
console.log(age); // Output: 25
```

---

## ২. **টাইপস (Types)**

### ✨ **প্রিমিটিভ ডেটা টাইপস:**
1. **String:** টেক্সট ডেটার জন্য।
2. **Number:** যেকোনো সংখ্যা।
3. **Boolean:** `true` বা `false`।  
4. **Null:** খালি ভ্যালু।  
5. **Undefined:** ডিক্লেয়ার করা হয়েছে কিন্তু ভ্যালু নেই।  
6. **Symbol:** ইউনিক এবং ইম্যুটেবল।  
7. **BigInt:** বড় সংখ্যার জন্য।

### ✨ উদাহরণ:
```javascript
let name = "Rahim"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let data = null; // Null
let notDefined; // Undefined
let largeNumber = 12345678901234567890n; // BigInt
```

---

## ৩. **ফাংশনস (Functions)**  
ফাংশন হলো পুনরায় ব্যবহারযোগ্য কোডের একটি অংশ।

### ✨ **প্রকারভেদ:**
1. **Regular Function:**
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // Output: 15
```

2. **Arrow Function:**
```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // Output: 5
```

3. **Anonymous Function (নামহীন):**
```javascript
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);
```

---

## ৪. **অ্যারেজ এবং অবজেক্ট (Arrays & Objects)**

### **অ্যারেজ (Array):**
অ্যারেজ হল একটি তালিকা যেখানে বিভিন্ন ডেটা টাইপ একসঙ্গে রাখা যায়।  
```javascript
let colors = ["Red", "Green", "Blue"];
console.log(colors[1]); // Output: Green
colors.push("Yellow"); // নতুন আইটেম যোগ
console.log(colors); // Output: ["Red", "Green", "Blue", "Yellow"]
```

### **অবজেক্ট (Object):**
অবজেক্ট হল কী-ভ্যালুর জোড়া।  
```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car.brand); // Output: Toyota
car.color = "White"; // নতুন প্রপার্টি যোগ
console.log(car); // Output: { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'White' }
```

---

## ৫. **লুপস (Loops)**

### ✨ **`for` লুপ:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
// Output: Number: 0, Number: 1 ... Number: 4
```

### ✨ **`while` লুপ:**
```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// Output: 0, 1, 2
```

### ✨ **`forEach` লুপ (অ্যারেজে):**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output: Apple, Banana, Cherry
```

---

## ৬. **স্কোপস (Scopes)**

### ✨ **গ্লোবাল স্কোপ:**
গ্লোবাল স্কোপড ভেরিয়েবল পুরো প্রোগ্রামে এক্সেস করা যায়।
```javascript
let name = "Rahim";
function sayHello() {
  console.log("Hello, " + name);
}
sayHello(); // Output: Hello, Rahim
```

### ✨ **লোকাল স্কোপ:**
লোকাল ভেরিয়েবল শুধুমাত্র ফাংশনের ভিতরে এক্সেস করা যায়।
```javascript
function myFunction() {
  let localVar = "I am local";
  console.log(localVar);
}
myFunction();
// console.log(localVar); // Error: localVar is not defined
```

---

## ৭. **ক্লাসেস (Classes)**

### ✨ **ক্লাস এবং অবজেক্ট তৈরি:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}
let person1 = new Person("Rahim", 25);
person1.greet(); // Output: Hi, I am Rahim and I am 25 years old.
```

---

## ৮. **ইভেন্ট লুপ (Event Loop)**

### ✨ **কীভাবে কাজ করে:**
জাভাস্ক্রিপ্টে একটি "সিঙ্গেল-থ্রেডেড" ইঞ্জিন থাকে, কিন্তু ইভেন্ট লুপ দিয়ে অ্যাসিনক্রোনাস টাস্ক পরিচালনা করা হয়।

### উদাহরণ:
```javascript
console.log("Start");
setTimeout(() => {
  console.log("Async Task");
}, 2000);
console.log("End");
// Output: Start, End, Async Task (২ সেকেন্ড পরে)
```

---

## ৯. **অ্যাসিনক্রোনাস প্রোগ্রামিং এবং কলব্যাকস (Async & Callbacks)**

### ✨ **কলব্যাক:**
```javascript
function loadData(callback) {
  console.log("Loading data...");
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}
loadData((message) => console.log(message)); // Output: Data loaded (২ সেকেন্ড পরে)
```

---

## ১০. **অ্যাসিনক এবং অ্যাওয়েট (Async & Await)**

### ✨ উদাহরণ:
```javascript
async function fetchData() {
  let response = await fetch("https://api.example.com");
  let data = await response.json();
  console.log(data);
}
fetchData();
```

---
