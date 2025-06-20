import React from "react";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((s) => s.cartItems);

  return (
    <div>
      {cartItems.map((i) => {
        <h1 key={i.id}>{i.name}</h1>;
      })}
    </div>
  );
};

export default Cart;
