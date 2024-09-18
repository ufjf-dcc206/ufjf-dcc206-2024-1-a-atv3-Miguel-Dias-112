
const template = document.createElement("template")

console.log(template)
export default class PokeCard extends HTMLElement{
    
    #shadow;
    #tipo: string = "";
    #img: string = "";
    #nome: string = "";
    #class: string ="";
    constructor(){
        super()
        this.#shadow = this.attachShadow({mode:"closed"})
        this.#render()
    }
    static get observedAttributes(){
        return["nome", "tipo","img","class"]
    }
    connectdCallback(){
         this.#shadow = this.attachShadow({mode:"closed"})

    }
    #render(){
        if(this.#nome == ""){return}
        this.#shadow.innerHTML = 
        `
            <style>
            
                #container{
                    display: flex;
                    justify-content:center;
                     align-items: center;
                    flex-direction: column;
                    width:auto ;
                    min-width: 180px;
                    height:auto;
                    border:5px solid black;
                    border-radius: 10px;
                    margin: 10px;
                    box-shadow: 5px 5px 5px gainsboro;
                } 
                #background{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction: column;
                    width:auto ;
                    min-width: 180px;

                    background-color:whitesmoke;
                    height:auto;
                    border:5px solid black;
                    border-radius: 10px;
                    margin: 10px;
                }
                .player{
                    background-color:red
                }
                .enemy{
                    background-color:blue

                }
            </style> 
            <div id="container">
                <div id="background">
                    <img src='${this.#img}'></img>
                    <h1>${this.#nome}</h1>
                    <h2 id= "tipo">
                    ${this.#tipo}
                    </h2>
                    <h2 id="saldo">
                    </h2>
                </div>

                
            </div>
        `
        
        let container = this.#shadow.querySelector("#container")
        container?.classList.add(this.#class)
    }
   
    attributeChangedCallback(chave:string, antigo:string, novo:string){
        if( chave == "tipo"){
            this.#tipo = novo;
        }
        if( chave == "nome"){
            this.#nome = novo;
        }
        if( chave == "img"){
            this.#img = novo;
            
        }
        if( chave == "class"){
            this.#class = novo;
        }
        this.#render()
    }
        
}
customElements.define("poke-card", PokeCard)