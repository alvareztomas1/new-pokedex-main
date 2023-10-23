import { getPokemon } from "../services/services.js";

export function createPokemonList(totalPokemons){
    const $pokemonList = document.querySelector(".pokemon-list");

    for(let i = 0; i < totalPokemons; i++){
        const $pokemonContainer = document.createElement("div");
        const $pokemonImage = document.createElement("img");

        $pokemonContainer.className = "container";
        $pokemonImage.className = "pokemon";
        
        $pokemonContainer.appendChild($pokemonImage);
        $pokemonList.appendChild($pokemonContainer);
    };
    
   
};
export async function setPokemonsImages(pokedexData){

    const $pokemons = document.querySelectorAll(".pokemon");
    
    for(let i = 0; i < pokedexData.results.length; i++){
        const $pokemonData = await getPokemon(pokedexData.results[i].name);
        $pokemons[i].src = $pokemonData.sprites.other[`official-artwork`].front_default;
        $pokemons[i].name = $pokemonData.name;
    };


};
