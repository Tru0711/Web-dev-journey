let form = document.querySelector("form");
form.addEventListener("submit", function(event){
     event.preventDefault();
     console.log("form submitted");
});

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
})

let item = document.querySelector("#item");

item.addEventListener("mouseout",(event)=>{
    event.target.style.color = "red";

    setTimeout(()=>{
        event.target.style.color = "blue";
    },1000);
})

