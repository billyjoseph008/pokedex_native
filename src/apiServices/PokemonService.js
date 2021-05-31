import axios from 'axios'

export class PokemonService {

    baseUrl = 'https://pokeapi.co/api/v2/pokemon'

    async getAPokemon(pokemon) {
        return axios.get(this.baseUrl + `/${pokemon}`)
            .then(res => res.data);
    }

    async getPokemons(index) {
        return axios.get(this.baseUrl + `?limit=50&offset=${index}`)
            .then(res => res.data);
    }
}