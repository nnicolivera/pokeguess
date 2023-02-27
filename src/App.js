import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Form } from './components/Form';
import { Lifes } from './components/Lifes';

function App() {
  const [id, setId] = useState(Math.floor(Math.random() * 100) + 1);
  const [data, setData] = useState([]);
  const [lifes, setLifes] = useState([1, 2, 3, 4, 5]);
  const titleRef = useRef(null);

  const randomId = () => {
    const newId = Math.floor(Math.random() * 100) + 1;
    setId(newId);
  }

  useEffect(() => {
    const fetchData = async (id) => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const req = await fetch(URL);
      const res = await req.json();
      setData(res);
    }
    fetchData(id);
  }, [id]);

  return (
    data && data.sprites && (
      <div className="App">
        <h1>POKEGUESS</h1>
        {lifes.length > 0 ? (
          <>
            <Lifes lifes={lifes} />
            <h3 ref={titleRef}>Who is this pokemon?</h3>
            <img src={data.sprites.front_default} alt="pokemon" width="150px" />
            <Form name={data.name} lifes={lifes} setLifes={setLifes} nextPokemon={randomId} titleRef={titleRef} />
            <br />
            <button onClick={() => randomId()}>Next...</button>
          </>
        ) :
          <>
            <h2>Nothing to see here...</h2>
            <button onClick={() => window.location.reload(false)}>Click to reload!</button>
          </>

        }
      </div >
    )
  )
}

export default App;
