export function getAnimal(animals) {
  if (!animals) {
    return "I do not like animals at all!";
  } else if (animals === "cats") {
    return "I totally love cats!";
  } else {
    {
      return `I like ${animals}!`;
    }
  }
}
