import React from "react";
import data from "../data.json";
import Shop from "./Shop";

const Item = () => {
  return (
    <div className="hero">
      {data.map((i) => (
        <Shop key={i.id} i={i} />
      ))}
    </div>
  );
};

export default Item;
