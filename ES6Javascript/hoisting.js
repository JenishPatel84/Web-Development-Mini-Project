/*
Hoisting : Hoisting is JavaScript's behavior of processing declarations before executing the code.

JavaScript handles declarations during the creation phase of an execution context, before executing statements.
*/

console.log(num); undefined
var num = 10;

var num;
console.log(num); // undefined
num = 10;

console.log(city); // Reference error
let city = 'anand';

console.log(state); // Reference error
const state = 'goa';

/*
Hoisting with function : 
Javascript has different behaviour for function declaration and expression
*/

// Function declaration
greet();
function greet(){
    console.log('Hello India');
}

// Function expression
display();                      // typeerror
var display = function(){
    console.log('USA');
}

var displayName;
displayName();                  // Undefined
displayName = function(){
    console.log('UAE');
}

// Arrow function
channel();                      //refereence error
const channel = () => {
    console.log('Fukra Insaan');
}

/*
Interview-Level Tricky Examples

Example 1
var x = 10;

function test() {
    console.log(x);
    var x = 20;
}

test();


Answer: undefined

Why? The local var x is hoisted inside test(), shadowing the global x.

Example 2
let a = 10;

{
    console.log(a);
    let a = 20;
}


Answer: ReferenceError

Why? The inner a shadows the outer a throughout the block, including its TDZ.

Example 3
console.log(typeof a);
var a = 10;


Answer: "undefined"

But:
console.log(typeof a);
let a = 10;


Answer: ReferenceError
*/

// Practical example
var a = 100;
function demo() {
    console.log(a);
    var a = 200;
    console.log(a);
}
demo();
console.log(a);