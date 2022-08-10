import React, { useReducer } from "react";
import "./App.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "Anschalten":
      state = {
        ...state,
        gestartet: true,
      };
      break;
    case "Ausschalten":
      if (state.tempo === 0) {
        state = {
          ...state,
          gestartet: false,
        };
      }

      break;
    case "Gas geben":
      if (state.gestartet) {
        state = {
          ...state,
          tempo: state.tempo + 5,
          animationTime: state.animationTime - 100,
        };
      }

      break;
    case "Bremsen":
      if (state.tempo >= 5) {
        state = {
          ...state,
          tempo: state.tempo - 5,
          animationTime: state.animationTime + 100,
        };
      }

      break;
    default:
      console.log("Ups... Unbekante Operation");
      break;
  }
  return state;
};
function App() {
  const initialState = {
    gestartet: false,
    tempo: 0,
    animationTime: 3000,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Auto</h1>
      <p>{state.gestartet ? "Brumm Brumm" : "Steht"}</p>
      <p>Tempo: {state.tempo}</p>
      {state.gestartet ? (
        <button onClick={() => dispatch({ type: "Ausschalten" })}>Stop</button>
      ) : (
        <button onClick={() => dispatch({ type: "Anschalten" })}>Start</button>
      )}

      <button onClick={() => dispatch({ type: "Gas geben" })}>Gas geben</button>
      <button onClick={() => dispatch({ type: "Bremsen" })}>Bremsen</button>
      <div className="road">
        <div
          className="auto-icon"
          style={
            state.gestartet
              ? { animation: `go ${state.animationTime}ms linear` }
              : { color: "black" }
          }
        >
          <i className="fa-solid fa-car-side"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
