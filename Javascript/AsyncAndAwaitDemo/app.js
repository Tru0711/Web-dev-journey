/*
// USE OF ASYNC KEYWORD
async function greet(){
    throw "Something went wrong";
    return "Hello";
}
greet()
.then((res)=>{
    console.log("promise was resolved and The result is : ",res);
})
.catch((err)=>{
    console.log("promise was rejected with error : ",err);
})
*/

// USE OF AWAIT KEYWORD
/*
function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    })
}
async function demo(){
   await getNumber();
   await getNumber();
   await getNumber();
   await getNumber();
   await getNumber();
}
*/

//color changing on webpage
//Handling Rejections of await keyword
let body = document.querySelector("body");

function changeBg(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
     
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
                reject("Promise Rejected");
            }
            body.style.backgroundColor = color;
            console.log(`Background is ${color} now`);
            resolve();
        },delay);
    })
}

async function demo(){
    try{
       await changeBg("red",2000);
       await changeBg("pink",2000);
       await changeBg("yellow",2000);
       await changeBg("indigo",2000);
 
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let number = 5;
    console.log(number);
    console.log("The new number is :",number);
  
   
}
