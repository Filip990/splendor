export const COLORS = {
  WHITE: 'white',
  BLUE: 'blue',
  GREEN: 'green',
  RED: 'red',
  BLACK: 'black',
  GOLD: 'gold',
};

export const ROWS = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
};

const low = 'low';
const high = 'high';

export const CARDS = {
  [ROWS.ONE]: {
    [COLORS.WHITE]: [
      { points: 0, cost: { blue: 3 } },
      { points: 0, cost: { red: 2, black: 1 } },
      { points: 0, cost: { white: 2, black: 2 } },
      { points: 0, cost: { blue: 2, green: 2, black: 1 } },
      { points: 0, cost: { white: 3, blue: 1, black: 1 } },
      { points: 0, cost: { blue: 1, green: 1, red: 1, black: 1 } },
      { points: 0, cost: { blue: 1, green: 2, red: 1, black: 1 } },
      { points: 1, cost: { green: 4 } },
    ],
    [COLORS.BLUE]: [
      { points: 0, cost: { black: 3 } },
      { points: 0, cost: { black: 2, white: 1 } },
      { points: 0, cost: { green: 2, black: 2 } },
      { points: 0, cost: { white: 1, green: 2, red: 2 } },
      { points: 0, cost: { blue: 1, green: 3, red: 1 } },
      { points: 0, cost: { blue: 1, green: 1, red: 1, black: 1 } },
      { points: 0, cost: { blue: 1, green: 2, red: 1, black: 1 } },
      { points: 1, cost: { red: 4 } },
    ],
    [COLORS.GREEN]: [
      { points: 0, cost: { red: 3 } },
      { points: 0, cost: { white: 2, blue: 1 } },
      { points: 0, cost: { blue: 2, red: 2 } },
      { points: 0, cost: { white: 1, blue: 3, green: 1 } },
      { points: 0, cost: { blue: 1, red: 2, black: 2 } },
      { points: 0, cost: { white: 1, blue: 1, red: 1, black: 1 } },
      { points: 0, cost: { white: 1, blue: 1, red: 1, black: 2 } },
      { points: 1, cost: { black: 4 } },
    ],
    [COLORS.RED]: [
      { points: 0, cost: { white: 3 } },
      { points: 0, cost: { blue: 2, green: 1 } },
      { points: 0, cost: { white: 2, red: 2 } },
      { points: 0, cost: { white: 2, green: 1, black: 2 } },
      { points: 0, cost: { white: 1, red: 1, black: 3 } },
      { points: 0, cost: { white: 1, blue: 1, green: 1, black: 1 } },
      { points: 0, cost: { white: 1, blue: 1, green: 1, black: 2 } },
      { points: 1, cost: { white: 4 } },
    ],
    [COLORS.BLACK]: [
      { points: 0, cost: { green: 3 } },
      { points: 0, cost: { green: 2, red: 1 } },
      { points: 0, cost: { white: 2, green: 2 } },
      { points: 0, cost: { white: 2, blue: 2, red: 1 } },
      { points: 0, cost: { green: 1, red: 3, black: 1 } },
      { points: 0, cost: { white: 1, blue: 1, green: 1, red: 1 } },
      { points: 0, cost: { white: 1, blue: 2, green: 1, red: 1 } },
      { points: 1, cost: { blue: 4 } },
    ],
  },
  [ROWS.TWO]: {
    [COLORS.WHITE]: [
      { points: 1, cost: { green: 3, red: 2, black: 2 }, version: low },
      { points: 1, cost: { white: 2, blue: 3, red: 3 }, version: low },
      { points: 2, cost: { green: 1, red: 4, black: 2 }, version: low },
      { points: 2, cost: { red: 5, black: 3 }, version: high },
      { points: 2, cost: { red: 5 }, version: high },
      { points: 3, cost: { white: 6 }, version: high },
    ],
    [COLORS.BLUE]: [
      { points: 1, cost: { blue: 2, green: 2, red: 3 }, version: low },
      { points: 1, cost: { blue: 2, green: 3, black: 3 }, version: low },
      { points: 2, cost: { white: 5, blue: 3 }, version: low },
      { points: 2, cost: { white: 2, red: 1, black: 4 }, version: high },
      { points: 2, cost: { blue: 5 }, version: high },
      { points: 3, cost: { blue: 6 }, version: high },
    ],
    [COLORS.GREEN]: [
      { points: 1, cost: { white: 2, blue: 3, black: 2 }, version: low },
      { points: 1, cost: { white: 3, green: 2, red: 3 }, version: low },
      { points: 2, cost: { white: 4, blue: 2, black: 1 }, version: low },
      { points: 2, cost: { blue: 5, green: 3 }, version: high },
      { points: 2, cost: { green: 5 }, version: high },
      { points: 3, cost: { green: 6 }, version: high },
    ],
    [COLORS.RED]: [
      { points: 1, cost: { white: 2, red: 2, black: 3 }, version: low },
      { points: 1, cost: { blue: 3, red: 2, black: 3 }, version: low },
      { points: 2, cost: { white: 1, blue: 4, green: 2 }, version: low },
      { points: 2, cost: { white: 3, black: 5 }, version: high },
      { points: 2, cost: { black: 5 }, version: high },
      { points: 3, cost: { red: 6 }, version: high },
    ],
    [COLORS.BLACK]: [
      { points: 1, cost: { white: 3, blue: 2, green: 2 }, version: low },
      { points: 1, cost: { white: 3, green: 3, black: 2 }, version: low },
      { points: 2, cost: { blue: 1, green: 4, red: 2 }, version: low },
      { points: 2, cost: { green: 5, red: 3 }, version: high },
      { points: 2, cost: { white: 5 }, version: high },
      { points: 3, cost: { black: 6 }, version: high },
    ],
  },
  /* eslint-disable */
  [ROWS.THREE]: {
    [COLORS.WHITE]: [
      { points: 3, cost: { blue: 3, green: 3, red: 5, black: 3 }, version: high },
      { points: 4, cost: { white: 3, black: 7 }, version: low },
      { points: 4, cost: { white: 3, red: 3, black: 6 }, version: low },
      { points: 5, cost: { black: 7 }, version: high },
    ],
    [COLORS.BLUE]: [
      { points: 3, cost: { white: 3, green: 3, red: 3, black: 5 }, version: low },
      { points: 4, cost: { white: 7 }, version: low },
      { points: 4, cost: { white: 6, blue: 3, black: 3 }, version: high },
      { points: 5, cost: { white: 7, blue: 3 }, version: high },
    ],
    [COLORS.GREEN]: [
      { points: 3, cost: { white: 5, blue: 3, red: 3, black: 3 }, version: high },
      { points: 4, cost: { white: 3, blue: 6, green: 3 }, version: low },
      { points: 4, cost: { blue: 7 }, version: low },
      { points: 5, cost: { blue: 7, green: 3 }, version: high },
    ],
    [COLORS.RED]: [
      { points: 3, cost: { white: 3, blue: 5, green: 3, black: 3 }, version: low },
      { points: 4, cost: { green: 7 }, version: low },
      { points: 4, cost: { blue: 3, green: 6, red: 3 }, version: high },
      { points: 5, cost: { green: 7, red: 3 }, version: high },
    ],
    [COLORS.BLACK]: [
      { points: 3, cost: { white: 3, blue: 3, green: 5, red: 3 }, version: high },
      { points: 4, cost: { green: 3, red: 6, black: 3 }, version: low },
      { points: 4, cost: { red: 7 }, version: low },
      { points: 5, cost: { red: 7, black: 3 }, version: high },
    ],
    /* eslint-enable */
  },
};
