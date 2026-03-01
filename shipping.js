// function to calculate the total cost of shipped item
function calculateShipping(weight, destination, shipingSpeed) {
  // declared a baseRate variable 
  let baseRate;
  switch (destination) {
    case "domestic":  // if destination is domestic, then bseRate is equal to 5
      baseRate = 5;
      break;
    case "international": // if the destination is international, then baseRate is equal to 13
      baseRate = 15;
      break;

    default:
      return "Invalid destination";
  }
  // condition to add weightCharge based on the weight
  if (typeof weight !== "number" || weight <= 0) {
    return "Invalid weight";
  }

  let weightCharge;
  // if weight is less than or equal to 5, weightCharge is 0
  if (weight <= 5) {
    weightCharge = 0;
  } 
  // if weight is less than or equal to 20, weightCharge is 5
  else if (weight <= 20) {
    weightCharge = 5;
  } 
  // otherwise, weightCharge is 10 + extra pounds * 0.5
  else {
    weightCharge = 10 + (weight - 20) * 0.5;
  }

  // switching between shippingSpeed
  let multiplier; // declared a multiplier varialble 
  switch (shipingSpeed) {
    case "standard": // is shippingSpeed is standard, multiplier is 1
      multiplier = 1;
      break;
    case "express": // is shippingSpeed is express, multiplier is 1.5
      multiplier = 1.5;
      break;
    case "overnight": // is shippingSpeed is overnight, multiplier is 2.5
      multiplier = 2.5;
      break;

    default:
      return "Invalid shipping speed";
  }
  const total = (baseRate + weightCharge) * multiplier;
  return total.toFixed(2);
}

console.log(calculateShipping(1, "domestic", "standard"));
console.log(calculateShipping(10, "international", "express"));
console.log(calculateShipping(25, "domestic", "overnight"));
console.log(calculateShipping(3, "mars", "standard"));

// my output test code
console.log(calculateShipping(20, "international", "overnight"));
console.log(calculateShipping(0, "international", "express"));
console.log(calculateShipping(25, "over", "overnight"));
console.log(calculateShipping(3, "domestic", "standard"))