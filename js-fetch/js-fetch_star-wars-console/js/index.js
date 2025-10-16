console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("All data: ", data);
  console.log("All First name: ", data.results[0].name);
  console.log("R2D2 Eye color: ", data.results[2].eye_color);
}

fetchData();
