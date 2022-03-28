// composition

const add2 = value => value + 2;
const squire = value => value * value;
const divide = value => value / 2;

const compose = (...funcs) => value => {
  return funcs.reduce((acca, func) => func(acca), value);
};

const luckyNumber = compose(add2, squire, divide);