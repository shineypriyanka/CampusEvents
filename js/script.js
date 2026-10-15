console.log("Hello, World!");
console.log(10+5);
let eventName="tech fest";
console.log(eventName);
console.log(typeof "hello");
console.log(typeof 76.87);
let score;
console.log(score);

let age = 20;
let seatsLeft = 5;
if(age >= 18 && seatsLeft > 0){
    console.log("You can register");
}else{
    console.log("Registration unavailable");
}

let day = "Saturday";
switch(day){
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Weekday");
}

for (let i= 1; i<=5; i++) {
    console.log(i);
    
}

const events = ["Talk", "Workshop", "Hackathon"];
for(const event of events){
    console.log(event);
}
const student = {name:"Maya", year:2};
for(const key in student){
    console.log(key, student[key]);
}

//Task 1 
console.log("Shiny");
console.log("CSBS");
console.log(10);
//Task 2
let eventname = "Rock on Harris";
let ticketprice = "Rs 250";
let seatsleft = 5;
console.log(eventname);
console.log(ticketprice);
console.log(seatsleft);

//Task 3
let ticket1 = 100;
let ticket2 = 150;
let ticket3 = 200;
let sum = ticket1+ticket2+ticket3;
if (sum>500){
    console.log("Total price exceeds 500");
}else{
    console.log("Total price is in limit");
}

//Task 4
let num = 28;
if(num > 0){
    console.log("Number is positive");
}
else if(num < 0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}

//Task 5

for(i = 2; i<= 10; i+=2){
    console.log(i);
}
//Functions
function greet(){
    console.log("Hello!");
}
greet();
greet();
//Parameters and args
function greeting(name){
    console.log("Hello, " +name);
}
greeting("Sri");
greeting("Saranya");

//Task 1
function calculateTotal(price, quantity){
    return price * quantity;
}
console.log(calculateTotal(150, 2));
//Task 2
function greets(name){
    console.log("Hello, " + name);
}
greets("Shiny");

//Task 3
const Events = ["Singing", "Dance", "CodeDebugger", "TreasureHunt", "PaperPresentation"];
console.log(Events.length);

//Task 4
let numbers = [5, 10, 15, 20, 25];
let result = numbers.filter(num=> num>10);
console.log(result);
//Task 5
let nums = [2, 4, 6, 8];
let final = nums.map(num=> num * 2);
console.log(final);
//Task 6
let numv = [20, 30, 40];
let finalvalue = numv.reduce((sum, num) => sum + num, 0);
console.log(finalvalue);
//Task 7q