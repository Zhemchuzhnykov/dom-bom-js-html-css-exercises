// the variable successPromise has a promise object as a value
const successPromise = new Promise(resolve => {
  resolve(67);
});

// working with the data passed by the method resolve() from the promise
successPromise.then(function onSuccess(number) {
  console.log(number ** 2);
});

// text is not logged to the console because the method reject() is not specified in the promise
successPromise.catch(function onError() {
  console.log('I am an error')
});
