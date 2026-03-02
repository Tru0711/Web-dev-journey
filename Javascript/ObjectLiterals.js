let post = {
      username : 'Trupti0710',
      content : 'this is my first page',
      likes : 56,
      repost : 34,
      tages: 5  

};
//Get Object values
console.log(post.likes); //--using dot 
console.log(post["username"]); //--using square bracket

const obj = {
      1 : "a",
      2 : 20,
      true : "c",
      undefined : "d",
      null : "e"
};

// Add or update value
 const student = {
    name : "Trupti Kandalkar",
    age : 21,
    marks : 85,
    city : "Kolhapur"
 };

 student.city = "Pune";
 student.gender = "female";

 // delete any key
 delete student.city;

 //Nested Objects 
 let students = {
       Trupti : {
               marks : 85,
               city : "Kolhapur"
       },
       Riya : {
            marks : 80,
            city : "Satara"
       },
       Rohit : {
            marks : 75,
            city : "Sangli"
       },
       Omkar : {
             marks : 94,
             city : "Nashik"

       }
 };
 console.log("Nested array Outputs : ");
 console.log(students.Trupti);
 console.log(students.Riya.marks);
 console.log("------------------------------------");

 //Array of Object
 const arr = [
    {
        name : "Trupti",
        age : 21
    },
    {
        name : "Shradha",
        age : 25
    },
    {
        name : "Abhi",
        age : 23
    },
    { 
        name : "Hindu",
        age : 19
    }
 ];
 console.log("Array of Objects Outputs : ");
 console.log(arr[0]);
 console.log(arr[1].name);
 console.log("------------------------------------");

 // Math Objects
 console.log("Overview : \n\n Properties => \n\n 1]Math.PI \n\n 2]Math.E \n\n Methods => \n\n 1]Math.abs(n) \n\n 2]Math.pow(a,b) \n\n 3]Math.floor(n) \n\n 4]Math.ceil(n) \n\n 5]Math.random() \n");

//Generate Random Number from 1 to 10
 let n = Math.random();
 n = n * 10;
 n = Math.floor(n);
 n = n+1;
 console.log(n);
 
 //Guessing game
 let max = prompt("Enter a max number : ");
 const random = Math.floor(Math.random()*max)+1;
 let guess = prompt("Guess the number ");

 while(true){
    if(guess == "quit"){
        console.log("user quit the game ");
        break;
    }
    else if(guess == random){
        console.log("Congrats!! Your guess is right!!");
        break;
    }
    else if(guess < random){
        guess =  prompt("Your guess is small ..... try again ");
    }
    else{
        guess = prompt("Your guess is to big  ..... try again ");
    }
 }

 