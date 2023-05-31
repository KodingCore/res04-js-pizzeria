import { Ingredient } from "./classes/ingredient.js"
import { Pizza } from "./classes/pizza.js"

let intervalId = null;
let timeoutId = null;
let enCuisson = false;

//Creation du HTML (retourne une liste des nodes d'articles d'ingredients dans stage)
function creatStage(tabIngredients){
    let tabArticleIngredients = [];
    
    const stage = document.getElementById("stage");
    
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


//Initialisation du tableau des ingredients (retourne un tableau d'objets de la classe Ingredient)
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


//Listener des click sur les ingredients
function addListenerChoice(articles, objects){
    let newPizza = false;
    for(let i=0; i < articles.length; i++){
    
        articles[i].addEventListener("click", function(){
            if(!enCuisson){
                if(!newPizza){
                
                    newPizza = new Pizza();
                }
            
                articles[i].classList.toggle("selected");
                
                if(articles[i].classList.contains("selected")){
                    
                    newPizza.addIngredient(objects[i]);
                }else{
                    
                    newPizza.removeIngredient(objects[i]);
                }
                commandeBtnListener(newPizza, articles);
            }
            
            
        })
    }
}


function commandeBtnListener(pizza, articles){
    const btnCommander = document.querySelector("#order");
    if(pizza !== false){
        btnCommander.addEventListener("click", function(){
            enCuisson = true;
            for(let article of articles){
                article.classList.remove("selected");
            }
            intervalId = setInterval(removeOne ,1000, pizza, articles);
        })
    }
}

function removeOne(pizza){
    if(pizza.ingredients.length > 0){
        pizza.removeIngredient(pizza.ingredients[pizza.ingredients.length]);
    }
    
    if(pizza.ingredients.length === 0){
        clearInterval(intervalId);
        intervalId = null;
        pizzaPrete();
    }
    
}

function pizzaPrete(){
    const aside = document.getElementsByTagName("aside")[0];
    const h2 = aside.getElementsByTagName("h2")[0];
    const imgPizza = document.createElement("img");
    imgPizza.setAttribute("src", "assets/img/pizza.png");
    imgPizza.setAttribute("alt", "Pizza");
    imgPizza.setAttribute("width", aside.getBoundingClientRect().width + "");
    aside.appendChild(imgPizza);
    h2.textContent = "Votre pizza est prête!";
    timeoutId = setTimeout(function(){
        h2.textContent = "Votre pizza";
        aside.removeChild(imgPizza);
        clearTimeout(timeoutId);
        timeoutId = null;
        enCuisson = false;
    }, 5000);
    
}

window.addEventListener("DOMContentLoaded", function(){
    const tabIngredients = initialisationIngredients(); //liste d'objets Ingredients
    const tabArticleIngredients = creatStage(tabIngredients); //Liste d'articles des ingredients
    addListenerChoice(tabArticleIngredients, tabIngredients);
})