import React, { Component } from 'react';

import {Logo} from '../icons/Logo';
import {DropDownArrow} from '../icons/DropDownArrow';

import './HeaderBitso.scss';

export class HeaderBitso extends Component{
    render (){
        return (
            <header>
                <h1 className="logo">
                    <a href="#">
                        <Logo />
                        <span>Bitso</span> Exchange
                    </a>
                </h1>
                <section className="header-info">
                    <section className="unity-conversion">1BTC = 000.000.00 MXN</section>
                    <nav>
                        
                        <ul>
                            <li>
                                <h4>Wallet <DropDownArrow /></h4>
                                <ul>
                                    <li>wallet 2</li>
                                    <li>wallet 3</li>
                                    <li>wallet 4</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Excange <DropDownArrow /></h4>
                                <ul>
                                    <li>Excange 2</li>
                                    <li>Excange 3</li>
                                    <li>Excange 4</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Ayuda <DropDownArrow /></h4>
                            </li>
                            <li>
                                
                                <h4>
                                    <img src="#" />
                                    Usuario
                                </h4>
                                <ul>
                                    <li>Usuario 2</li>
                                    <li>Usuario 3</li>
                                    <li>Usuario 4</li>
                                </ul>
                            </li>
                            <li>
                                <label for="notifications">Recibir notificaciones</label>
                                <input type="checkbox" name="notifications" id="notifications" />
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        );
    }
}