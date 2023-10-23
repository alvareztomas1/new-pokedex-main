

describe('verifies first page', () => {
  beforeEach(() => {
    cy.visit("http://192.168.0.124:8080")
    
  });


  it("verifies pokemon selection", () => {
    
    
    cy.get("#pokedex").then(() => {
      cy.get("#loading").should("not.be.visible");

    
     
      cy.intercept("https://pokeapi.co/api/v2/pokemon/bulbasaur", "bulbasaur.json")
      .as("getBulbasaur");
      
      
      cy.get('[name="bulbasaur"]').click()
      cy.get("#selected-pokemon")
      cy.get('[name="charizard"]').click()
      cy.get("#selected-pokemon")

    

      cy.get("#selected-pokemon")
    });
    
   

    
   
  });
  it("verifies first page", () => {
    cy.get("#loading").should("be.visible");

    const TOTAL_PAGES = 65;
    const POKEMONS_PER_PAGE = 20;

    

    cy.get("#pokedex").then(() => {
      cy.get("#loading").should("not.be.visible");
      cy.get(".pokemon").should("have.length", POKEMONS_PER_PAGE);
    });
    
    cy.get(".pagination").then(() => {
      cy.get("#back-button").should("have.text", "Back");
      cy.get("#current-page").should("have.value", 1);
      cy.get("#go-button").should("have.text", "Go");
      cy.get(".total-pages").should("have.text", TOTAL_PAGES);
    });
  });
 


  it('verifies page changing', () => {
    
    const POKEMONS_PER_PAGE = 20;

 
    
   cy.get("#go-button").click().then(() => {

    
    cy.get("#loading").should("be.visible");
    cy.get("#pokedex").should("not.be.visible");

    cy.get("#loading").should("not.be.visible");
    cy.get("#pokedex").should("be.visible");

    cy.get("#current-page").should("have.value", 2);
    cy.get(".pokemon").should("have.length", POKEMONS_PER_PAGE);
    

   });

   cy.get("#current-page").clear().type(10);
   cy.get("#go-button").click().then(() =>{
    
    cy.get("#loading").should("be.visible");
    cy.get("#pokedex").should("not.be.visible");

    cy.get("#loading").should("not.be.visible");
    cy.get("#pokedex").should("be.visible");

    cy.get("#current-page").should("have.value", 10);
    cy.get(".pokemon").should("have.length", POKEMONS_PER_PAGE);
    
    cy.get("#back-button").click().then(() => {
      cy.get("#loading").should("be.visible");
      cy.get("#pokedex").should("not.be.visible");
  
      cy.get("#loading").should("not.be.visible");
      cy.get("#pokedex").should("be.visible");
  
      cy.get("#current-page").should("have.value", 9);
      cy.get(".pokemon").should("have.length", POKEMONS_PER_PAGE);
    });
    
   });
    

    
  
  

  });

 
});


/* 
           
  


    const pokemons = cy.get(".pokemon");
  

  
cy.wait("@getBulbasaur").then(() => {
      cy.fixture("bulbasaur.json").then((data) => {
          expect(data.name).to.equal("bulbasaur");
      });
    })
      .as("getFirstPage").then(() => {
      cy.fixture("first-page.json").then((firstPageDate) => {
       
        $pokemonList.should("have.length", firstPageDate.results.length);
        $pokemonList.eq(0).should("have.class", "pokemon");
  
      });
    });

     

    $loading.should("not.be.visible");
    $title.should("be.visible");
    $pokemonList.should("be.visible");
    $pagination.should("be.visible");
    $currentPage.should("have.value", 1);

   
    */