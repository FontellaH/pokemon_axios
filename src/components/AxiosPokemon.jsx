import React, { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    const [pokemon, setpokemon] = useState([]);


    const onClickHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {

                // return response.json();
                return response;
            })
            .then(response => {
                setpokemon([...response.data.results]);

                //console.log(pokemon[0]);
                console.log(response.data.results);
            })
            .catch(err => {
                console.log(err);
            });

        console.log(pokemon);
    }

    return (
        <div className='mt-5'>
{/* Using the kye prop helps me link to the DOM */}
            <button type="button" className="btn btn-secondary mb-4" onClick={onClickHandler}>{!pokemon.length ? "Axios Pokemon" : "Catch One "}</button>
            {pokemon.length ? pokemon.map((p, i) => <li key={i}>{p.name}</li>) : null}
        </div>
    );

}


export default AxiosPokemon;