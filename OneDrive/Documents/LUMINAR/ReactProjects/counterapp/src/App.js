import { useState } from 'react';
import './App.css';


function App() {

  const [number, setNumber] = useState(0);

  function incrementNumber (){
    setNumber(number + 1);
    

  };

  function decrementNumber () {
    setNumber(number - 1);
  };

  function resetNumber(){
    setNumber(0);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center' }}>
          Counter App
        </h1>
        <h3>
          {number}</h3>    <br></br><br></br><br></br>
        <button onClick={incrementNumber}>Increment</button>  &nbsp;
        <button onClick={decrementNumber}>Decrement</button> &nbsp;
        <button onClick={resetNumber}>Reset</button>
        <br></br>
        <br></br>
        
      </form>

      
    </div>
  );
}

export default App;
