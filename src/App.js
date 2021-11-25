import "./App.css";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Body cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
