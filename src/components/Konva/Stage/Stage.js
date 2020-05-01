import React, { useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Card from "../Card/Card";
import Chip from "../Chip/Chip";
import {CARD, CHIP_SETUP, STAGE_CONTAINER} from "../../../utils/enums";


const StageContainer = () => {
    const stageRef = useRef(null);
    const onCardClick = ({ evt, target }) => {

        if (target.getAttr('name') === CARD.name) {
            const current = target.fill();

            if (current === 'blue') {
                target.fill('green');
            } else {
                target.fill('blue');
            }

            stageRef.current.batchDraw();
        }
    };

    return (
        <div id={STAGE_CONTAINER}>
            <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
                <Layer>
                    <Card x={100} y={100} onClick={onCardClick}/>
                    {Object.keys(CHIP_SETUP).map(name => <Chip name={name} />)}
                </Layer>
            </Stage>;
        </div>
    )
};

export default StageContainer;