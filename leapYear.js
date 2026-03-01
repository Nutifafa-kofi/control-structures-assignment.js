// function to check if a year is a lep yeap

function isLeapYear(year) {
  /* if year is divisible by 4 and not divisble by 100 or year is divisible by 400 return true.
   Else return false*/
   if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ){
    return true
   }
   return false
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

// my output test code

console.log(isLeapYear(1600));
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

