/*
let JSONres = '{"name": "Trupti Kandalkar","age": 21,"email": "truptikandalkar0@gmail.com","skills": ["HTML", "CSS", "JavaScript", "React"],"isStudent": true}';

console.log(JSONres);

let resultObj = JSON.parse(JSONres);
console.log(resultObj);
*/

/*
// Using Promises
let url = "https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("data1 = ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2 = ",data2.fact);
})
.catch((err)=>{
      console.log("Error - ",err);
})
    */

/*
//redundant code
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
    }
   catch(err){
    console.log("Error - ",err)
   }
}*/


let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;

});

 






//using axios library
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
   catch(err){
    console.log("Error - ",err);
    return "No fact Found";
   }
}