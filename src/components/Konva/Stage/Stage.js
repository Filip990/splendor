
import React, { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Card from "../Card/Card";
import Chip from "../Chip/Chip";
import {CARD, CHIP_SETUP, STAGE_CONTAINER} from "../../../utils/enums";

import ChipsContainer from "../ChipsContainer/ChipsContainer";
import CardContainer from "../CardContainer/CardContainer";

import { CARD } from "../../../utils/enums";

const StageContainer = () => {
  const stageRef = useRef(null);


  return (
    <div id={STAGE_CONTAINER}>
      <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
        <Layer>
     {Object.keys(CHIP_SETUP).map(name => <Chip name={name} />)}
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
