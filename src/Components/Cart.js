import React from "react";
import { useHistory } from "react-router";
import Header from "./Header";

export default function Cart({ cart, setCart }) {
  const history = useHistory();
  const handleRemove = (x) => {
    setCart(cart.filter((item) => item.name !== x.name));
    console.log(cart.length)
    if ((cart.length)-1 === 0) {
        console.log(cart.length)
      history.push("/");
    }
  };
  return (
    <div>
      <Header cart={cart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <ul className="list-group list-group-flush">
            {cart.map((x, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {x.name}
                <span>{x.price}</span>
                <span>
                  <button onClick={() => handleRemove(x)}>Remove Item</button>
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total:
              <span>{cart.reduce((y, { price }) => price + y, 0)}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
