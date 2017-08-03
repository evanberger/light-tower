import React from 'react';
import Dashboard from './Dashboard';
import TitleBar from './TitleBar';
import SimplePie from './SimplePie';
import StackedBar from './StackedBar';
import SimpleAreaChart from './SimpleAreaChart';
import DashboardPills from './DashboardPills';
import AddInvoice from './AddInvoice';
import MixExample from './Mix';
import StackedBarCJS from './StackedBarCJS';
import BluePanel from './BluePanel';
import GreenPanel from './GreenPanel';
import {Link} from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ReactPDF from 'react-pdf';

var offsetStyle = {marginLeft: '80px'};
var offsetStyle2 = {marginLeft: '92px', color: 'grey'};
var offsetStyle2 = {marginLeft: '62px'};

export default class Home extends React.Component{
  state = {
    value: 1, pageIndex: null, pageNumber: null, total: null
  };
  handleChange = (event, index, value) => this.setState({value});
  onDocumentLoad({ total }) {
    this.setState({ total });
  }
  onPageLoad({ pageIndex, pageNumber }) {
    this.setState({ pageIndex, pageNumber });
  }
  render() {
      return (
        <div>
          <TitleBar />
          <div className="row">
            <div className="col-md-2 hidden-sm hidden-xs">
              <Dashboard />
            </div>
            <div className="col-md-10 col-sm-12">
              <div className="container">
                <div className="row">
                  <div className="page-header">
                    <h1>Loyola High School <small>Wilmette, IL</small></h1>
                  </div>
                </div>
                </div>
              <div className="row">
                <div className="col-xs-10 col-md-5">
                  <MixExample />
                </div>
                <div className="col-xs-10 col-md-5">
                  <StackedBarCJS />
                </div>
              </div>
              <div className="row">
                <div className="container">
                  <div className="col-xs-10 col-md-6 col-lg`-4">
                    <GreenPanel />
                  </div>
                </div>
                <div className="container">
                  <div className="col-xs-10 col-md-6 col-lg`-4">
                    <BluePanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <img src="../../public/logo.png" />
            {/* <ReactPDF
                file="../public/AEP2017.pdf"
                pageIndex={1}
                onDocumentLoad={this.onDocumentLoad}
                onPageLoad={this.onPageLoad}
              />
            <p>Page {this.state.pageNumber} of {this.state.total}</p> */}
          </div>
          <div className="container">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    May 2016
                  </a>
                </li>
                <li className="active"><a href="#">June 2016</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    July 2016
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
  }
};


/* <div className="container">
  <SelectField
    floatingLabelText="Frequency"
    value={this.state.value}
    onChange={this.handleChange}
  >
    <MenuItem value={1} primaryText="January" />
    <MenuItem value={2} primaryText="February" />
    <MenuItem value={3} primaryText="March" />
    <MenuItem value={4} primaryText="April" />
    <MenuItem value={5} primaryText="May" />
    <MenuItem value={6} primaryText="June" />
    <MenuItem value={7} primaryText="July" />
    <MenuItem value={8} primaryText="August" />
    <MenuItem value={9} primaryText="September" />
    <MenuItem value={10} primaryText="October" />
    <MenuItem value={11} primaryText="November" />
    <MenuItem value={12} primaryText="December" />
  </SelectField>
</div> */
