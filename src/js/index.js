// precisamos criar duas variaveis no JS para tarbalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//vamos precisar trabalhar com um evento click feito pelo usuario na listagem de pokemons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        //remover a classe aberto só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove("aberto")

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById("cartao-" + idPokemonSelecionado)

        cartaoPokemonParaAbrir.classList.add("aberto")

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector(".ativo")
        pokemonAtivoNaListagem.classList.remove("ativo")

        //adicionar a classe ativo no item da lista selecionado
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add("ativo")
    });
});