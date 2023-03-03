import { useEffect } from 'react';
import './App.css';
import { HomePage } from './Component/HomePage';

function App() {
 
     useEffect(()=>{
      document.body.style.backgroundColor = " rgb(75, 108, 106)"
     },[])
    
  return (
    <div className="App">
         <HomePage/>
    </div>
  );
}

export default App;
