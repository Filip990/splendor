import React from "react";
import { Group } from "react-konva";
import {CHIP_SETUP} from "../../../utils/constants";
import Chip from "../Chip/Chip";

const ChipsContainer = () => {
  const chips = Object.keys(CHIP_SETUP).map(name => <Chip name={name} />);

  return (
    <Group
      x={window.innerWidth - 300}
      y={130}
    >
      {chips}
    </Group>
  );
};

export default ChipsContainer;
