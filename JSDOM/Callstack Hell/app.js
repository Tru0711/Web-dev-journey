let h1 = document.querySelector("h1");
/*
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
     h1.style.color = color; 
     if(nextColorChange) nextColorChange();  
    },delay);
}

changeColor("red",2000,()=>{
    changeColor("yellow",2000,()=>{
        changeColor("orange",2000);
    })
})
    */

//Above optimized code using promises

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color = color; 
        resolve("color changed");
        },delay)
    })
}

changeColor("red",2000)
.then(()=>{
    console.log("Red color applied");
    return changeColor("green",2000);
})
.then(()=>{
    console.log("Green color applied");
    return changeColor("yellow",2000);
})
.then(()=>{
    console.log("Yellow color applied");
    return changeColor("blue",2000);
})






/*
//METHOD 2
function changeColor(color,delay){
    setTimeout(()=>{
     h1.style.color = color;   
    },delay);
}

changeColor("pink",2000);
changeColor("yellow",4000);
changeColor("purple",8000);
*/

/*
//Method 1
setTimeout(()=>{
   h1.style.color="red";
},2000);

setTimeout(()=>{
   h1.style.color="orange";
},4000);

setTimeout(()=>{
   h1.style.color="green";
},8000);

*/