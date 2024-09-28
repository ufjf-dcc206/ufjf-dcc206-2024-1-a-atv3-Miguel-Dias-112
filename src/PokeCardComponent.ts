
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
                    z-index: 3;
                    
                    height:100%;
                    border:5px solid black;
                    background-color: #e5e5f7;
               
                    border-radius: 10px;
                    margin: 10px;
                    

                } 
                #background{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction: column;
                    width:auto ;
                    min-width: 180px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    background-color:whitesmoke;
                    height:auto;
                    border:5px solid black;
                    border-radius: 10px;
                    margin: 10px;

                    
                }
                .player{
                    background-color:red
                    background-color: #e5e5f7;
                    
                    background-image:  linear-gradient(135deg, #f74545 25%, transparent 25%), linear-gradient(225deg, #f74545 25%, transparent 25%), linear-gradient(45deg, #f74545 25%, transparent 25%), linear-gradient(315deg, #f74545 25%, #e5e5f7 25%);
                    background-position:  10px 0, 10px 0, 0 0, 0 0;
                    background-size: 10px 10px;
                    background-repeat: repeat;


                }
                .enemy{
                    background-color:blue
                    background-color: #e5e5f7;
                    
                    background-image:  linear-gradient(135deg, #4599f7 25%, transparent 25%), linear-gradient(225deg, #4599f7 25%, transparent 25%), linear-gradient(45deg, #4599f7 25%, transparent 25%), linear-gradient(315deg, #4599f7 25%, #e5e5f7 25%);
                    background-position:  10px 0, 10px 0, 0 0, 0 0;
                    background-size: 10px 10px;
                    background-repeat: repeat;
                }
                img{
                    width: 100px;
                    border-radius: 50%;
                    border: 5px solid black;
                    height: 100px;
                }
                h2{
                    padding: 0;
                    margin: 0;

                    background-color: gray;
                    padding-right: 10px;
                    padding-left: 10px;
                    border-radius: 10px;

                }
                h1{
                    padding: 0;
                    margin: 0;
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