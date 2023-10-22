import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/Home/HomePage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
