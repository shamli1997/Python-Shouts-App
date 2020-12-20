import React, { Component } from "react";
import { render } from "react-dom";
import Login from "./Login";

function App() {
  return (
    <div>
      <Login />
    </div>
  )
}


export default App;

const container = document.getElementById("app");
render(<App />, container);