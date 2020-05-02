import React, { useRef } from "react";
import { Stage, Layer } from "react-konva";
import { STAGE_CONTAINER } from "../../../utils/constants";

import ChipsContainer from "../ChipsContainer/ChipsContainer";
import CardContainer from "../CardContainer/CardContainer";
import PlayerContainer from "../PlayerContainer/PlayerContainer";

const StageContainer = () => {
  const stageRef = useRef(null);

  const activePlayers = [
    {
      id: 1,
      name: "Kulturni",
      x: 100,
      y: 0,
      width: window.innerWidth - 200,
      height: 90,
    },
    {
      id: 2,
      name: "Djema",
      x: 100,
      y: window.innerHeight - 90,
      width: window.innerWidth - 200,
      height: 90,
    },

    {
      id: 3,
      name: "Djemaish",
      x: 0,
      y: 0,
      width: 100,
      height: window.innerHeight,
    },
    {
      id: 4,
      name: "Jelen",
      x: window.innerWidth - 100,
      y: 0,
      width: 100,
      height: window.innerHeight,
    },
  ];

  return (
    <div id={STAGE_CONTAINER}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          {activePlayers.map((player) => (
            <PlayerContainer key={player.id} {...player} />
          ))}
          <CardContainer />
          <ChipsContainer />
        </Layer>
      </Stage>
    </div>
  );
};

export default StageContainer;
