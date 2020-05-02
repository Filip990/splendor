export const STAGE_CONTAINER = 'stageContainer';
export const CARD_COLOR = {
    GREEN: 'green',
    BLUE: 'blue',
    YELLOW: 'yellow',
};
export const CARD_TYPE = {
    [CARD_COLOR.GREEN]: {
        quantity: 20,
    },
    [CARD_COLOR.BLUE]: {
        quantity: 20,
    },
    [CARD_COLOR.YELLOW]: {
        quantity: 20,
    },
};
export const CARD_HEIGHT = window.innerHeight / 6;
export const CARD = {
    width: 80,
    height: CARD_HEIGHT,
    name: 'Card',
};
export const CHIP_RADIUS = window.innerHeight / 30;
export const CHIP = {
    radius: CHIP_RADIUS,
};
export const CHIP_COLOR = {
    BLACK: 'black',
    RED: 'red',
    BLUE: 'blue',
    GREEN: 'green',
    WHITE: 'white',
    GOLD: 'yellow',
};

export const CHIP_SETUP = {
    [CHIP_COLOR.BLACK]: {
        quantity: 6
    },
    [CHIP_COLOR.RED]: {
        quantity: 6
    },
    [CHIP_COLOR.BLUE]: {
        quantity: 6
    },
    [CHIP_COLOR.GREEN]: {
        quantity: 6
    },
    [CHIP_COLOR.WHITE]: {
        quantity: 6
    },
    [CHIP_COLOR.GOLD]: {
        quantity: 6
    },
};