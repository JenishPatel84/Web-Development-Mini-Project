/*
Error Handeling : Error handling means identifying, catching, and managing errors so that our application doesn't fail unexpectedly.

Imagine your DevTrack backend has a login API.

A user sends:
{
  "email": "admin@gmail.com",
  "password": "12345"
}

But the database is unavailable.

What should happen?

A bad backend application might crash or return an unclear error.

A properly designed backend should:
- Detect the error.
- Handle it.
- Return an appropriate response.
- Keep the application running whenever possible.

-> Types of Errors in JavaScript

Error	        Meaning
SyntaxError	    Invalid JavaScript syntax
ReferenceError	Accessing an undeclared variable
TypeError	    Performing an invalid operation on a value
RangeError	    Value outside an allowed range
URIError	    Incorrect URI encoding/decoding
Error	        General error object
*/

// Understanding the error object

try {
    const num = 2;
    console.log(num.name);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/*
Three important properties:
- error.name: Error type.
- error.message: Description of the error.
- error.stack: Stack trace showing where the error occurred.
*/

// Finally block

try {
    console.log('connecting to database');
    throw new Error('Database connection failed');
} catch (error) {
    console.log(error.message);
} finally {
    console.log('cleanup completed');
}

// Throw keyword

function withdraw(balance, amount){
    if(balance < amount){
        throw new Error('Insufficient balance');
    } 
    return balance -= amount;
}

try {
    console.log(withdraw(1000,3456))
} catch (error) {
    console.log(error.message);
}

// Custom error class

class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}

function getUser(id) {
    if(!id){
        throw new AppError(
            'User id is required',
            400
        )
    }

    return {
        name : 'Jenish',
        email : 'jenish23@gmail.com',
        age : 19,
    }
}

try {
    const user = getUser(null);
    console.log(user);
} catch(error){
    console.log(error.name , " : ", error.message , " [", error.statusCode, "] ");
}

// Handeling Async Error

function fetchUser(){
    return Promise.reject(
        new Error('User not found')
    );
}

fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error.message);
    })

async function fetchDetails(){
    throw new Error('Details not found');
}

async function main(){
    try{
        const details = await fetchDetails();
        console.log(details);
    } catch(error) {
        console.log(error.message);
    }
}
main();

// Real world example

class projectError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

async function getProject(projectId){
    try{
        if(!projectId){
            throw new projectError(
                'projectid is required',
                400
            )
        } 
        return {
            id : projectId,
            name : 'Online Quiz WebApp'
        }
    } catch (error) {
        throw error;
    }
}

getProject(null)
    .catch((error) => {
        console.log(error.message);
        console.log(error.statusCode);
    })