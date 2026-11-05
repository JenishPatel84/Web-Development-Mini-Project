// Scope - global scope, function scope, block scope

// 1) Global 
let nameS = "Rahul"
function displayName(){
    console.log(nameS);
}
displayName();
console.log(nameS);

// 2) function
function greet(){
    let mes = ' Hi I am Jenish Patel';
    console.log(mes);
}
greet();
// console.log(mes);

// 3) Block
if(true){
    let city = "patan"
    let state = 'Gujarat'

    console.log(city , " ", state)
}
// console.log(city);

/*
Closures : closure is a function that remembers and retains access to variables from its outer lexical scope, even after the outer function has finished executing.
*/

function outer(){
    let cnt = 0;
    function inner(){
        cnt++;
        console.log(cnt);
    }
    return inner;
}
const result = outer();
result();
result();

// Application of closure

// Data Privacy

function bankAcc(){
    let balance = 1000;

    return {
        deposit(amount){
            balance += amount;
        },
        getBalance(){
            return balance;
        }
    };
}
const acc = bankAcc();

acc.deposit(2000);
console.log(acc.getBalance());

// Function factory

function multiply(x) {

    return function(y) {
        return x * y;
    };

}
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// callback and async programming

function fetchUser(userid){
    setTimeout(() => {
        console.log(userid);
    },1000);
}
fetchUser(2031);

/*
Important Interview Concept: Closure with Loops
Consider this code:
for (var i = 1; i <= 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);

}

What will be printed?
4
4
4

Why?
- var has function scope, not block scope.
- All three callbacks share the same i.
- The loop finishes and i becomes 4.
- After approximately one second, all callbacks access the same variable.


Using let:
for (let i = 1; i <= 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);

}

Output:
1
2
3
*/

// Practical Example 

function counter() {
    let count = 10;

    return function() {
        count += 5;
        return count;
    };
}

const c1 = counter();
const c2 = counter();

console.log(c1()); //15
console.log(c1()); //20
console.log(c2()); //15
console.log(c1()); //25