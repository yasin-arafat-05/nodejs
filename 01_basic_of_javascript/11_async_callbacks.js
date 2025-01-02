
const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer); 
};

const cooking = (customer, callback) => {
    console.log(`cooking for ${customer}`);
    setTimeout(() => {
        console.log("cooking complete.");
        console.log(`order processed for ${customer}`);
        callback(customer); 
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`);
};

// Pass valid functions as callbacks
takeOrder("customer 1", (customer) => {
    cooking(customer, (customer) => {
        completeOrder(customer);
    });
});
console.log("Hello -> Hello1");
console.log("Hello -> Hello2");
console.log("Hello -> Hello3");
console.log("Hello -> Hello4");

/*
If we have so many call back function like: 20 or more 
than we can't undestand this. That's why we promise.
*/


