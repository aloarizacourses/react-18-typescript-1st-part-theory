import React from "react";
import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = (newName: string) => {
    console.log("hello form handleClick in game");
    const newGame = {
      ...game,
      player: { ...game.player, name: newName },
    };
    setGame(newGame);
  };

  return (
    <>
      <p>{game.player.name}</p>
      <button onClick={() => handleClick("Bob")}>Change Name</button>
    </>
  );
};

export default Game;
