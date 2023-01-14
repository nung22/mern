import React, { useState } from 'react'
import './App.css';

function App() {

  const [pokémon, setPokémon] = useState([])

  const handleFetch = e => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
  }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      console.log(response);
      setPokémon(response.results);
  }).catch(err=>{
      console.log(err);
  });
  }

  return (
    <div className="flex flex-col items-center p-8">
      <div className='btn btn-outline btn-warning mb-5' onClick={handleFetch}>Fetch Pokémon</div>
      { pokémon.length > 0 &&
        (<ul className='pl-32 lg:list-decimal'>
        { pokémon.map( (item, i) =>
          <li key={i}>{item.name.toUpperCase()[0] + item.name.slice(1)}</li>
        )}
        </ul> )}
    </div>
  );
}

export default App;
