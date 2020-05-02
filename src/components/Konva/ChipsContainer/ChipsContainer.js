import React from 'react';
import useImage from 'use-image';
import { Group } from 'react-konva';

import whiteImg from 'assets/chips/white.png';
import blueImg from 'assets/chips/blue.png';
import greenImg from 'assets/chips/green.png';
import redImg from 'assets/chips/red.png';
import blackImg from 'assets/chips/black.png';
import goldImg from 'assets/chips/gold.png';

import { CHIP_SETUP } from 'utils/constants';
import Chip from '../Chip/Chip';

const CHIP_COLORS = {
  WHITE: 'WHITE',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  RED: 'RED',
  BLACK: 'BLACK',
  GOLD: 'GOLD',
};

const chipRadius = 80;
const chipDistance = 20;
const verticalDistance = chipRadius + chipDistance;

const chipCoords = {
  [CHIP_COLORS.WHITE]: { x: 20, y: 0 },
  [CHIP_COLORS.BLUE]: { x: 20, y: verticalDistance },
  [CHIP_COLORS.GREEN]: { x: 20, y: verticalDistance * 2 },
  [CHIP_COLORS.RED]: { x: 20, y: verticalDistance * 3 },
  [CHIP_COLORS.BLACK]: { x: 20, y: verticalDistance * 4 },
  [CHIP_COLORS.GOLD]: { x: 20, y: verticalDistance * 5 },
};

const ChipsContainer = () => {
  const [white] = useImage(whiteImg);
  const [blue] = useImage(blueImg);
  const [green] = useImage(greenImg);
  const [red] = useImage(redImg);
  const [black] = useImage(blackImg);
  const [gold] = useImage(goldImg);

  const chipImages = {
    [CHIP_COLORS.WHITE]: white,
    [CHIP_COLORS.BLUE]: blue,
    [CHIP_COLORS.GREEN]: green,
    [CHIP_COLORS.RED]: red,
    [CHIP_COLORS.BLACK]: black,
    [CHIP_COLORS.GOLD]: gold,
  };

  const chips = Object.keys(CHIP_SETUP).map(color => (
    <Chip
      key={color}
      color={color}
      image={chipImages[color.toUpperCase()]}
      {...chipCoords[color.toUpperCase()]}
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
