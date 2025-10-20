/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/
const city = {
  name: "Berlin",
  country: "Germany",
};
export const getNameAndCountry = (city) => {
  const name = city.name;
  const country = city.country;
  return [name, country];
};

export const getRelocatedCity = (city1, city2) => {
  if (!city2) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  const country = getNameAndCountry(city2)[1];
  return {
    name: city1.name,
    country: country,
  };
};
