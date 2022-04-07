// the function executing math operation asynchonously with a passed number
const asyncCalculator = numbr => new Promise(resolve => {
  setTimeout(() => {
    console.log(`Initial value: ${numbr}`);
    resolve(numbr);
  }, 500);
}).then(num => new Promise(resolve => {
  setTimeout(() => {
    console.log(`Squared value: ${num * num}`);
    resolve(num ** 2);
  }, 500);
})).then(num => {
  console.log(`Doubled value: ${num * 2}`);
  return(num * 2);
});

asyncCalculator(5).then(num => console.log(num / 5));