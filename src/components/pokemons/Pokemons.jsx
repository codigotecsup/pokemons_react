import './Pokemons.scss';
import {useEffect, useState} from "react";
import Pokemon from "../pokemon/Pokemon.jsx";
import {getDataFromPokemon} from "../../services/pokemon.service.jsx";

function Pokemons() {
    const [pokemonsList, setPokemonsList] = useState([]);
    const getPokemons = async ()=>{
        const response = await  getDataFromPokemon();
        setPokemonsList(response.results);
    }
    useEffect(()=>{
        getPokemons();
    })

    return (
        <>
         <main className="container-fluid mt-5">
             <section className="pokemons__main">
                 {
                     pokemonsList.map((p, index)=>{
                         return <Pokemon data={p} key={index} core={index}></Pokemon>
                     })
                 }
             </section>
         </main>
        </>
    )
}

export default Pokemons;
