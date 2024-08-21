// import React from "react";

import { useState } from "react";

const UpdatingStateEx = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Usman",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handlePlayerChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Faris" } });
  };
  const handleAddTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Green Olives"] });
  };
  return (
    <div>
      {game.id} <p>{game.player.name}</p>
      <button onClick={handlePlayerChange} type="button">
        Change Player
      </button>
      <div>Pizza Details</div>
      <p>Pizza Flavour:{pizza.name} </p>
      {pizza.toppings.map((topping) => {
        return <p>{topping}</p>;
      })}
      <button onClick={handleAddTopping} type="button">
        Add Topping
      </button>
    </div>
  );
};

export default UpdatingStateEx;
