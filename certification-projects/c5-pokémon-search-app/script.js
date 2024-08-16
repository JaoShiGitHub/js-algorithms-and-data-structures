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

let isLoading = false;

const getData = async () => {
  let pokemonData = [];
  const pokemonNameOrID = searchInput.value.toLowerCase();
  clearData();
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`
    );
    // Solving the problem of not being able to get the pokemon data by using .text()
    const text = await response.text();
    // Attempt to parse the JSON only if the response is JSON
    pokemonData = JSON.parse(text);
  } catch (error) {
    clearData();
    console.error("Error fetching data:", error);
    alert("Pokémon not found");
  }

  pokemonName.textContent += pokemonData.name;
  pokemonID.textContent += pokemonData.id;
  weight.textContent += pokemonData.weight;
  height.textContent += pokemonData.height;
  types.innerHTML += pokemonData.types
    .map(
      (type) =>
        `<span class="pokemon-type ${
          type.type?.name
        }">${type.type?.name.toUpperCase()}</span>`
    )
    .join("");
  hp.textContent += pokemonData.stats[0]?.base_stat;
  attack.textContent += pokemonData.stats[1]?.base_stat;
  defense.textContent += pokemonData.stats[2]?.base_stat;
  specialAttack.textContent += pokemonData.stats[3]?.base_stat;
  specialDefense.textContent += pokemonData.stats[4]?.base_stat;
  speed.textContent += pokemonData.stats[5]?.base_stat;
  console.log(pokemonData);
};

const clearData = () => {
  searchInput.value = "";
  pokemonName.textContent = "";
  pokemonID.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  types.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

searchBtn.addEventListener("click", getData);
