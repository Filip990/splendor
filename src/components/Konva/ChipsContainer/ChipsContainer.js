import React from "react";
import { Rect } from "react-konva";

const ChipsContainer = (props) => {
  return (
    <Rect
      x={window.innerWidth - 200}
      y={100}
      width={100}
      strokeWidth={5}
      stroke="black"
      height={450}
    />
  );
};

export default ChipsContainer;
