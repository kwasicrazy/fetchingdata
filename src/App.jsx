import { useState } from 'react';
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [catFact, setCatFact] = useState("");
  const [textColor, setTextColor] = useState("black");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setCatFact(response.data.fact);
      setTextColor(getRandomColor());
    });
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "black", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className='app'>
      <button onClick={fetchCatFact}>Random Cat Facts</button>
      <div className='factContainer' >
      <p style={{ color: textColor }}>{catFact}</p>
      </div>
      
    </div>
  );
}

export default App


