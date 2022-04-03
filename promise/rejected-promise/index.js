// the variable failedPromise has the value of a promise object
const failedPromise = new Promise((resolve, reject) => {
  reject(new Error('Oops, error!'));
});

// the function logging to the console the data passed by the method reject() from a promise
failedPromise.catch(function onError(error) {
  console.log(error);
});