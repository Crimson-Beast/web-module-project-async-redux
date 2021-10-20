import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UPDATE_SEARCH_TEXT, GET_POKEMON_SUCCESS } from "../actions/pokemon.action";
import Poke_Ball from '../imgs/Poke_Ball.png'

const initialState = {
    searchText: '',
    img: Poke_Ball,
    name: '',
    id: '',
    type: '',
    weight: '',
}

export const pokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_TEXT:
            return {...state, searchText: action.text}
        case GET_POKEMON_SUCCESS:
            const img = action.name.sprites.front_default
            const name = action.name.name
            const id =  action.name.id
            const type = action.name.types[0].type.name
            const weight = action.name.weight
            return {...state, img, name, id, type, weight, searchText: ''}
        default: 
            return state
    }
}

export const store = createStore(pokeReducer, composeWithDevTools(applyMiddleware(thunk)))