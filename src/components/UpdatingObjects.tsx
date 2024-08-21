// import React from "react";

import { useState } from "react";

const UpdatingObjects = () => {
  const [drink, setDrink] = useState({
    title: "Strong Beer",
    price: 350,
  });
  const handleIncrement = () => {
    setDrink({ ...drink, price: drink.price + 5 });
  };
  const handleDecrement = () => {
    setDrink({
      ...drink,
      price: drink.price - 5,
    });
  };
  return (
    <div>
      <p>Title: {drink.title}</p>
      <p>Price: {drink.price}</p>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default UpdatingObjects;
