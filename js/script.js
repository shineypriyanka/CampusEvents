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
