import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Body({ cart, setCart }) {
  const [items] = useState([
    {
      name: "Product_1",
      price: 150,
    },
    {
      name: "Product_2",
      price: 850,
    },
    {
      name: "Product_3",
      price: 250,
    },
    {
      name: "Product_4",
      price: 1000,
    },
    {
      name: "Product_5",
      price: 1500,
    },
    {
      name: "Product_6",
      price: 650,
    },
    {
      name: "Product_7",
      price: 7150,
    },
    {
      name: "Product_8",
      price: 150,
    },
  ]);

  const handleClick = (x) => {
    if (cart.length > 0) {
      const itemExists = cart.find((item) => item.name === x.name);
      if (!itemExists) {
        setCart([...cart, x]);
      }
    } else {
      setCart([x]);
    }
    
  };

  return (
    <div>
      <Header cart={cart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items.map((x, index) => (
              <div className="col mb-5" key={index}>
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{x.name}</h5>
                      Rs.{x.price}
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleClick(x)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
