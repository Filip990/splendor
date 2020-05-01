import React from "react";
import { Rect } from "react-konva";

const PlayerContainer = (props) => {
  return (
    <Rect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      strokeWidth={5}
      stroke="black"
      fill="red"
    />
  );
};

export default PlayerContainer;
