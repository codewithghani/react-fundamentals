// import React from "react";

import { useState } from "react";
// import { produce } from "immer";

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
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product - 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product - 2",
        quantity: 1,
      },
    ],
  });
  const handlePlayerChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Faris" } });
  };
  const handleAddTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Green Olives"] });
  };
  const handleDecrement = (bravo: {
    id: number;
    title: string;
    quantity: number;
  }) => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === bravo.id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    });
  };
  const handleIncrement = (bravo: {
    id: number;
    title: string;
    quantity: number;
  }) => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === bravo.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
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
      <div>
        <h2>Inc / Dec - Qty in Shopping Cart</h2>
        <div className="cart--body">
          <p>Dicount - {cart.discount}</p>
          <p>
            {cart.items.map((item) => {
              return (
                <p key={item.id}>
                  {item.title} -{" "}
                  <button onClick={() => handleDecrement(item)} type="button">
                    -
                  </button>{" "}
                  Qty: {item.quantity}{" "}
                  <button onClick={() => handleIncrement(item)} type="button">
                    +
                  </button>
                </p>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdatingStateEx;
