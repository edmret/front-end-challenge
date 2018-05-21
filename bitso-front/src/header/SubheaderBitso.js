import React, { Component } from 'react';

export class SubheaderBitso extends Component{
    render(){
        return (
            <section className="subheader">
                <ul>
                    <li> BTC/MXN
                        <ul>
                            <li>XRP/MXN</li>
                        </ul>
                    </li>
                    <li>
                        <dl>
                            <dt>
                                Volumen 24h.
                            </dt>
                            <dd>
                                170.5405818 BTC 
                            </dd>
                            <dt>
                                Max.
                            </dt>
                            <dd>
                                304,934.23 MXN 
                            </dd>
                            <dt>
                                Min.
                            </dt>
                            <dd>
                                274,934.23 MXN 
                            </dd>
                            <dt>
                                Valoración 
                            </dt>
                            <dd>
                                +4,061.68.MXN (1.4%) 
                            </dd>
                        </dl>
                    </li>
                </ul>
            </section>
        );
    }
}