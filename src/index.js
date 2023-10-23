//import { hideLoadingScreen } from "./interface/interface.js";
import { hideLoadingScreen } from "./interface/interface.js";
import { createPagination, handlePageChanging } from "./pagination/pagination.js";
import { createPokemonList, setPokemonsImages } from "./pokemon/pokemon.js";
import {handlePokemonSelection} from "./selected-pokemon/selected-pokemon.js"
import { getPokemons } from "./services/services.js";
export const POKEMONS_PER_PAGE = 20;








async function pokedex(){
    
    const pokedexData = await getPokemons(0);
    const totalPokemons = pokedexData.count;
    const totalPages = Math.ceil(totalPokemons/POKEMONS_PER_PAGE);

    createPokemonList(POKEMONS_PER_PAGE);
    await setPokemonsImages(pokedexData);
    createPagination(totalPages);
    hideLoadingScreen();
    handlePokemonSelection();
    handlePageChanging(totalPages, POKEMONS_PER_PAGE)

};


pokedex();