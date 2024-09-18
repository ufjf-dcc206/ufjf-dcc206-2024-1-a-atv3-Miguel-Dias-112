
const listDesordenada:HTMLUListElement = document!.querySelector('#lista_cartas');

class Cartas {
    id = 0;
    nome = '';
    img = '';

    constructor(
        _id:number,
    ){
        this.id = _id;
        const pokemon = fetch('https://pokeapi.co/api/v2/'+this.id);
        pokemon.then((resposta) => {
            console.log(resposta.json());
            return resposta.json();

        }
        ).then((pokemon) => {
            this.nome = pokemon.name;
            this.img = pokemon.sprites.front_default;
        });
    }       
}

