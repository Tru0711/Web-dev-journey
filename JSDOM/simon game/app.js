let userSeq = [];
let gameSeq = [];

let btns = ["red","green","yellow","blue"];

let started = false;
let level = 0;
let score = 1;


let h = document.querySelector("h3");
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game is started");
        started = true;
         levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function UserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h.innerText = `Level ${level}`;
    //Randon btn choose
 
    let randomIdx = Math.floor(Math.random()* btns.length);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
    
}

function checkAns(idx){
   // console.log("curr level : ",level)
  
   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }else{
    h.innerText = `Game Over ! start again !!Press any key`;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
   }
}

function btnPress(){
    
    let btn = this;
    UserFlash(btn);
 
     let userColor = btn.getAttribute("id");
     userSeq.push(userColor);

     checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}