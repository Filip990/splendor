import React from 'react';
import useImage from 'use-image';
import { Group } from 'react-konva';

import whiteImg from 'assets/chips/white.png';
import blueImg from 'assets/chips/blue.png';
import greenImg from 'assets/chips/green.png';
import redImg from 'assets/chips/red.png';
import blackImg from 'assets/chips/black.png';
import goldImg from 'assets/chips/gold.png';

import { COLORS } from 'globalConstants';

import Chip from 'components/Konva/Chip/Chip';

const CHIP_RADIUS = 80;
const CHIP_SPACING = 20;
const verticalDistance = CHIP_RADIUS + CHIP_SPACING;

const chipCoords = {
  [COLORS.WHITE]: { x: 20, y: 0 },
  [COLORS.BLUE]: { x: 20, y: verticalDistance },
  [COLORS.GREEN]: { x: 20, y: verticalDistance * 2 },
  [COLORS.RED]: { x: 20, y: verticalDistance * 3 },
  [COLORS.BLACK]: { x: 20, y: verticalDistance * 4 },
  [COLORS.GOLD]: { x: 20, y: verticalDistance * 5 },
};

const ChipsContainer = () => {
  const [white] = useImage(whiteImg);
  const [blue] = useImage(blueImg);
  const [green] = useImage(greenImg);
  const [red] = useImage(redImg);
  const [black] = useImage(blackImg);
  const [gold] = useImage(goldImg);

  const chipImages = {
    [COLORS.WHITE]: white,
    [COLORS.BLUE]: blue,
    [COLORS.GREEN]: green,
    [COLORS.RED]: red,
    [COLORS.BLACK]: black,
    [COLORS.GOLD]: gold,
  };

  const chips = Object.values(COLORS).map(color => (
    <Chip
      key={color}
      color={color}
      image={chipImages[color]}
      {...chipCoords[color]}
      scale={{ x: 0.3, y: 0.3 }}
    />
  ));

  return (
    <Group x={window.innerWidth - 200} y={130}>
      {chips}
    </Group>
  );
};

export default ChipsContainer;
