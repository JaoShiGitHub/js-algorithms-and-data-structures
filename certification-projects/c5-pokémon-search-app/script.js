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
  const pokemonNameOrID = searchInput.value.toLowerCase();
  let pokemonData = [];
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`
    );
    // Solving the problem of not being able to get the pokemon data by using .text()
    const text = await response.text();
    // Attempt to parse the JSON only if the response is JSON
    pokemonData = JSON.parse(text);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Pokémon not found");
  }

  pokemonName.textContent += pokemonData.name;
  pokemonID.textContent += pokemonData.id;
  weight.textContent += pokemonData.weight;
  height.textContent += pokemonData;
  types.innerHTML += `<div>${pokemonData.types[0]?.type?.name}</div>`; // back to loop data

  console.log(pokemonData);
};

searchBtn.addEventListener("click", getData);
