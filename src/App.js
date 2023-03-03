import "./App.css";
import { useEffect, useRef } from "react";
import { Pokemon } from "./components/Pokemon";
import { Form } from "./components/Form";
import { Lifes } from "./components/Lifes";
import { Timer } from "./components/Timer";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const titleRef = useRef(null);

  const id = useSelector((state) => state.id);
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

  return (
    <div className="App">
      <h1>POKEGUESS</h1>
      <hr />
      {lifes.length > 0 ? (
        <>
          <Timer
            titleRef={titleRef}
          />
          <Lifes />
          <h3 ref={titleRef}>Who is this pokemon?</h3>
          <Pokemon />
          <Form
            titleRef={titleRef}
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
