import { useState } from "react";
import "./Square.css";

const getRandomNumber = () => Math.floor(Math.random() * (255 - 0));

export default function ColorfulSquare() {
  const [color, setColor] = useState("rgb(98, 98, 98)");
  const [boxShadowColor, setBoxShadowColor] = useState("rgb(98, 98, 98, 0.6)");

  const handleMouseMove = () => {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();
    setColor(`rgb(${red}, ${green}, ${blue}`);
    setBoxShadowColor(`rgb(${red}, ${green}, ${blue}, 0.6`);
  };

  return (
    <div
      className="Colorful-square"
      style={{
        backgroundColor: color,
        boxShadow: `10px 10px ${boxShadowColor}`,
      }}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
