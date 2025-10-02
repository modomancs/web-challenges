console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access Denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if (numberOfHotdogs < 5) {
  const price = numberOfHotdogs * 2;
  console.log(price);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  const price = numberOfHotdogs * 1.5;
  console.log(price);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  const price = numberOfHotdogs * 1;
  console.log(price);
} else {
  const price = numberOfHotdogs * 0.1;
  console.log(price);
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coach = "Felix";
const greeting =
  userName === coach
    ? "Hello Coach!"
    : "Hello " + "//enter your code here" + "!";
console.log(greeting);
