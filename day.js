// function to return name of the day based on a number

function getDayName(dayNumber) {
  switch (dayNumber) {
    // if number is 1, then dayName is Monday
    case 1:
      return "Monday";

    // if number is 2, then dayName is Tuesday

    case 2:
      return "Tuesday";

    // if number is 3, then dayName is Wednesday
    case 3:
      return "Wednesday";

    // if number is 4, then dayName is Thursday
    case 4:
      return "Thursday";

    // if number is 5, then dayName is Friday
    case 5:
      return "Friday";

    // if number is 6, then dayName is Saturday
    case 6:
      return "Saturay";

    // if number is 7, then dayName is Sunday
    case 7:
      return "Friday";
    // any other number should return Invalid day
    default:
      return "Invalid day";
  }
}

console.log(getDayName(3));
console.log(getDayName(7));
console.log(getDayName(10));

// my output test code
console.log(getDayName(5));
console.log(getDayName(30));
console.log(getDayName(10));
