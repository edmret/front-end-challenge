import React, { Component } from 'react';

import "./Icon.scss";

export function Icon(props){
    return (
        <picture className="icon">
            <source type="image/svg+xml" srcset={props.image.sgv} />
            <img src={props.image._1x} srcset={props.image._2x + ' 2x'} alt="Bitso" />
        </picture>
    );
}