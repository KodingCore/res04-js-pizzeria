import { Ingredient } from "./classes/ingredient.js"

function creatStage(tabIngredients){
    const tabArticleIngredients = [];
    
    const stage = document.getElementById("stage");
    
    const titreStage = document.createElement("h2");
    stage.appendChild(titreStage);
    
    const textTitreStage = document.createTextNode("Choix des ingrédients");
    titreStage.appendChild(textTitreStage);
    
    const listeStage = document.createElement("ul");
    stage.appendChild(listeStage);
    
    for(let i =0; i < tabIngredients.length; i++){
        
        let ingredient = document.createElement("li");
        listeStage.appendChild(ingredient);
        
        let article = document.createElement("article");
        ingredient.appendChild(article);
        tabArticleIngredients.push(article);
        
        let header = document.createElement("header");
        article.appendChild(header);
        
        let figure = document.createElement("figure");
        header.appendChild(figure);
        
        let img = document.createElement("img");
        figure.appendChild(img);
        img.setAttribute("src", tabIngredients[i].file);
        img.setAttribute("alt", tabIngredients[i].name)
        
        let nomIngredient = document.createElement("h3");
        header.appendChild(nomIngredient);
        
        let textNomIngredient = document.createTextNode(tabIngredients[i].name);
        nomIngredient.appendChild(textNomIngredient);
        
    }
    
    return tabArticleIngredients;
}

function initialisationIngredients(){
    let availableIngredients = [];
    
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png")
    let carotte = new Ingredient("Carotte", "assets/img/carrots.png")
    let fromage = new Ingredient("Fromage", "assets/img/cheese.png")
    let oeuf = new Ingredient("Oeuf", "assets/img/egg.png")
    let aubergine = new Ingredient("Aubergine", "assets/img/eggplant.png")
    let fromageDeChevre = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png")
    let miel = new Ingredient("Miel", "assets/img/honey.png")
    let champignon = new Ingredient("Champignon", "assets/img/mushroom.png")
    let olive = new Ingredient("Olive", "assets/img/olive.png")
    let piment = new Ingredient("Piment", "assets/img/pepper.png")
    let pommeDeTerre = new Ingredient("Pomme de terre", "assets/img/potato.png")
    let tomate = new Ingredient("Tomate", "assets/img/tomato.png")
    
    availableIngredients = [bacon, carotte, fromage, oeuf, aubergine, fromageDeChevre, miel, champignon, olive, piment, pommeDeTerre, tomate];
    
    return availableIngredients;
}

function listenerChoice(elements){
    for(let element of elements){
        element.addEventListener("click", function(){
            element.classList.toggle("selected");
        })
    }
}


window.addEventListener("DOMContentLoaded", function(){
    const tabIngredients = initialisationIngredients();
    const tabArticleIngredients = creatStage(tabIngredients);
    listenerChoice(tabArticleIngredients);
})
