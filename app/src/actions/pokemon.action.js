import axios from "axios"

export const UPDATE_SEARCH_TEXT = 'Update Search Text'
export const GET_POKEMON_SUCCESS = 'Update Pokemon Success'

export const updateSearchText = text => {
    return {type: UPDATE_SEARCH_TEXT, text}
}

export const getPokemon = pokemon => dispatch => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
        dispatch(getPokemonSuccess(res.data))
    })
}

export const getPokemonSuccess = name => {
    return {type: GET_POKEMON_SUCCESS, name}
}