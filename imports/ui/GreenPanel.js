import React from 'react';
import {Bar} from 'react-chartjs-2';


export default class GreenPanel extends React.Component {
  render() {
    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h6>ELECTRICITY CONSUMPTION</h6>
            <h1>
              <small><span className="glyphicon glyphicon-chevron-down"></span></small>
              3.1%
          </h1>
          <span>last month vs. June 2016</span>
          </div>
          <div id="dashboard-panel-body" className="panel body">
            <p><i>June 2017: 174,660 kWh</i></p>
            <p><i>June 2016: 180,209 kWh</i></p>
            <p><small>4.6% more efficient adjusted for weather</small></p>
          </div>
        </div>
      </div>
    );
  }
};
