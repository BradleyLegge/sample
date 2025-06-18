import React from "react";
import data from "../data.json";
import Shop from "./Shop";

const Item = () => {
  return (
    <div className="hero">
      {data.map((i, index) => (
        <Shop key={index} i={i} />
      ))}
    </div>
  );
};

export default Item;
