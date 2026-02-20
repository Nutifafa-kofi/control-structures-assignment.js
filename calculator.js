// function to perform basic arithmetic

function calculate(num1, num2, operator) {
  switch (true) {
    // if operator is + then add num1 and num2
    case operator === "+":
      return num1 + num2;

    //   if operator is - then subtract num2 from num1
    case operator === "-":
      return num1 - num2;

    //   if operator is * then multiply num1 and num2
    case operator === "*":
      return num1 * num2;

    //   if operator is / then divide num1 and num2, and if num2 is zero return cannot divide by zero
    case operator === "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;

    //   if operator is % return the remainder of num1 and num2
    case operator === "%":
      return num1 % num2;

    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*")); 
console.log(calculate(10, 0, "/")); 
console.log(calculate(10, 5, "^"));

// my ouput test code
console.log(calculate(10, 5, "-"));
console.log(calculate(13, 0, "*"));
console.log(calculate(40, 5, "+")); 
console.log(calculate(10, 0, "^")); 
console.log(calculate(10, 5, "/"));