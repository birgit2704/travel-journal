import React from "react";
import "./App.css";
import Header from "./components/Header";
import Travel from "./components/Travel";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Travel title="Family Vacations" />
    </div>
  );
}

export default App;
