import {CHIP_COLOR} from "./enums";

export function getChipAttrs(name) {
    switch (name) {
        case CHIP_COLOR.BLACK:
            return {
                fill: 'black',
                x: 20,
                y: 20,
            };
        case CHIP_COLOR.RED:
            return {
                fill: 'red',
                x: 20,
                y: 120,
            };
        case CHIP_COLOR.BLUE:
            return {
                fill: 'blue',
                x: 20,
                y: 220,
            };
        case CHIP_COLOR.GREEN:
            return {
                fill: 'green',
                x: 20,
                y: 320,
            };
        case CHIP_COLOR.WHITE:
            return {
                fill: 'white',
                x: 20,
                y: 420,
                strokeWidth: 2,
                stroke: 'black',
            };
        case CHIP_COLOR.GOLD:
            return {
                fill: 'yellow',
                x: 20,
                y: 520,
            };
        default:
            return {};
    }
};