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
  console.log("Fetching data...");
  const pokemonNameOrID = searchInput.value.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon`
    );
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (err) {
    console.log(err);
    console.log(pokemonNameOrID, "error");
  }
};

searchInput.addEventListener("click", getData);
