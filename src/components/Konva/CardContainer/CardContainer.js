import React from "react";
import { Group } from "react-konva";
import {CARD_TYPE} from "../../../utils/enums";
import Card from "../Card/Card";

const CardContainer = () => {
  const cards = Object.keys(CARD_TYPE).map(type =>  (<Card type={type}/>));

  return (
    <Group
      x={100}
      y={100}
      width={window.innerWidth - 300}
      strokeWidth={5}
      stroke="black"
      height={450}
    >
      {cards}
    </Group>
  );
};

export default CardContainer;
