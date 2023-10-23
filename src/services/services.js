import { getPokedexData, getPokemonData } from "../api/api.js";
import { loadPokemon, loadPokemons, savePokemon, savePokemons } from "../storage/storage.js";

export async function getPokemon(pokemonName){
    try{
        loadPokemon(pokemonName);
    }catch(e){
        const pokemonData = await getPokemonData(pokemonName);
        savePokemon(pokemonData);

        return pokemonData;
    };
};

export async function getPokemons(offset){
    try{
        loadPokemons(offset)
    }catch(e){
        const pokemonsData = await getPokedexData(offset);
        savePokemons(offset, pokemonsData);

        return pokemonsData;
    };
};