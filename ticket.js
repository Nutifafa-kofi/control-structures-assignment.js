function getTicketPrice(age, day, isStudent) {
  let basePrice;
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      basePrice = 12;

      break;

    case "friday":
    case "saturday":
    case "sunday":
      basePrice = 15;
  }
  let discount = 0;
  if (age < 13) {
    discount = basePrice * 0.5;
  } else if (age >= 65) {
    discount = basePrice * 0.3;
  } else if (
    isStudent &&
    (day === "monday" ||
      day === "tuesday" ||
      day === "wednesday" ||
      day === "thursday")
  ) {
    discount = basePrice * 0.2;
  }
  const finalPrice = basePrice - discount;
  return finalPrice.toFixed(2);
}

console.log(getTicketPrice(12, "monday", true));