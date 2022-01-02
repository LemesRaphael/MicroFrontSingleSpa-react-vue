import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0)
  console.log(React.version)
  const handleDecrement = () => {
    updateCounter(counter-1)
  }
  const handleIncrement = () => {
    updateCounter(counter+1)
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Sua aplicação React</h1>
       <h2>Counter: {counter}</h2>
       <button onClick={handleDecrement}>
         Decrement
          </button>
       <button onClick={handleIncrement}>
         Increment
          </button>
      </header>
    </div>
  );
}

export default App;
