/*
Async/await is one of the most frequently used features in modern backend development with Node.js.

You'll use it when:
- Fetching users from a database.
- Registering and authenticating users.
- Calling external APIs.
- Reading files.
- Uploading documents.
- Processing payments.
Let's learn it step by step.

What is Async/Await?
Async/await is a JavaScript feature that makes asynchronous code easier to write and understand.
It allows us to work with Promises using syntax that looks similar to synchronous code.
*/

function getuser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('jenish');
        }, 2000)
    });
}

async function displayUser(){
    const user = await getuser();

    console.log(user);
}
displayUser();

// Async keyword

async function greet(){
    return `Hello India`;
}
console.log(greet());

async function getNumber(){
    return 16;
}
getNumber().then((val) => {
    console.log(val);
})

// Await keyword

function getEmail(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`24it425@bvmengineering.ac.in`);
        }, 2000);
    });
}
async function displayEmail() {
    console.log('Before await');
    const email = getEmail();
    console.log(email);
    console.log('After await');
}
displayEmail();

/*
            How await works
            Start async function
                    |
                    V
            Execute until await
                    |
                    V
                  Pause
            Wait for Promise to settle
                    |
                    V
                  Resume
            Continue async function

await does not block the entire JavaScript thread. It suspends the current async function while allowing other JavaScript work to proceed.
*/

// Multiple await statements

function getUser(){
    return Promise.resolve({
        id : 201,
        name : 'jenish',
    });
}
function getProjects(userId){
    return Promise.resolve([
        'Bike Pool',
        'Smart energy system'
    ]);
}
function getProjectsDetails(projectName){
    return Promise.resolve({
        project : projectName,
        status : 'Active',
    });
}

async function dashboard(){
    const user = await getUser();
    console.log(user);

    const project = await getProjects(user.id);
    console.log(project);

    const details = await getProjectsDetails(project[0]);
    console.log(details);
}
dashboard();

// Error handeling with async await
function getDetails() {
    return Promise.reject(
        new Error("User not found")
    );
}
async function displayDetails() {
    try {
        const user = await getDetails();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
displayDetails();

// Real Backend Example

function findUser(email){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(email === 'admin@gmail.com'){
                resolve({
                    id : 209,
                    name : 'Admin',
                    role : 'HOD',
                });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000)
    });
}
async function login(email){
    try {
        const user = await findUser(email);
        console.log('Login Successful', " ", user.name);
    } catch (error) {
        console.log(error.message);
    }
}
login("admin@gmail.com");