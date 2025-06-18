import React, { useState } from "react";

const Shop = ({ i }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart((prev) => [...prev, i]);
    console.log(cart);
    console.log(cart.length);
  };

  return (
    <div className="container">
      <h1>{i.name}</h1>
      <h2>{i.category}</h2>
      <h3>{`$ ${i.price.toFixed(2)}`}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Shop;
