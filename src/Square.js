import { useState, useEffect } from "react";
import "./Square.css";

const getRandomNumber = () => Math.floor(Math.random() * (255 - 0));

export default function ColorfulSquare() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [width, setWidth] = useState("150px");
  const [heigth, setHeigth] = useState("150px");

  const handleMouseMove = () => {
    setBackgroundColor(
      `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}`
    );
    // setWidth(`${getRandomNumber()}px`);
    // setHeigth(`${getRandomNumber()}px`);
  };

  return (
    <div
      className="Colorful-square"
      style={{ backgroundColor, width, heigth }}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
