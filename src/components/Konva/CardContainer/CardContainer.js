import React from 'react';
import useImage from 'use-image';
import { Group } from 'react-konva';

/* LEVEL 1 */
import background1 from 'assets/cards/level_1/background.png';
import white1 from 'assets/cards/level_1/white.png';
import blue1 from 'assets/cards/level_1/blue.png';
import green1 from 'assets/cards/level_1/green.png';
import red1 from 'assets/cards/level_1/red.png';
import black1 from 'assets/cards/level_1/black.png';
/* LEVEL 2 */
import background2 from 'assets/cards/level_2/background.png';
import white2a from 'assets/cards/level_2/white_1.png';
import white2b from 'assets/cards/level_2/white_2.png';
import blue2a from 'assets/cards/level_2/blue_1.png';
import blue2b from 'assets/cards/level_2/blue_2.png';
import green2a from 'assets/cards/level_2/green_1.png';
import green2b from 'assets/cards/level_2/green_2.png';
import red2a from 'assets/cards/level_2/red_1.png';
import red2b from 'assets/cards/level_2/red_2.png';
import black2a from 'assets/cards/level_2/black_1.png';
import black2b from 'assets/cards/level_2/black_2.png';
/* LEVEL 3 */
import background3 from 'assets/cards/level_3/background.png';
import white3a from 'assets/cards/level_3/white_1.png';
import white3b from 'assets/cards/level_3/white_2.png';
import blue3a from 'assets/cards/level_3/blue_1.png';
import blue3b from 'assets/cards/level_3/blue_2.png';
import green3a from 'assets/cards/level_3/green_1.png';
import green3b from 'assets/cards/level_3/green_2.png';
import red3a from 'assets/cards/level_3/red_1.png';
import red3b from 'assets/cards/level_3/red_2.png';
import black3a from 'assets/cards/level_3/black_1.png';
import black3b from 'assets/cards/level_3/black_2.png';

import { ROWS } from 'globalConstants';

import Card from 'components/Konva/Card/Card';

const CARD_HEIGHT = 170;
const CARD_SPACING = 20;
const verticalDistance = CARD_HEIGHT + CARD_SPACING;

const cardCoords = {
  [ROWS.ONE]: { x: 20, y: 0 },
  [ROWS.TWO]: { x: 20, y: verticalDistance },
  [ROWS.THREE]: { x: 20, y: verticalDistance * 2 },
};

const CardContainer = () => {
  const [backgroundRow1] = useImage(background1);
  const [backgroundRow2] = useImage(background2);
  const [backgroundRow3] = useImage(background3);

  const cardBackgrounds = {
    [ROWS.ONE]: backgroundRow1,
    [ROWS.TWO]: backgroundRow2,
    [ROWS.THREE]: backgroundRow3,
  };

  const cards = Object.values(ROWS).map(row => (
    <Card
      key={row}
      image={cardBackgrounds[row]}
      scale={{ x: 0.3, y: 0.3 }}
      {...cardCoords[row]}
    />
  ));

  return (
    <Group x={100} y={100}>
      {cards}
    </Group>
  );
};

export default CardContainer;
