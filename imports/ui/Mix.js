import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'],
  datasets: [{
      label: 'Demand (kW)',
      type:'line',
      data: [140, 138, 145, 180, 210, 300, 285, 282, 286, 240, 190, 140],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2'
    },{
      type: 'bar',
      label: 'Usage (kWh)',
      data: [19701, 20095, 19306, 25611, 31521, 39402, 37431, 37581, 33823, 32003, 21102, 19212],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
      yAxisID: 'y-axis-1'
    }]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'label',
    callbacks: {
    callback: function(value, index, values) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
           callback: function(value, index, values) {
             return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
           }
         },
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("", 100, 100);
    }
}];

export default class MixExample extends React.Component {
  render() {
    return (
      <div>
        <h2>Usage Data</h2>
        <h6>Monthly Demand (kW) and Usage (kWh), 2016</h6>
        <Bar
          data={data}
          options={options}
          plugins={plugins}
        />
      </div>
    );
  }
};
