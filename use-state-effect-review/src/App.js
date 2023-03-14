import { useEffect, useState } from 'react';

import axios from 'axios';

import { PokemonDetails } from './components/PokemonDetails';
import './App.css';

function App() {
  const [pokemonFetchCount, setPokemonFetchCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setPokemonFetchCount((oldCount) => oldCount + 1);

    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        // console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchSelectedPokemon = (clickedPokemon) => {
    console.log('clicked pokemon');
    if (selectedPokemon !== null && selectedPokemon.name === clickedPokemon.name) {
      return;
    }

    console.log('fetching pokemon');
    axios
      .get(clickedPokemon.url)
      .then((res) => {
        setSelectedPokemon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h2>Pokemon have been fetched {pokemonFetchCount} times.</h2>
      <small>Showing {pokemon.length} pokemon.</small>

      <PokemonDetails pokemon={selectedPokemon} />

      {pokemon.map((pokemon) => {
        return (
          <h3
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              fetchSelectedPokemon(pokemon);
            }}
          >
            {pokemon.name}
          </h3>
        );
      })}
    </div>
  );
}

export default App;
