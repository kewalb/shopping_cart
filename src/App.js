import './App.css';
import Body from './Components/Body';

import {useState} from 'react'


function App() {

  const [cart, setCart] = useState(0)
  return (
    <div className="App">
        
        <Body cart={cart} setCart={setCart}/>

    </div>
  );
}

export default App;
