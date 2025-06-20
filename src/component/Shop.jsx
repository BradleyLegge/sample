import React from "react";
import { useCartStore } from "../store/cartStore";

const Shop = ({ i }) => {
  const addToCart = useCartStore((state) => state.addToCart());

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
