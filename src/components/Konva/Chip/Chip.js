import React from 'react';
import { Circle } from 'react-konva';

const Chip = ({ color, image, x, y, scale }) => (
  <Circle
    x={x}
    y={y}
    scale={scale}
    id={color}
    fillPatternImage={image}
    width={256}
    height={256}
    fillPatternRepeat="no-repeat"
    fillPatternOffset={{ x: 128, y: 128 }}
  />
);

export default Chip;
