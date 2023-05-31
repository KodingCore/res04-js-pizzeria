class Pizza{
    #ingredients;
    
    constructor(){
        this.#ingredients = [];
    }
    
    get ingredients(){
        return this.#ingredients;
    }
    
    addIngredient(ingredient){
        this.#ingredients.push(ingredient);
        this.display();
    }
    
    removeIngredient(ingredient){
        this.#ingredients.splice(this.#ingredients.indexOf(ingredient), 1);
        this.display();
    }
    
    display(){
        
        const aside = document.getElementsByTagName("aside")[0];
        
        aside.innerHTML = null;
        
        const titreAside = document.createElement("h2");
        aside.appendChild(titreAside);
        
        const textTitreAside = document.createTextNode("Votre Pizza");
        titreAside.appendChild(textTitreAside);
        
        const listeAside = document.createElement("ul");
        aside.appendChild(listeAside);
        for(let i =0; i < this.#ingredients.length; i++){
        
            let ingredient = document.createElement("li");
            listeAside.appendChild(ingredient);
            
            let article = document.createElement("article");
            ingredient.appendChild(article);
            
            let header = document.createElement("header");
            article.appendChild(header);
            
            let figure = document.createElement("figure");
            header.appendChild(figure);
            
            let img = document.createElement("img");
            figure.appendChild(img);
            img.setAttribute("src", this.#ingredients[i].file);
            img.setAttribute("alt", this.#ingredients[i].name)
            
            let nomIngredient = document.createElement("h3");
            header.appendChild(nomIngredient);
            
            let textNomIngredient = document.createTextNode(this.#ingredients[i].name);
            nomIngredient.appendChild(textNomIngredient);
        
        }
        
        if(this.#ingredients.length > 0){
            let liBtn = document.createElement("li");
            listeAside.appendChild(liBtn);
        
            let btnCommander = document.createElement("button");
            liBtn.appendChild(btnCommander);
            btnCommander.id = "order";
        
            let textBtnCommande = document.createTextNode("Commander");
            btnCommander.appendChild(textBtnCommande);
        }
    }
}

export { Pizza }