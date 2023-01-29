// if...else 
// Example 1 
var x = 10;
var y = 20;

if(x == y){
    console.log("Both are Equal")
}
else {
    console.log("Both are Different")
}


// Example 2
var a = "sri";
var b = "sri";

if(a == b){
    console.log("Both are Equal")
}
else {
    console.log("Both are Different")
}


//Example 3
// difference b/w == and === 
var x = 10;
var y = "10"; 

console.log(x ==y ); // it compares only value
console.log(x === y); // it compares both value and its type


//if ...else if...else
//Example1 
var x = 10;
var y = 10; 

if(x == y){
    console.log("Both are equal")
}
else if (x != y){
    console.log("Both are equal")
}
else {
    console.log("flase")
}

//Example2
var x = 10;
var y = "10"; 

if(x == y){
    console.log("Both are equal")
}
else if (x != y){
    console.log("Both are equal")
}
else {
    console.log("flase")
}
console.log("all conditions false");

//Ternary Operator
//Example if..else
var x = 10;
var y = 10; 

x == y ? console.log(true) : console.log(false);

//Example if..else if ...else 
var x = 10;
var y = "sri"; 

x == y ? console.log("1st place") : true ? console.log("2nd place") : console.log("3rd place");


//Note
[] //empty array ...its value will be false, i.e., [] = false;
{} //empty object ...its value will be false, i.e., {} = false;
"" //empty string ...its value will be false, i.e., "" = false;
null // its value will be false, i.e., null = false;