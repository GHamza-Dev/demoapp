import './App.css';
import { useEffect, useState } from 'react';
import DisplayNbr from './DisplayNbr';

function App() {
  
  const [nbr, setNbr] = useState(123);

  useEffect(()=>{
    console.log("Use effect executed...",nbr)
  },[nbr])


  function incrementNbr(){
    setNbr(nbr+1)
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={incrementNbr}>Increment +</button>
      <DisplayNbr nbrToDisplay={nbr}></DisplayNbr>
    </div>
  );
}

export default App;
