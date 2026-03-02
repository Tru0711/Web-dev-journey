//practice 
const square = (n) => (n*n);
// HW 5 times
let id = setInterval(
        ()=>{console.log("Hello World")} , 2000
);
clearInterval(id);
setTimeout(
 ()=>{clearInterval(id)},10000
);

//practice one
let arr =[3,3,3];
let sum = 0;
let a;
const avg = (arr)=>{
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
     a = sum/arr.length;
     console.log(a);
}

//practice two
const isEven = n =>{
    if(n%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}

//OP practice three
const object ={
    message : "Hello , world",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);

//Op practice four
let length = 4;
function callback(){
    console.log(this.length);
}
const object1 ={
    length :5,
    method(callback){
        callback();
    },
};
object1.method(callback,1,2);