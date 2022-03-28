// function created with the technique of currying
const mult = num1 => num2 => {
  return num1 * num2;
};

// functions created based on the function created with the technique of currying
const twice = mult(2);
const triple = mult(3);