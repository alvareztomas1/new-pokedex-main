import { getPokemonData } from "../api/api.js";
import { showPokedex, hidePokedex, showSelectedPokemon, hideSelectedPokemon } from "../interface/interface.js";
function clearPokemonData(){
    
    const $selectedPokemon = document.querySelector("#selected-pokemon");

 

    if($selectedPokemon.children.length !== 0){
        console.log("entra");
        for(let i = 0; $selectedPokemon.children.length; i++){
            console.log($selectedPokemon.children[i]);
            $selectedPokemon.children[0].remove();
        };
    }
    


};
function createCloseButton($selectedPokemonInfo){
    const $closeButton = document.createElement("button");
    $closeButton.className = "close-button";
    $closeButton.id = "close-button";
    $closeButton.textContent = "X";

    $selectedPokemonInfo.appendChild($closeButton);


};
function createPokemonCard($selectedPokemonInfo, pokemonData){
    const $pokemonName = document.createElement("h1");
    const $pokemonImage = document.createElement("img");

    $pokemonName.textContent = pokemonData.name.toUpperCase();
    $pokemonImage.className = "selected-pokemon-image";
    $pokemonImage.src = pokemonData.sprites.other[`official-artwork`].front_default;
    $selectedPokemonInfo.appendChild($pokemonName);
    $selectedPokemonInfo.appendChild($pokemonImage);

};
function setPokemonTypes($selectedPokemonInfo, pokemonData){
    const $types = document.createElement("div");
    $types.className = "types";

    $selectedPokemonInfo.appendChild($types);

    for(let i = 0; i < pokemonData.types.length; i++){
        
        const $type = document.createElement("h2");
        $type.className = `type ${pokemonData.types[i].type.name}`;
        $type.textContent = pokemonData.types[i].type.name.toUpperCase();

        $types.appendChild($type);
    };
};
function setPokemonStats($selectedPokemonInfo, pokemonData){
    const $stats = document.createElement("div");
    $stats.className = "stats";   
    $selectedPokemonInfo.appendChild($stats);

  

    for(let i = 0; i < pokemonData.stats.length ; i++){
        const $stat = document.createElement("ul");
        $stat.textContent = `${pokemonData.stats[i].stat.name.toUpperCase()}: ${pokemonData.stats[i].base_stat}`;

        $stats.appendChild($stat);
    };
};

function showPokemonInfo(pokemonData){
    
    const $selectedPokemonInfo = document.querySelector("#selected-pokemon")

    createCloseButton($selectedPokemonInfo);
    createPokemonCard($selectedPokemonInfo, pokemonData);
    setPokemonTypes($selectedPokemonInfo, pokemonData);
    setPokemonStats($selectedPokemonInfo, pokemonData);
   

    handleCloseButton();
    showSelectedPokemon();
};
async function setSelectedPokemonScreen(pokemonName){
    const pokemonData = await getPokemonData(pokemonName);
    hidePokedex();
    clearPokemonData();  
    showPokemonInfo(pokemonData);
};

export function handlePokemonSelection(){
    const $pokemonList = document.querySelector("#pokemon-list");

    $pokemonList.onclick = (event) => {
        if(event.target.className === "pokemon"){
            
            setSelectedPokemonScreen(event.target.name);
        };
    };

};

function handleCloseButton(){
    const $closeButton = document.querySelector("#close-button");

    $closeButton.onclick = () => {
        hideSelectedPokemon();
        showPokedex();
    };
};