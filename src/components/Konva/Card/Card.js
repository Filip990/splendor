import React from 'react';
import { Rect } from 'react-konva';
import {CARD, CARD_COLOR} from "../../../utils/enums";

const Card = ({ type }) => {
    let attrs = {};

    console.log(CARD_COLOR.GREEN)
    switch (type) {
        case CARD_COLOR.GREEN:
            attrs =  {
                fill: 'green',
                x: 10,
                y: 300,
            };
            break;
        case CARD_COLOR.YELLOW:
            attrs =  {
                fill: 'yellow',
                x: 10,
                y: 150,
            };
            break;
        case CARD_COLOR.BLUE:
            attrs =  {
                fill: 'blue',
                x: 10,
                y: 0,
            };
            break;
        default:
            return {};
    }

    return (
        <Rect width={CARD.width} height={CARD.height}  name={CARD.name} {...attrs}/>
    )
};

export default Card;