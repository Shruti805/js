// primitive - 7 - String, Number, Boolean, undefined, Null, Date, symbol
// Nonprimitive - 3 - array, function, object

let user1 = "Shruti" // string - "", ''
let value = 500// number types include decimal, 0, float, integers 
console.log(typeof value); // to find the data type of variable typeof is used
const loggedin = true // Boolean 
console.log(typeof loggedin);

let userName; // only variable is creted and not assigned any value
console.log(typeof userName); // type of undefined is undefined
let price = null
console.log(typeof price); // type of null is object

let currenDate = new Date()   // typeof date is object
console.log(currenDate.toDateString());

const sym1 =  Symbol("apple")

let userdetails = {    // object literals
    username : "Shruti",
    email: "Shru@gmail.com",
    greetme: function(){
        console.log(`welcome ${this.username}`);
        
    }
}
console.log(userdetails.email); // to access email
console.log(userdetails["username"]);

//functions
function addnumber(num1, num2){        // function expersion
    return `sum is : ${num1 + num2}`
}
console.log(addnumber(5, 6))

const Multiply = function(a, b){        // function declaration
    return `multiplication is : ${a*b}`
}
console.log(Multiply(3,4));

const greetuser = (user) =>{                //arrow function
    return `Welcome ${user} to js tutorials`
}

console.log(greetuser("Anjali"));
console.log(greetuser("shivani"));

// const sym1 =  Symbol("apple")

console.log(sym1);
console.log(userdetails);











