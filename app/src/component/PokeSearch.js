import { connect } from "react-redux"
import { getPokemon, updateSearchText } from "../actions/pokemon.action"


const PokeSearch = (props) => {
    console.log(props)
    return (
        <div>
            <h1>CHOOSE YOUR POKEMON</h1>
            <input className="searchBar" value={props.pokemon.searchText} onChange={(e) => props.updateSearchText(e.target.value)}/>
            <button className="button"onClick={() => props.getPokemon(props.pokemon.searchText)}>Submit</button>
            <div className = "full-card">
                <img className="pokeimg" src={props.pokemon.img} alt=''/>
                <div className="bottom-card">
                    <h3 className='pokename'>{props.pokemon.name}</h3>
                    <p>Pokedex: {props.pokemon.id}</p>
                    <p>Type: {props.pokemon.type}</p>
                    <p>Weight: {props.pokemon.weight}</p>
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        pokemon: state
    }
}

export default connect(mapStatetoProps, {updateSearchText, getPokemon} )(PokeSearch)