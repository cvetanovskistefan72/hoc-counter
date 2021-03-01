import logo from './logo.svg';
import './App.css';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import { useEffect, useState } from 'react';

function App() {

  const [showCounter, setShowCounter] = useState("INC")

  

  return (
    <div className="App">
      <select onChange={(e)=>setShowCounter(e.target.value)}>
        <option value="INC">Increase</option>
        <option value="DEC">Decrease</option>
      </select>

      {showCounter === "INC" ? <IncreaseCounter /> : <DecreaseCounter />}
       
    </div>
  );
}

export default App;
