import React from 'react';
import { Rect } from 'react-konva';
import { CARD } from "../../../utils/enums";

const Card = ({x, y, img, onClick}) => {
    return (
        <Rect x={x} y={y} background={img} fill={'blue'} width={CARD.width} height={CARD.height} onClick={onClick} name={CARD.name}/>
    )
};

export default Card;
