// function to check traffic light syste
function trafficLight(color, pedestrianWaiting) {
  switch (color) {
    //  if color is green and there is no pedestrain, return go else return there is pedestrain
    case "green":
      if (!pedestrianWaiting) {
        return "Go";
      }
      return "There is pedestrian";

    //   if color is yellow, return slow down
    case "yellow":
      return "Slow down";

    //   if color is red, and there is pedestrain, return stop and wait for pedestrain, else return stop
    case "red":
      if (pedestrianWaiting) {
        return "Stop and wait for pesdestrain";
      }
      return "Stop";

    //   return malfunction if color do not match the above colors
    default:
      return "Malfunction";
  }
}

console.log(trafficLight("green", false));
console.log(trafficLight("red", true));
console.log(trafficLight("yellow", false));
console.log(trafficLight("blue", false));

// my output test code
console.log(trafficLight("white", false));
console.log(trafficLight("yellow", false));
console.log(trafficLight("green", true));
console.log(trafficLight("orange", false));
