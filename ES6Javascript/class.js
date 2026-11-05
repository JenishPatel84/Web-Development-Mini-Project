class User{
    constructor(name, email, age){
        this._name = name;
        this.age = age;
        this.email = email;
    }

    greet(){
        console.log(`Good Morning ${this.name}`);
    }

    getDetails(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
    }

    static add(a, b){
        return a + b;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

const user1 = new User('jenish', 19, 'jenish@gmail.com');
const user2 = new User('het', 20, 'het@gmail.com');
user1.name = 'Patel';
user1.getDetails();
user1.greet();
console.log(user1.greet === user2.greet); // true

console.log(Object.getPrototypeOf(user1) === User.prototype); // true

console.log(User.add(3,6));