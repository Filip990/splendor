import React from 'react';
import { Rect } from 'react-konva';
import {CARD} from "../../../utils/constants";
import {getCardsAttrs} from "../../../utils/utils";

const Card = ({ type }) => {
    return (
        <Rect width={CARD.width} height={CARD.height}  name={CARD.name} {...getCardsAttrs(type)}/>
    )
};

export default Card;