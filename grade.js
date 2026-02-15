// Grade Calculator
function calculateGrade(score) {
  // if score is less than zero and score is greater than hundred, return invalid score
  if (score < 0) {
    return "Invalid score";
  }
  if (score > 100) {
    return "Invalid score";
  }

  //   if score is ninety and score is greater than ninety, return A
  if (score >= 90) {
    return "A";
  }

  //   if score is eighty and score is greater than eighty, return B
  if (score >= 80) {
    return "B";
  }

  //   if score is seventy and score is greater than seventy, return C
  if (score >= 70) {
    return "C";
  }

  //   if score is sixy and score is greater than sixty, return D
  if (score >= 60) {
    return "D";
  }

  //   if score is below sixty, return F
  if (score < 60) {
    return "F";
  }
}

console.log(calculateGrade(95));
console.log(calculateGrade(73));
console.log(calculateGrade(105));

// my output test code
console.log(calculateGrade(5));
console.log(calculateGrade(63));
console.log(calculateGrade(82));
