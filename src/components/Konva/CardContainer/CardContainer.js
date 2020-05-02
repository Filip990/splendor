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
    >
      {cards}
    </Group>
  );
};

export default CardContainer;
