import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'],
  datasets:[
      {
        label: 'Demand',
          data: [1960, 1932, 2030, 2520, 2940, 4200, 3990, 3948, 4004, 3360, 2660, 1960],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)'
      },
      {
          label: 'Usage',
          data:  [1280.56,	1306.17, 1254.95,	1664.73,	2048.90,	2561.13,
            2433.07,	2442.805,	2198.52,	2080.19,	1371.63, 1248.78],
            backgroundColor: 'rgba(60,186,159,0.2)',
            borderColor: "rgba(60,186,159,1)",
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(60,186,159,0.4)',
            hoverBorderColor: 'rgba(60,186,159,1)'
      }
    ],

    };

 const options = {
       scales: {
            xAxes: [{
              ticks: {
                 callback: function(value, index, values) {
                   return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
                 }
               },
                stacked: true
            }],
            yAxes: [{
              ticks: {
                 callback: function(value, index, values) {
                   return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
                 }
               },
                stacked: true
            }]
        }
    };

export default class StackedBarCJS extends React.Component {
  render() {
    return (
      <div>
        <h2>2016 Electric Spend By Month</h2>
        <h6>Total Annual Spend: $XX,000. Demand accounts for 58%, Usage for 41%.</h6>
        <Bar
          data={data}
          options={options}
          width={100}
          height={50}
        />
      </div>
    );
  }
};
