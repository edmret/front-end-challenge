import React, { Component } from 'react';

import {Icon} from "./Icon";

import _1xLogo from '../images/1x/bitso_logo.png';
import _2xLogo from '../images/2x/bitso_logo@2x.png';
import svgLogo from '../images/SVG/bitso_logo.svg';

const image = {
    svg: svgLogo,
    _1x: _1xLogo,
    _2x: _2xLogo
};

export function Logo(){
    return (
        <Icon image={image} />
    );
}