// temperature classifier
function classifyTemperature(temp) {
  // if temp is less than zero, return freezing
  if (temp < 0) {
    return "Freezing";
  }

  // if temp is zero to ten, return cold
  else if (temp <= 10) {
    return "Cold";
  }

  // if temp is 11 to 20, return cool
  else if (temp <= 20) {
    return "Cool";
  }

  // if temp is 21 to 31, return warm
  else if (temp <= 30) {
    return "Warm";
  }

  // otherwise, return hot
  else {
    return "Hot";
  }
}

console.log(classifyTemperature(-5));
console.log(classifyTemperature(15));
console.log(classifyTemperature(32));

// my ouput test code
console.log(classifyTemperature(15));
console.log(classifyTemperature(21));
console.log(classifyTemperature(55));
