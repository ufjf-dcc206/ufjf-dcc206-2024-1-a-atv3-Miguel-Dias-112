

class Cartas {
    id:Number = 0;
    nome:String = '';
    img:String = '';
    tipo:String = '';
    class:String ='';
    constructor(
        _id:number,
        _class:string,
        _html:HTMLElement,
    ){
        this.id = _id;
        const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+this.id);
        pokemon.then((resposta) => {
            return resposta.json();

        }
        ).then((pokemon) => {
            this.nome = pokemon.name;
            this.img = pokemon.sprites.front_default;
            this.tipo = pokemon.types[0].type.name;
            this.class = _class
            _html.setAttribute("nome", this.nome.toString());
            _html.setAttribute("img",  this.img.toString());
            _html.setAttribute("tipo",  this.tipo.toString());
            _html.setAttribute("class",  this.class.toString());

        });
    }       
}
function click(e:Event, ctn:HTMLElement) {
    const elem = e.target! as HTMLElement;
    const lista_cartas3 = document.querySelector('#lista_cartas3')!;
    ctn.removeChild(elem);
    lista_cartas3.appendChild(elem);
}
function pushList(id:String,type:string) {
    const listDesordenada = document.querySelector('#'+id);
    if (listDesordenada && listDesordenada.children) {
        for (let i = 0; i < 5; i++) {
            let randnumber:number = Math.floor(Math.random() * 152);
            const card = new Cartas(randnumber,type, listDesordenada.children[i] as HTMLElement)
            const cardCtn:HTMLElement = listDesordenada.children[i] as HTMLElement
            cardCtn.addEventListener('click', (e:Event) => {
                const container =listDesordenada as HTMLElement
                click(e, container);
            });
            listaCartas.push(card);


            
        } 
    }

    
}

const listaCartas:Cartas[] = [];
pushList('lista_cartas2','enemy');
pushList('lista_cartas1','player');