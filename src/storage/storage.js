export function savePokemon(pokemon){
    if(typeof(pokemon) !== "object"){
        throw new Error("Failed. This function must recived an object");
    }

    try{
        localStorage.setItem(`pokemon-${pokemon.name}`, JSON.stringify(pokemon));

    }catch(e){
        localStorage.clear();
    };

};

export function loadPokemon(pokemonName){
    const pokemon = JSON.parse(localStorage.getItem(`pokemon-${pokemonName}`));

    if(!pokemon){
        throw new Error("Failed. This function must recived a pokemon name");
    }

    return pokemon;
};

export function savePokemons(offset, pokemons){
    if(typeof(pokemons) !== "object" || offset === undefined){
        throw new Error("Failed. This function must recived an object and a defined offset");
    };

    try{
        localStorage.setItem(`pokemonsOffset-${offset}`, JSON.stringify(pokemons));

    }catch(e){
        localStorage.clear();
    }

};

export function loadPokemons(offset){
    const pokemons = JSON.parse(localStorage.setItem(`pokemonsOffset-${offset}`));

    if(!pokemons || offset === undefined){
        throw new Error("Failed. This function must recived an object and a defined offset");
    };

    return pokemons;
};