import "./App.css";
import React from "react";
import Form from "./Components/form";
import Discussions from "./Components/discussions";

function App() {
  return (
    <div className="App">
      <h1>My Agora States</h1>
      <Form />
      <Discussions />
    </div>
  );
}

export default App;
