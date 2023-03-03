import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Pokemon } from "./components/Pokemon";
import { Form } from "./components/Form";
import { Lifes } from "./components/Lifes";
import { Timer } from "./components/Timer";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(Math.floor(Math.random() * 100) + 1);
  const [time, setTime] = useState(10);
  const [flag, setFlag] = useState(false);
  const titleRef = useRef(null);

  const lifes = useSelector((state) => state.lifes);
  const score = useSelector((state) => state.score);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const req = await fetch(URL);
        const res = await req.json();
        dispatch(setData(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(id);
  }, [id]);

  const randomId = () => {
    const newId = Math.floor(Math.random() * 100) + 1;
    setId(newId);
  };

  return (
    <div className="App">
      <h1>POKEGUESS</h1>
      <hr />
      {lifes.length > 0 ? (
        <>
          <Timer
            randomId={randomId}
            titleRef={titleRef}
            time={time}
            setTime={setTime}
            flag={flag}
            setFlag={setFlag}
          />
          <Lifes />
          <h3 ref={titleRef}>Who is this pokemon?</h3>
          <Pokemon setFlag={setFlag} />
          <Form
            nextPokemon={randomId}
            titleRef={titleRef}
            setTime={setTime}
            setFlag={setFlag}
            flag={flag}
          />
          <br />
        </>
      ) : (
        <>
          <h2>Your final score is: {score}</h2>
          <button onClick={() => window.location.reload(false)}>
            Click to reload!
          </button>
        </>
      )}
    </div>
  );
}

export default App;
