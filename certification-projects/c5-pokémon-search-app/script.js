const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getData = async () => {
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1`
    );
    // Solving the problem of not being able to get the pokemon data by using .text()
    const text = await response.text();
    // Attempt to parse the JSON only if the response is JSON
    const data = JSON.parse(text);
    console.log("Parsed Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

searchBtn.addEventListener("click", getData);
