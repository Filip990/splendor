import React from "react";
import { Rect } from "react-konva";
import { getCardsAttrs } from "../../../utils/utils";

const Card = ({ type }) => {
  return <Rect {...getCardsAttrs(type)} />;
};

export default Card;
