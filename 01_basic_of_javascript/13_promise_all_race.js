
// how can we execute two promises parallary 

const promise1 = Promise.resolve("This is Promise1");

const promise2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`This is promise 2`);
        }, 2000);
    })
      


// <- execute both promises seperatly: -> 
// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

// <-- start both promises simultaniously --> 
Promise.all([promise1,promise2]).then(
    (res)=>{console.log(res);});


// <-- get the promise which execute first --->
Promise.race([promise1,promise2]).then(
    (res)=>{
        console.log(res);
    });

