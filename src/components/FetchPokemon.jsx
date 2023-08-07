import React, {useState} from 'react';

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [poke, setPoke] = useState(["https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"])

    const onClickHandler = () => {
        fetch(poke)
            .then(response => {
                return response.json();
            })
            .then (response => {
                setPokemon([...pokemon, ...response.results]);
                console.log(pokemon[0]);

                setPoke(response.next);
                // console.log(err);
            })
            .catch(err => {
                console.log(err);
            });
            console.log(pokemon)
    }

    return (
        <div className="mt-5">
            <button type="button" className="btn btn-secondary mb-4" onClick={onClickHandler}>{!pokemon.length?"Fetch Pokemon":"Pick One "}</button>
            {/* Using the kye prop  */}
                {pokemon.length ? pokemon.map((p,i) => <li key={i}>{p.name}</li>) : null}
        </div>
    );

}

export default FetchPokemon;