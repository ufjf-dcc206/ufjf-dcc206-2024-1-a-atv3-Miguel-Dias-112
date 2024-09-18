

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

const listaCartas:Cartas[] = [];
for(let i =0; i <= 10; i++){
    let randnumber:number = Math.floor(Math.random() * 152);
    const listDesordenada = document.querySelector('#lista_cartas');
    if (listDesordenada && listDesordenada.children) {
        listaCartas.push(new Cartas(randnumber, listDesordenada.children[i] as HTMLElement));
    }
}
