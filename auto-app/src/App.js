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
        };
      }

      break;
    case "Bremsen":
      if (state.tempo >= 5) {
        state = {
          ...state,
          tempo: state.tempo - 5,
        };
      }

      break;
    default:
      console.log("Unbekante Operation");
      break;
  }
  return state;
};
function App() {
  const initialState = {
    gestartet: false,
    tempo: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>Auto</div>
      <p>{state.gestartet ? "Gestartet" : "Steht"}</p>
      <p>Tempo: {state.tempo}</p>
      <button onClick={() => dispatch({ type: "Anschalten" })}>
        Anschalten
      </button>
      <button onClick={() => dispatch({ type: "Ausschalten" })}>
        Ausschalten
      </button>
      <button onClick={() => dispatch({ type: "Gas geben" })}>Gas geben</button>
      <button onClick={() => dispatch({ type: "Bremsen" })}>Bremsen</button>
    </div>
  );
}

export default App;
