
const hasMeeting = false;


// We can keep our Promises(resolve) or not(rejected)
const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name : "Technical Meeting",
            location : "Google Meet",
            time : "10:40"
        }
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already Scheduled!"))
    }

}
);

const changeSchedule = (meetingDetails) =>{
   return new Promise((resolve,reject)=>{
        const calender = `${meetingDetails.time} is change at 11.00 A.M.`;
        resolve(calender);
    });
} 

// get the result:
meeting
.then((resolve)=>{
    // resolve data
    // joson we got javascript object:)
    console.log(JSON.stringify(resolve));
})
.catch((reject)=>{
    // rejected data
    console.log(reject.message);
})



/*
Many javascript library uses async, That's why we use 
Then and Catch. We will see this when we will make a very big software.
*/
/*
then and catch also work like in async manner. For that we can print 
someting at the end.
*/

console.log("This is asynchoronous block"); // it will print first


// <-------------------- Let's add a new promise ------------------------->

meeting
.then(changeSchedule)
.then((resolve)=>{
    console.log(JSON.stringify(resolve));
})
.catch((reject)=>{
    console.log(reject.message);
})

// we don't need to give multiple .catch() block. If we have 100 then block
// but only one catch block can handle everything.

