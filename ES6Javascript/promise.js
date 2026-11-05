/*
Promise : 
Promise is a javascript object that represent a failuer and success od async operation.

In simple words:

A Promise is a guarantee that an operation will eventually provide a result or an error.

For example, imagine you order food online.
1. You place an order.
2. Restaurant accepts your order.
3. Food is prepared.
4. Food is delivered.
When you place the order, you don't immediately receive the food.

You receive a promise that the food will eventually be delivered or the order will fail.

This is similar to how JavaScript Promises work.
*/

const promise1 = new Promise((resolve, reject) => {
    let res = true;
    if(res){
        console.log('successful');
    } else {
        console.log('Fail');
    }
});

const promise = new Promise((resolve, reject) => {
    resolve(10);
})
.then((val) => {
    console.log(val);
});

// return a promise
Promise.resolve(10)
    .then((val) => {
        return Promise.resolve(val*2);
    })
    .then((val) => {
        console.log(val);
    });

// Handeling error in promise chaining

Promise.resolve(16)
    .then((val) => {
        console.log(val);
        throw new Error('Something went wrong');
    })
    .then((val) => {
        console.log('this will be skipped');
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log('Promise finished');
    })


const p1 = Promise.resolve('user');
const p2 = Promise.reject('admin error');
const p3 = Promise.resolve('student');

Promise.all([p1, p2, p3])
    .then((val) => {
        console.log(val);
    })
    .catch((error) => {
        console.log(error);
    })

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });

// Real world Backend example

const getUser = () => {
    return Promise.resolve({
        name : 'Rahul',
        email : 'jenish@gmail.com',
    });
}

const getProjects = () => {
    return Promise.resolve([
        'Bike Pool',
        'Full stack web App'
    ]);
}

const getNotification = () => {
    return Promise.resolve([
        'commit changes',
        'Project uploaded'
    ]);
}

Promise.all([
    getUser(),
    getProjects(),
    getNotification()
])
.then(([user, project , notification]) => {
    console.log(user);
    console.log(project);
    console.log(notification);
})
.catch((error) => {
    console.log(error);
})