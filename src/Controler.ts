

class Cartas {
    id:Number = 0;
    nome:String = '';
    img:String = '';
    tipo:String = '';
    constructor(
        _id:number,
        _html:HTMLElement,
    ){
        this.id = _id;
        const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+this.id);
        pokemon.then((resposta) => {
            return resposta.json();

        }
        ).then((pokemon) => {
            console.log(pokemon);
            this.nome = pokemon.name;
            this.img = pokemon.sprites.front_default;
            this.tipo = pokemon.types[0].type.name;
            console.log(pokemon.sprites);
            _html.setAttribute("nome", this.nome.toString());
            _html.setAttribute("img",  this.img.toString());
            _html.setAttribute("tipo",  this.tipo.toString());
        });
    }       
}
function click(e:Event, ctn:HTMLElement) {
    const elem = e.target! as HTMLElement;
    const lista_cartas3 = document.querySelector('#lista_cartas3')!;
    
    ctn.removeChild(elem);
    lista_cartas3.appendChild(elem);


}
function pushList(id:String) {
    const listDesordenada = document.querySelector('#'+id);
    if (listDesordenada && listDesordenada.children) {
        for (let i = 0; i < 5; i++) {
            let randnumber:number = Math.floor(Math.random() * 152);
            listaCartas.push(new Cartas(randnumber, listDesordenada.children[i] as HTMLElement));
            (listDesordenada.children[i] as HTMLElement).addEventListener('click', (e:Event) => {
                click(e, listDesordenada as HTMLElement);
            });
            
        }
        
    }
}

const listaCartas:Cartas[] = [];

pushList('lista_cartas2');
pushList('lista_cartas1');