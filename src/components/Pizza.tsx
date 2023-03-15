import React, { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = (newTopping: string) => {
    console.log("Adding topping");
    const newPizza = {
      ...pizza,
      toppings: [...pizza.toppings, newTopping],
    };
    setPizza(newPizza);
  };

  return (
    <>
      <p>{pizza.toppings}</p>
      <button onClick={() => handleClick("Cheese")}>Add Topping</button>
    </>
  );
};

export default Pizza;
