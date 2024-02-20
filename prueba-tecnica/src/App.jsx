import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("cat fact");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </>
  );
}

export default App;
