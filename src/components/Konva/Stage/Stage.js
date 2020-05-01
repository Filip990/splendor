import React, { useRef } from "react";
import { Stage, Layer } from "react-konva";

import ChipsContainer from "../ChipsContainer/ChipsContainer";
import CardContainer from "../CardContainer/CardContainer";

import { CARD } from "../../../utils/enums";

const StageContainer = () => {
  const stageRef = useRef(null);

  return (
    <div id={"stageContainer"}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
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
