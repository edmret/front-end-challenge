import React, { Component } from 'react';


export class LastTrades extends Component{
    render (){
        return (
            <aside>
                <table>
                    <caption>
                        <h2>últimos trades</h2>
                    </caption>
                    <theader>
                        <tr>
                            <th>Hora</th>
                            <th>MXN Precio</th>
                            <th>BTC Monto</th>
                        </tr>
                    </theader>
                    <tbody>
                        <tr>
                            <td>16:10:25</td>
                            <td>319.149.99</td>
                            <td>1.090484</td>
                        </tr>
                        <tr>
                            <td>16:10:25</td>
                            <td>319.149.99</td>
                            <td>1.090484</td>
                        </tr>
                        <tr>
                            <td>16:10:25</td>
                            <td>319.149.99</td>
                            <td>1.090484</td>
                        </tr>
                        <tr>
                            <td>16:10:25</td>
                            <td>319.149.99</td>
                            <td>1.090484</td>
                        </tr>
                        <tr>
                            <td>16:10:25</td>
                            <td>319.149.99</td>
                            <td>1.090484</td>
                        </tr>
                    </tbody>
                </table>
                
                table
            </aside>
        );
    }
}