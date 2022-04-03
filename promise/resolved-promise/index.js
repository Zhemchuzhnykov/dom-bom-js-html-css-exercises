// promise that resolves the object { name: 'Tom', age: 17 } in one second
const userDataPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});

console.log(userDataPromise); // userDataPromise is an object of the type promise

// subscription to resolve() of a promise and checking the data delivered by resolve()
userDataPromise
  .then(function onSuccess(userData) {
    console.log(userData); // userData is data delivered from launching resolve() in a promise, in this case an object
  });

// extracting data from the data passed by the call of resolve() in a promise
userDataPromise
  .then(function onSuccess(userData) {
    console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
  });