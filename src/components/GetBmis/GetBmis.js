import React, { Component } from 'react';
import './GetBmis.css';

class GetBmis extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    goHome =() => {
        this.props.goHome();
    }

    componentDidMount() {
      fetch("http://134.122.26.195/userBmis")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result)
          },
          (error) => {
            console.log(error)
          }
        )
    }

  render() {
    return (
    <div className="container-fluid">
        <div className="card mt-4">
          <div className="card-body">
            <h2 className="card-title text-center mb-2">All Client BMIs</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th >3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
          </div>
        </div>
        <div className="col text-center mt-4">
            <button className="btn btn-outline-primary" onClick={this.goHome}> Go Home</button>
        </div>
    </div>);
  }
}

export default GetBmis;
