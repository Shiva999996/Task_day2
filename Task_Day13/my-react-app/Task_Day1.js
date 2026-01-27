/*

TOPICS:
  1) Hoisting Differences (10 examples)
  2) Memory Visualization (Object References)
  3) Execution Context Debugging (console.trace)

*/


//Hoisting examples
console.log("\n====Hoisting examples===== ");

// 1.var hoisting
console.log(a); //undefined
var a = 10;

// 2.let hoisting
//console.log(b); //reference error
let b=10;

// 3.const hoisting
//console.log(c);  //reference hoisting
const c=10;

// 4. function declaration
   fun();
   function fun(){
    console.log("hello from function declaration");
   }

// 5.Function expression with var
var funday=function(){
    console.log("hello from function expression");
}
 funday();

 
 // 6.let function expression
 let funway=function(){
    console.log("hello from function expression using let ");
 }
 funway();


 // 7.Arrow function hoisting
 var greet=()=>console.log("hello from arrow function");
 greet();
 

 // 8.Block scope
{
    let d=10;
    console.log(d);
}


// 9.Hoisting inside function

function inside(){
    console.log(innervar); //undefined
    var innervar=20;
}
inside();

// 10. Multiple var declarations
console.log(num);
var num=1;
var num=2;
console.log(num);





//   2️. MEMORY VISUALIZATION (OBJECT REFERENCES)

console.log("\n===== MEMORY VISUALIZATION =====");

// Object reference example
let obj1={name:"shivaji"};
let obj2=obj1;

obj2.name="raj";
console.log(obj1.name);
console.log(obj2.name);


// Primitive value copy

let num1=10;
let num2=num1;
num2=20;

console.log(num1);//10
console.log(num2);//20

// Cloning object to avoid reference
let user1={role:"Admin"};
let user2={...user1};

user2.role="user";
console.log(user1.role); //admin
console.log(user2.role);//user




//3️ EXECUTION CONTEXT & console.trace()

console.log("\n======EXECUTION CONTEXT & console.trace()=======");

// Call stack tracing
function first() {
    console.log("first");
  second();
}

function second() {
    console.log("second");
  third();
}

function third() {
  console.trace("Trace inside third()");
}

first();

// Execution context flow
function calculate(x) {
  console.trace("Inside calculate()");
  return x * 2;
}

function processData() {
  let result = calculate(5);
  console.log("Result:", result);
}

processData();


// Async execution trace
function main() {
  setTimeout(task, 500);
}

function task() {
  console.trace("Async task trace");
}

main();





