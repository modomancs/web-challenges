// Change this value to test different "weather" conditions.
const weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("Its sunny!");
    break;

  case "rainy":
    console.log("Its raining, dont forget your umbrella!");
    break;

  case "snowy":
    console.log("Its snowing, stay warm!");
    break;
  default:
    console.log("Im not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log("Its sunny and warm!");
    } else {
      console.log("Its sunny, but a bit chilly!");
    }
    break;

  case "snowy":
    if (temperature < 0) {
      console.log("Freezing snow!");
    }
    break;

  default:
    console.log("Im not sure what the weather is like.");
}
