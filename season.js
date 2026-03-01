// function to determine the season of based on month name

function getSeason(month) {
  switch (month.toUpperCase()) {
    // if month is december, january, or february, return winter
    case "DECEMBER":
    case "JANUARY":
    case "FEBRUARY":
      return "Winter";

    //   if month is march, april, may, or may, return spring

    case "MARCH":
    case "APRIL":
    case "MAY":
      return "Spring";

    //   if month is june, july, or august, return summer

    case "JUNE":
    case "JULY":
    case "AUGUST":
      return "Summer";

    //   if month is september, october, november, return fall

    case "SEPTEMBER":
    case "OCTOBER":
    case "NOVEMBER":
      return "Fall";

    default:
      return "Invalid month";
  }
}

console.log(getSeason("December"));
console.log(getSeason("july"));
console.log(getSeason("October"));
console.log(getSeason("Smarch"));

// my ouput test code
console.log(getSeason("june"));
console.log(getSeason("september"));
console.log(getSeason("JuneJuly"));
console.log(getSeason("march"));
