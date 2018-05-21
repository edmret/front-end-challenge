import React, { Component } from 'react';

import {Icon} from "./Icon";

import _1xLogo from '../images/1x/icon_dropdown.png';
import _2xLogo from '../images/2x/icon_dropdown@2x.png';
import svgLogo from '../images/SVG/icon_dropdown.svg';

const image = {
    svg: svgLogo,
    _1x: _1xLogo,
    _2x: _2xLogo
};

export function DropDownArrow(){
    return (
        <Icon image={image} />
    );
}