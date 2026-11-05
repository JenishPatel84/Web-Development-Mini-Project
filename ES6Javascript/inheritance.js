class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in succesfully`);
    }

    getDetails() {
        return {
            name: this.name,
            email: this.email,
        }
    }
}

class Admin extends User {
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }

    deleteUser(){
        console.log(`deleted user by admin`);
    }
}

class Student extends User {
    constructor(name, email, course){
        super(name, email);
        this.course = course
    }

    submitAssignment(){
        console.log(`Assignment submited`);
    }
}

const admin = new Admin('keyur', 'keyurhod@gmail.com', 'HOD');
const student = new Student('Jenish', 'jenish@gmail.com', 'Database Management System');

admin.login();
admin.deleteUser();

student.login();
student.submitAssignment();