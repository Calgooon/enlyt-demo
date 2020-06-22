import React from 'react';
import Button from './components/Button';
import BmiRecords from './components/BmiRecords'
import Loading from './components/Loading'

let App = () => (
  <div>
     <Button />
     <Loading />
     <BmiRecords />
  </div>
);
export default App;

/*
import React, { Component } from 'react';
import './App.css';
import GetBmis from './components/GetBmis/GetBmis'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoute: "home"
    }
  }

  changeToGetBmis = () => {
    this.setState({activeRoute: "getBmis"});
  }

  goHome = () => {
    this.setState({activeRoute: "home"})
  }

  render() {
    const activeRoute = this.state.activeRoute;
    return (
        <div className="container-fluid vh-100">
          {activeRoute === "home" &&
          <div>
            <div className="card mt-4">
              <div className="card-body">
                <h2 className="card-title text-center">Enlyt Demo App</h2>
                <p className="card-text">Within this app you can upload a persons height and weight and it will send it to the server to calculate the BMI.
                  It then saves these records and you can query them on the other page.</p>
              </div>
            </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h4 className="card-title">Go To:</h4>
                  <ul className="list-group">
                    <li className="list-group-item btn btn-outline-primary" onClick={this.changeToGetBmis}>See All Client BMIs</li>
                    <li className="list-group-item btn btn-outline-primary">Submit a Clients BMI</li>
                  </ul>
                </div>
              </div>
            </div>
            }
            {activeRoute === "getBmis" &&
              <GetBmis goHome={this.goHome} />
            }
        </div>);
  }

}

export default App

*/