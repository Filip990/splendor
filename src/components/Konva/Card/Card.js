import React from 'react';
import { Rect } from 'react-konva';

const Card = ({ onClick, color, cost, points, image, x, y, scale }) => {
  const handleCardClick = () => onClick({ cost, points });

  return (
    <Rect
      onClick={handleCardClick}
      x={x}
      y={y}
      scale={scale}
      id={color}
      fillPatternImage={image}
      width={369}
      height={512}
      fillPatternRepeat="no-repeat"
    />
  );
};

export default Card;
