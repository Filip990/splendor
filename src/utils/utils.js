import {
  CARD_COLOR,
  CARD_HEIGHT,
  CARD_WIDTH,
  CHIP_COLOR,
  CHIP_RADIUS,
} from "./constants";

export function getChipAttrs(name) {
  const startingPositionX = 20;
  const distance = 10;
  const chipDistance = distance + CHIP_RADIUS * 2;

  switch (name) {
    case CHIP_COLOR.BLACK:
      return {
        // fill: "black",
        x: startingPositionX,
        y: 0,
      };
    case CHIP_COLOR.RED:
      return {
        fill: "red",
        x: startingPositionX,
        y: chipDistance,
      };
    case CHIP_COLOR.BLUE:
      return {
        fill: "blue",
        x: startingPositionX,
        y: chipDistance * 2,
      };
    case CHIP_COLOR.GREEN:
      return {
        fill: "green",
        x: startingPositionX,
        y: chipDistance * 3,
      };
    case CHIP_COLOR.WHITE:
      return {
        fill: "white",
        x: startingPositionX,
        y: chipDistance * 4,
        strokeWidth: 2,
        stroke: "black",
      };
    case CHIP_COLOR.GOLD:
      return {
        fill: "yellow",
        x: startingPositionX,
        y: chipDistance * 5,
      };
    default:
      return {};
  }
}

export function getCardsAttrs(type) {
  const startingPositionX = 10;
  const cardDistance = 10;
  const commonProps = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    name: "Card",
  };

  switch (type) {
    case CARD_COLOR.GREEN:
      return {
        fill: "green",
        name: commonProps.name,
        x: startingPositionX,
        y: (CARD_HEIGHT + cardDistance) * 3 - cardDistance,
        width: commonProps.width,
        height: commonProps.height,
      };
    case CARD_COLOR.YELLOW:
      return {
        fill: "yellow",
        name: commonProps.name,
        x: startingPositionX,
        y: (CARD_HEIGHT + cardDistance) * 2 - cardDistance,
        width: commonProps.width,
        height: commonProps.height,
      };
    case CARD_COLOR.BLUE:
      return {
        fill: "blue",
        name: commonProps.name,
        x: startingPositionX,
        y: CARD_HEIGHT,
        width: commonProps.width,
        height: commonProps.height,
      };
    case CARD_COLOR.ROYAL:
      return {
        fill: "red",
        name: "Royal",
        x: startingPositionX,
        y: 0,
        width: CARD_WIDTH,
        height: commonProps.height - 40,
      };
    default:
      return {};
  }
}
