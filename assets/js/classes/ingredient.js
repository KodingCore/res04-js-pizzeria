class Ingredient{
    #name;
    #file;
    
    constructor(name, file){
        this.#name = name;
        this.#file = file;
    }
    
    get name(){
        return this.#name;
    }
    
    get file(){
        return this.#file;
    }
    
    set name (name){
        this.#name = name;
    }
    
    set file (file){
        this.#file = file;
    }
}

export { Ingredient }