/*
JSON : Javascript Object Notation

{
  "id": 101,
  "name": "Jenish",
  "email": "jenish@gmail.com",
  "isActive": true,
  "skills": ["JavaScript", "Node.js"]
}

Javascript Object

const user = {
    name: "Jenish",
    age: 22
};
*/

// JSON.stringify() : JSON.stringify() converts a JavaScript value into a JSON string.

const user = {
    id : 24,
    name : 'Jenish',
    age : 19
}

const data = JSON.stringify(user);
console.log(data);
console.log(typeof data);

// JSON.parse()

const jsonData = '{"name":"Jenish","age":22}';
const userData = JSON.parse(jsonData);
console.log(userData);
console.log(userData.name);

// If json is invalid
const invaliddata = '{"name":"Jenish",}';

try {
    const invalidUser = JSON.parse(invaliddata);
    console.log(invalidUser);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}