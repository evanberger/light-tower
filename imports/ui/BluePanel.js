import React from 'react';
import {Bar} from 'react-chartjs-2';


export default class BluePanel extends React.Component {
  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h6>REAL-TIME PRICE</h6>
            <h1>
              <small><span className="glyphicon glyphicon-chevron-up"></span></small>
              0.1%
          </h1>
          <span>YTD vs. 2016td</span>
          </div>
          <div id="dashboard-panel-body" className="panel body">
            <p><i>First six months: 3.74 cents</i></p>
            <p><i>Six months 2016: 3.71 cents</i></p>
            <p><small>Approx. 8-12% lower than fixed price (4.8-5.0 cents)</small></p>
          </div>
        </div>
      </div>
    );
  }
};
