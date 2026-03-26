
// //WITHOUT PROMISES

// function saveDatatoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
 
//     /*
//     //WITHOUT PASSING CALL BACKS
//     if(internetSpeed>4){
//         console.log("Your Data Save at Db : " , data);
//     }else{
//         console.log("weak connection . please check internet connection");
//     }
//     */
//    if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// /*
// // Call back hell occured at belowed code 
// saveDatatoDb(
//     "Apna college",//only one data
//     ()=>{
//         console.log("Success : Your Data Saved at Db"); 
//         //to save another one data
//         saveDatatoDb("Hello world",()=>{
//             console.log("Success2 : Data2 saved");
//             // to sav e third data
//             saveDatatoDb("This is Third",()=>{
//             console.log("Success3 : Data3 saved");
            
//         },
//            ()=>{
//             console.log("Failure3 : Weak connection");
//            }
//            )
//         },
//            ()=>{
//             console.log("Failure2 : Weak connection");
//            }
//            )
//     },
//     ()=>{
//         console.log("Failure : weak connection . please check internet connection");
//     }
// )
// */


function saveDatatoDb(data){
     let internetSpeed = Math.floor(Math.random()*10)+1;
     return new Promise((success,failure)=>{
         let internetSpeed = Math.floor(Math.random()*10)+1;
         if(internetSpeed>4){
            success("Success : Data saved to Db");
         }
         else{
            failure("Failure Occur weak connection");
         }

     })
}
/*
WIHOUT MAKING A VARIABLE WE CAN USE DIRECTLY FUNCTION
let request = saveDatatoDb("Apna College"); // promise object

request.then(()=>{
    console.log("promise was Resollved");
})
.catch(()=>{
    console.log("Promise was Rejected");
})

*/
/*
saveDatatoDb("Apna College")
.then(()=>{
    console.log("promise was Resollved");
})
.catch(()=>{
    console.log("Promise was Rejected");
})
    */

//Promises chainings
/*
   saveDatatoDb("Apna College")
   .then(()=>{
    console.log("Data1 saved");
    saveDatatoDb("Hello world")
    .then(()=>{
        console.log("Data2 saved");
    })
    })
   .catch(()=>{
    console.log("Promise was Rejected");
    })
*/
//IMPROVED VERSION OF ABOVE 
 saveDatatoDb("Apna College")
   .then(()=>{
    console.log("Data1 saved");
    return saveDatatoDb("Hello world");
    })
    .then(()=>{
    console.log("Data2 saved");
    return saveDatatoDb("Trupti");
    })
    .then(()=>{
    console.log("Data3 saved");
  
    })

   .catch(()=>{
    console.log("Promise was Rejected");
    })