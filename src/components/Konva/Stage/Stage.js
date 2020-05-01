import React, { useRef } from "react";
import { Stage, Layer } from "react-konva";
import Chip from "../Chip/Chip";
import { CHIP_SETUP, STAGE_CONTAINER } from "../../../utils/enums";

import ChipsContainer from "../ChipsContainer/ChipsContainer";
import CardContainer from "../CardContainer/CardContainer";

const StageContainer = () => {
  const stageRef = useRef(null);

  return (
    <div id={STAGE_CONTAINER}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          {Object.keys(CHIP_SETUP).map((name) => (
            <Chip name={name} />
          ))}
          {/* main game container */}
          <CardContainer />
          {/* chips container */}
          <ChipsContainer />
        </Layer>
      </Stage>
      ;
    </div>
  );
};

export default StageContainer;
