function add(a,b){
    return a+b;
}

function evenOdd(num){
    if(num%2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
function LengthString(str){
    return str.length;
}
function square(){
    let num = 7;
    return num*num;
}
function person(name){
    return `Name of person is ${name}`;
}
function factorial(num){
    let fact = 1;
    for(let i = 1; i<=num ; i++){
        fact = fact * i;
    }
   console.log(fact);
}
function reverseString(str){
    for(let i= str.length; i >= 0 ; i--){
        let rev;
        rev += str.charAt(i);
    }
    return rev;
}

function countVowel(str){
    let count = 0;
    for(let i=0 ; i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
           str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'
        ){
            count++;
        }
    }
    return count;
}
function palindrome(str){
    let rev="";
    for(let i= str.length-1; i >= 0 ; i--)
    {
        rev += str.charAt(i);
    }
    console.log(rev);
    for(let i=0 ; i<str.length;i++){
       if(str.charAt(i) === rev.charAt(i)){
        return "palindrome";
    }
    else{
        return "not Palindrome";
    }
    }
   
}

console.log(palindrome("trupti"));

// Higher Order Function


//methods 
const calci = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    }
};