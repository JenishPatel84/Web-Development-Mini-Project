/*
Prototype : A prototype is an object from which another object can inherit properties and methods.

Every ordinary JavaScript object has an internal link to another object called its [[Prototype]].

When JavaScript cannot find a property directly on an object, it looks at that object's prototype.
*/

const user = {
    name : "Jenish",
}
const person = {
    age : 19,
}
Object.setPrototypeOf(user, person);
console.log(user.name, " + ", user.age);

/**
Prototype Chain : When you access a property, JavaScript searches in this order:
1. First, it checks the object itself.
2. If not found, it checks the object's prototype.
3. If still not found, it checks the prototype's prototype.
4. This continues until it reaches null.
This mechanism is called the Prototype Chain.
*/

const grandparent = {
    gname : "Narsinhbhai",
}
const parent = {
    pname : "somabhai",
}
const child = {
    cname : "Jenish",
}
Object.setPrototypeOf(parent, grandparent);
Object.setPrototypeOf(child, parent);

console.log(child.gname , " ", child.pname, " ", child.cname);

// __proto__
console.log(user.__proto__);
console.log(Object.__proto__);

// create an object with particular prototype
const loc = {
    city : 'anand',
}
const place = Object.create(loc);
console.log(place.city);

// better Approach to add method in object
function func(player){
    this.player = player;
}

func.prototype.score = function(){
    console.log(`${this.player} score a 100 runs`)
}
//Now both objects share the same score() method through their prototype.
const p1 = new func('virat');
const p2 = new func('rahul');
p1.score();
p2.score();

/*
Real-World Backend Connection: DevTrack
Imagine our DevTrack application has multiple users.

We want every user to have:
- A name.
- An email.
- A method to display user details.
*/

function userDetails(name, email){
    this.name = name;
    this.email = email;
}

userDetails.prototype.getDetails = function(){
    return {
        name : this.name,
        email : this.email,
    }
}

const user1 = new userDetails(
    'Jenish',
    'jenishsomabhaipatel@gmail.com'
);
const user2 = new userDetails(
    'Het',
    'het425@gmail.com'
);
console.log(user1.getDetails());
console.log(user2.getDetails());