import React, {Component} from 'react';

export class ChartPanel extends Component{
    render (){
        return(
            <section>
                <div className="toolbar">
                    
                    <div class="option-toolbar">
                        <ul className="chart-selection">
                            <li>Candles</li>
                            <li>Deep Market</li>
                        </ul>
                    </div>

                    <div class="option-toolbar">
                        Periodo
                        <div className="select">
                            3d
                            <ul>
                                <li>3d</li>
                                <li>5d</li>
                            </ul>
                        </div>
                    </div>

                    <div class="option-toolbar">
                        Intervalo
                        <div className="select">
                            1h
                            <ul>
                                <li>30min</li>
                                <li>5min</li>
                                <li>1min</li>
                            </ul>
                        </div>
                    </div>

                    <div className="zoom-buttons">
                        <button type="button">-</button>
                        <button type="button">+</button>
                    </div>
                </div>
                <div className="chart-panel">
                
                </div>
            </section>
        );
    }
}