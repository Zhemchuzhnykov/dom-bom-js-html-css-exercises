// function executing different mathematical operations in a chain

const calc = initValue => {

  let result = initValue;

  return {
    add(value) {
      result += value;
      return this;
   },
   
    mult(value) {
      result *= value;
      return this;
   },

    substract(value) {
      result -= value;
      return this;
   },

    div(value) {
      result /= value;
      return this;
   },

    result() {
      return result;
   },
  }
};