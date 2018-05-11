import React from "react";
import Chart from "chart.js";
import { Line } from 'react-chartjs-2';

// var LineChart = require("react-chartjs").Line;


function Body() {
    return (
        <div>

        </div>
    )
}


const barGraph = (props) => {


    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    export default body extends React.createClass({
        displayName: 'LineExample',

        render() {
            return (
                <div>
                    <h2>Line Example</h2>
                    <Line data={data} />
                </div>
            );
        }
    });
export default Body;


