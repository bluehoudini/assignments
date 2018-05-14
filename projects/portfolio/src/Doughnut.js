import React from "react";
import Chart from "chart.js";
import {Doughnut} from 'react-chartjs-2';

// var LineChart = require("react-chartjs").Line;


// function Body() {
//     return (
//         <div>

//         </div>
//     )
// }


const DoughnutGraph = (props) => { 
    
    const data = {
        labels: [
            'Javascript',
            'HTML/CSS',
            'UX/UI',
            'Back end'
        ],
        datasets: [{
            data: [400, 200, 100, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'rgb(90, 208, 84)'

            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            'rgb(90, 208, 84)'
            ]
        }]
    };
    

    return (

        <Doughnut
        data = {data}
        options = {{
            maintainAspectRatio: false
        }}
        />
    )
    
}
    

    

export default DoughnutGraph;


