let inp = document.querySelector("input");
let b = document.querySelector("button");
let ul = document.querySelector("ul");

b.addEventListener("click",()=>{
    let l = document.createElement("li");
    l.innerText=inp.value;
    let btn = document.createElement("button");
    btn.innerText="delete";
    btn.classList.add("delete");
    ul.appendChild(l);
    l.appendChild(btn);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
     let listItem = event.target.parentElement;
     listItem.remove(); 
    }
})

/*
let delbtn = document.querySelectorAll(".delete");
for(btn of delbtn){
btn.addEventListener("click",function(){
    let p = this.parentElement;
    p.remove();      
});
}
*/