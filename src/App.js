import './App.css';
import React from 'react';
// import FetchPokeman from './components/FetchPokemon';

import AxiosPokemon from './components/AxiosPokemon';


function App() {
  return (
    <div className="App">

      <h1>Catch Them All!!!</h1>

      {/* <FetchPokeman /> */}
      
      <AxiosPokemon />
    </div>
  );
}

export default App;
