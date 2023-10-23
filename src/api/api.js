import { POKEMONS_PER_PAGE as pokemonsPerPage } from "../index.js";
export async function getPokedexData(offset = 0){
    const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${offset}`;

    try{
        const response = await fetch(URL);
        return response.json();
    }catch(e){
        console.error("FAILED", e);
    }
};
export async function getPokemonData(name){
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try{
        const response = await fetch(URL);

        return response.json();
    }catch(e){
        console.error("FAILED", e);
    }
};