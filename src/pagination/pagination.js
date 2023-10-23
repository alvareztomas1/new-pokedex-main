import { getPokedexData } from "../api/api.js";
import { hidePokedex, showLoadingScreen } from "../interface/interface.js";
import { setPokemonsImages } from "../pokemon/pokemon.js";
import { hideLoadingScreen } from "../interface/interface.js";
import { POKEMONS_PER_PAGE as pokemonsPerPage }  from "../index.js";

export function createPagination(totalPages){
    const $pagination = document.querySelector(".pagination");
    const $backButton = document.createElement("button");
    const $goButton = document.createElement("button");
    const $totalPages = document.createElement("p");
    const $pageSelector = document.createElement("input");

    $backButton.className = "pagination-button";
    $backButton.textContent = "Back";
    $backButton.id = "back-button";

    $goButton.className = "pagination-button";
    $goButton.textContent = "Go";
    $goButton.id = "go-button";

    $totalPages.className = "total-pages";
    $totalPages.textContent = totalPages;

    $pageSelector.className = "current-page";
    $pageSelector.id = "current-page";
    $pageSelector.type = "number";
    $pageSelector.value = 1;

    
    $pagination.appendChild($backButton);
    $pagination.appendChild($pageSelector);
    $pagination.appendChild($totalPages);
    $pagination.appendChild($goButton);


};

export function handlePageChanging(totalPages){
    const $backButton = document.querySelector("#back-button");
    const $goButton = document.querySelector("#go-button");
    const $currentPage = Number(document.querySelector("#current-page").value);

    $backButton.onclick = ()=>{
        handleBackButtonClick(totalPages);
    }
    $goButton.onclick = () => {
        handleGoButtonClick($currentPage, totalPages);
    }
};
async function changePage(newPage, totalPages){
   
    document.querySelector("#current-page").value = newPage;
    const offset = (newPage - 1) * 20;

    const pokedexData = await getPokedexData(offset);
    await setPokemonsImages(pokedexData);
    hideLoadingScreen();
    handlePageChanging(totalPages);
};

async function handleGoButtonClick($currentPage, totalPages){
    let $changedPage = Number(document.querySelector("#current-page").value);

    
    if($changedPage === $currentPage && $changedPage <= totalPages && $changedPage > 0){
        
        $changedPage = $changedPage + 1;
    
        showLoadingScreen();
        hidePokedex();
        changePage($changedPage, totalPages)
        

    }else if($changedPage !== $currentPage && $changedPage <= totalPages && $changedPage > 0){
        showLoadingScreen();
        hidePokedex();
        changePage($changedPage, totalPages);
    }
    
};

function handleBackButtonClick(totalPages){
    let $changedPage = Number(document.querySelector("#current-page").value) - 1;

    if($changedPage > 0 && $changedPage <= totalPages){
        showLoadingScreen();
        hidePokedex();
        changePage($changedPage, totalPages);
    };

};