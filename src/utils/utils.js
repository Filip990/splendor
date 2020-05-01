import {CHIP_COLOR} from "./enums";

export function getChipAttrs(name) {
    switch (name) {
        case CHIP_COLOR.BLACK:
            return {
                fill: 'black',
                y: 500,
                x: 100,
            };
        case CHIP_COLOR.RED:
            return {
                fill: 'red',
                y: 500,
                x: 200,
            };
        case CHIP_COLOR.BLUE:
            return {
                fill: 'blue',
                y: 500,
                x: 300,
            };
        case CHIP_COLOR.GREEN:
            return {
                fill: 'green',
                y: 500,
                x: 400,
            };
        case CHIP_COLOR.WHITE:
            return {
                fill: 'white',
                y: 500,
                x: 500,
                strokeWidth: 2,
                stroke: 'black',
            };
        case CHIP_COLOR.GOLD:
            return {
                fill: 'yellow',
                y: 500,
                x: 600,
            };
        default:
            return {};
    }
};