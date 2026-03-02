// Arrow function 
const sum = (a,b) => {
    console.log(a+b);
};

const cube = n => {
    console.log(n*n*n);
};

//implicit return 

const mul = (a,b) =>(a*b);

const square = n => (n*n);

//set timeout function
let hello = setTimeout(
    () => {console.log("Hello world")} , 4000
);
clearTimeout(hello);
//ser time interval function
let wel = setInterval(
   ()=>{console.log("Apna college")} , 2000
);
clearInterval(wel);

// 'this' with arrow function
let student ={
    name : "Trupti",
    marks : 87,
    props : this , 

    getName : function(){
        console.log(this);
        return this.name;
    },

    getMarks : ()=>{
        console.log(this);
        return this.marks;
    }
};