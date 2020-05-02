import React from 'react';
import { Circle } from 'react-konva';
import {CHIP, CHIP_COLOR} from "../../../utils/constants";
import {getChipAttrs} from "../../../utils/utils";

const Chip = ({ name }) => {
    const attrs = getChipAttrs(name);
    return <Circle radius={CHIP.radius} fill={CHIP_COLOR.BLACK} {...attrs} />
};

export default Chip;