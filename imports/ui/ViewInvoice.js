// import React from 'react';
// import {createContainer} from 'meteor/react-meteor-data';
// import {Meteor} from 'meteor/meteor';
// import {Link} from 'react-router';
// import {Clients} from './../api/clients';
// import TitleBar from './TitleBar';
// import Dashboard from './Dashboard';
//
// // Meteor Session:
// // import {Session} from 'meteor/session';
// // Session.set('name', 'Evan Berger');
// // const name = Session.get('name');
// // console.log('Name: ', name);
//
// class ViewInvoice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clients: []
//     };
//   }
//   render() {
// // This should be wired up to the AddInvoice
//       return (
//         <div>
//           <TitleBar />
//           <div className="row">
//             <div className="col-md-2 col-sm-1">
//               <Dashboard />
//             </div>
//             <div className="col-md-10 col-sm-11">
//               <div className="row">
//                 <div className="page-header">
//                   <h1>Loyola High School <small>Wilmette, IL</small></h1>
//                 </div>
//               </div>
//               <div className="row">
//                 <table className="table table-condensed table-hover">
//                  <thead>
//                    <tr>
//                      <th></th>
//                      <th>Line Item</th>
//                      <th>Amount</th>
//                      <th>Cost per Unit</th>
//                      <th>Total</th>
//                    </tr>
//                  </thead>
//                  <tbody>
//                    <tr className="home-divider">
//                      <td colSpan="8"><b>USAGE <small>& MISCELLANEOUS</small></b></td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Service Charge</td>
//                      <td></td>
//                      <td></td>
//                      <td>$59.24</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Fuel Charge</td>
//                      <td>240,000 kWh</td>
//                      <td>8.694 cents/kWh</td>
//                      <td>$20,865.60</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Systems Benefit Charge</td>
//                      <td>240,000 kWh</td>
//                      <td>0.04 cents/kWh</td>
//                      <td>$96.00</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Enviromental Recovery Rider</td>
//                      <td>240,000 kWh</td>
//                      <td>0.79 cents/kWh</td>
//                      <td>$1,896.00</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Subtotal, Usage</td>
//                      <td></td>
//                      <td></td>
//                      <td>$22.867.60</td>
//                    </tr>
//                    <tr className="home-divider">
//                      <td colSpan="8"><b>DEMAND</b></td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Summer Demand, PSE&G</td>
//                      <td>178.80 kW</td>
//                      <td>$8.173/kW</td>
//                      <td>$1,347.04</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Annual Demand, PSE&G</td>
//                      <td>178.80 kW</td>
//                      <td>$4.404/kW</td>
//                      <td>$644.08</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>PJM Capacity</td>
//                      <td>118.20 kW</td>
//                      <td>$5.39/kW</td>
//                      <td>$671.27</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>PJM Network Transmission</td>
//                      <td>114.00 kW</td>
//                      <td>$7.16/kW</td>
//                      <td>$899.61</td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Subtotal, Demand</td>
//                      <td></td>
//                      <td></td>
//                      <td>$4,360.28</td>
//                    </tr>
//                    <tr className="divider">
//                      <td> </td>
//                      <td> </td>
//                      <td> </td>
//                      <td> </td>
//                      <td> </td>
//                    </tr>
//                    <tr>
//                      <td></td>
//                      <td>Total</td>
//                      <td></td>
//                      <td></td>
//                      <td>$27,128.88</td>
//                    </tr>
//                  </tbody>
//                 </table>
//               </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
// };
//
// export default createContainer(() => {
//   Meteor.subscribe('clientsPub');
//   // Ruslan: this is where the Subscription to the individual client should go
//   return { clients: Clients.find({}).fetch() };
// }, ClientList);
