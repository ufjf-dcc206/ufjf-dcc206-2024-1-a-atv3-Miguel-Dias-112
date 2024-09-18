
const template = document.createElement("template")

console.log(template)
export default class PokeCard extends HTMLElement{
    
    #shadow;
    #tipo;
    #img;
    #nome;
    constructor(){
        super()
        this.#shadow = this.attachShadow({mode:"closed"})
        this.#render()
    }
    static get observedAttributes(){
        return["nome", "tipo","img"]
    }
    connectdCallback(){
         this.#shadow = this.attachShadow({mode:"closed"})

    }
    #render(){
        this.#shadow.innerHTML = 
        `
            <style>
            
                div{
                    display: flex;
                    justify-content: flex-start;
                     align-items: flex-start;
                    flex-direction: column;
                    width:auto ;
                    min-width: 300px;
                    height:auto;
                    border:2px solid black;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 10px;
                } 
            </style> 
            <div>
                <img src='${this.#img}'></img>
                <h1>${this.#nome}</h1>
                <h2 id= "tipo">
                   ${this.#tipo}
                </h2>
                <h2 id="saldo">
                </h2>
            </div>
        `
      
    }
   
    attributeChangedCallback(chave, antigo, novo){
        if( chave == "tipo"){
            this.#tipo = novo;
        }
        if( chave == "nome"){
            this.#nome = novo;
        }
        if( chave == "img"){
            this.#img.push(novo);
            
        }
        this.#render()
    }
        
}
customElements.define("poke-card", PokeCard)