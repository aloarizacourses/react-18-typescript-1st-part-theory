import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  const handleClick = () => {
    console.log("hello from app.tsx");
  };

  return (
    <>
      <Like onClick={handleClick} />
    </>
  );
}

export default App;
