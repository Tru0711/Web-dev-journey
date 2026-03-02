let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",(event)=>{
    console.log("div was clicked");
    event.target.style.backgroundColor="yellow";
})
ul.addEventListener("click",()=>{
    console.log("ul was clicked");
})
for(li of lis){
    li.addEventListener("click",()=>{
    console.log("lis was clicked");
})
}