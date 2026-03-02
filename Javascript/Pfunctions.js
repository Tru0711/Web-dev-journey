//Practice one
function largerElement(arr,max){
       let maximum = [];
       for(let i=0; i < arr.length ; i++){
        if(arr[i]>max){
          console.log(arr[i]);
        }
       }
}
let a = [5,6,2,1,8];
largerElement(a,2);

// practice two
function uniqueChracter(str){
        let unique = [];
        for(let i = 1 ;i< str.length;i++){
            if(!unique.includes(str.charAt(i))){
                unique+= str.charAt(i);
            }
        }
        return unique;
}
let s = "aaaaaaaggggghhhhhhhdf";
console.log(uniqueChracter(s));


function longest(country){
  let longest = "";
  for(let i = 0 ; i<country.length ; i++){
    if(country[i].length > longest.length){
      longest = country[i];
    }
  }
  return longest;
}
let coun = ["australia","trupti","kandalkar"];
console.log(longest(coun));

function noOfVowel(str){
  let count = 0;
  for(let i=0 ; i<str.length ; i++){
    if(str.charAt(i)=="a" ||str.charAt(i)=="e" ||str.charAt(i)=="i" ||str.charAt(i)=="o" ||str.charAt(i)=="u" ||
      str.charAt(i)=="A" ||str.charAt(i)=="E" ||str.charAt(i)=="I" ||str.charAt(i)=="O" ||str.charAt(i)=="U"){
        count++;
      }
  }
  return count;
}
console.log(noOfVowel("dsfgabhgebrbtiu"));