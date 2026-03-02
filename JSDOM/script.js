let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let rc = randomColor();
    let h3 = document.querySelector("h3");
    h3.innerText = rc;
    let div = document.querySelector("div");
    div.style.backgroundColor=rc;

})

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
   
//USE OF THIS 
   btn.addEventListener("click",function(){
    console.dir(this);
    this.style.backgroundColor="pink";    
   })

//FOR OTHER ELEMENTS THIS KEYWORD
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
function changeBackground(){
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}
p.addEventListener("click",changeBackground);
h1.addEventListener("click",changeBackground);
h2.addEventListener("click",changeBackground);

// Keyword Events
let mybtn = document.querySelector("#my-btn");

mybtn.addEventListener("click",function(event){
    console.log(event);
    console.log("Button was clicked");
})
mybtn.addEventListener("dblclick",function(){
    console.log("Button was double clicked");
})

let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("key pressed");
    console.log(event.key);
    console.log(event.code);
})
 



