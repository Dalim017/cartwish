import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Components/Routing/Routing";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
