let user1 = "Shruti"
let user2 = Number(user1)
console.log(typeof user2); //number
console.log(user2); //nan


let user3 = Boolean(user1)
console.log(typeof user3);  // true


let age = "44"
console.log(typeof age);   // string
let convertedage = Number(age)
console.log( typeof convertedage); //number

console.log("?????????????????????????????????????????????");

let score = null
let score2 = Number(score)
console.log( score2); // 0

//same if we try to convert undefined to number then o/p is nan
// true - 1
// false - 0
//1 - in Boolean - true, 0 - false, "" - false, "shruti" - true


// operations

console.log("2" + "4");  // 24
console.log("2" + 14 + 45); //21445
console.log(6 + 11 + "3" + 5 + 1);  //17351

let str1 = "welcome"
let str2 = " Shruti"
// console.log(str1 +  str2);
console.log(`Good Morning Guys and ${str1} ${str2} to the first tutorial of js`);

let price = 100
// let newprice = price++
let newprice = ++price
console.log(newprice); // postincrement - returns the value before increment
//prefix - returns the value after increment





