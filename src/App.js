import React from "react";
import "./App.css";
import Color from './components/ColorBox';
import ColorContext from "./contexts/Color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: "black" }}>
      <div className="App">
          <Color />
      </div>
    </ColorContext.Provider>
  );
}

export default App;