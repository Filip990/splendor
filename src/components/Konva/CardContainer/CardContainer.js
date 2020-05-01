import React from "react";
import { Rect } from "react-konva";

const CardContainer = (props) => {
  return (
    <Rect
      x={100}
      y={100}
      width={window.innerWidth - 300}
      strokeWidth={5}
      stroke="black"
      fill="green"
      height={450}
    />
  );
};

export default CardContainer;
