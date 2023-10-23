export function showLoadingScreen(){
    document.querySelector("#loading").textContent = "Loading...";
    document.querySelector("#pokedex").classList.add("hidden");
};
export function hideLoadingScreen(){
    document.querySelector("#loading").textContent = "";
    document.querySelector("#pokedex").classList.remove("hidden");
};
export function hidePokedex(){
    document.querySelector("#pokedex").classList.add("hidden");
};
export function showPokedex(){
    document.querySelector("#pokedex").classList.remove("hidden");
};
export function showSelectedPokemon(){
    document.querySelector("#selected-pokemon").classList.remove("hidden");
};
export function hideSelectedPokemon(){
    document.querySelector("#selected-pokemon").classList.add("hidden");
};
