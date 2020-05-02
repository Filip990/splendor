import {CARD_COLOR, CARD_HEIGHT, CHIP_COLOR, CHIP_RADIUS} from "./constants";

export function getChipAttrs(name) {
    const startingPositionX = 20;
    const distance = 10;
    const chipDistance = distance + CHIP_RADIUS * 2;

    switch (name) {
        case CHIP_COLOR.BLACK:
            return {
                fill: 'black',
                x: startingPositionX,
                y: 0,
            };
        case CHIP_COLOR.RED:
            return {
                fill: 'red',
                x: startingPositionX,
                y: chipDistance,
            };
        case CHIP_COLOR.BLUE:
            return {
                fill: 'blue',
                x: startingPositionX,
                y: chipDistance * 2,
            };
        case CHIP_COLOR.GREEN:
            return {
                fill: 'green',
                x: startingPositionX,
                y: chipDistance * 3,
            };
        case CHIP_COLOR.WHITE:
            return {
                fill: 'white',
                x: startingPositionX,
                y: chipDistance * 4,
                strokeWidth: 2,
                stroke: 'black',
            };
        case CHIP_COLOR.GOLD:
            return {
                fill: 'yellow',
                x: startingPositionX,
                y: chipDistance * 5,
            };
        default:
            return {};
    }
};

export function getCardsAttrs(type) {
    const startingPositionX = 10;
    const cardDistance = 10;

    switch (type) {
        case CARD_COLOR.GREEN:
            return  {
                fill: 'green',
                x: startingPositionX,
                y: (CARD_HEIGHT + cardDistance) * 2,
            };
        case CARD_COLOR.YELLOW:
            return {
                fill: 'yellow',
                x: startingPositionX,
                y: CARD_HEIGHT + cardDistance,
            };
        case CARD_COLOR.BLUE:
            return {
                fill: 'blue',
                x: startingPositionX,
                y: 0,
            };
        default:
            return {};
    }
}