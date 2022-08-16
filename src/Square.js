import { useState } from "react";
import styled from "styled-components";

const Square = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color,
    boxShadow: `10px 10px ${props.boxShadowColor}`,
  },
}))`
  border: 2px solid white;
  height: 62vh;
  width: 30vw;
  cursor: pointer;
`;

const getRandomNumber = () => Math.floor(Math.random() * (255 - 0));

export default function ColorfulSquare() {
  const [color, setColor] = useState("rgb(98, 98, 98)");
  const [boxShadowColor, setBoxShadowColor] = useState("rgb(98, 98, 98, 0.6)");

  const handleMouseMove = () => {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();
    setColor(`rgb(${red}, ${green}, ${blue})`);
    setBoxShadowColor(`rgb(${red}, ${green}, ${blue}, 0.6)`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <Square
      color={color}
      boxShadowColor={boxShadowColor}
      onMouseMove={handleMouseMove}
      onClick={handleCopy}
    />
  );
}
