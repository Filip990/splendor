import React from "react";
import { Group } from "react-konva";
import {CHIP_SETUP} from "../../../utils/enums";
import Chip from "../Chip/Chip";

const ChipsContainer = () => {
  const chips = Object.keys(CHIP_SETUP).map(name => <Chip name={name} />);

  return (
    <Group
      x={window.innerWidth - 200}
      y={100}
      width={100}
      strokeWidth={5}
      stroke="black"
      height={450}
    >
      {chips}
    </Group>
  );
};

export default ChipsContainer;
