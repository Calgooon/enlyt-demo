import React from 'react';
import { connect } from 'react-redux'
import { render } from '@testing-library/react';


class BmiRecords extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {
        const bmiRecords = this.props.bmiRecords
        let htmlCode = "";
        
        if(!bmiRecords) {
            htmlCode = <div>No Data...</div>
        } else {
            let records = [];

            Object.keys(bmiRecords).map(function(key) {
                records.push({name: bmiRecords[key].name, 
                    id: bmiRecords[key].id, 
                    bmi: bmiRecords[key].bmi, 
                    height: bmiRecords[key].height, 
                    weight: bmiRecords[key].weight})
            });

            this.items = records.map((item) =>
            <ul>
                <li key={item.id + "_1"} >Name: {item.name}</li>
                <li key={item.id +"_2"} >Height: {item.height}</li>
                <li key={item.id +"_3"} >Weight: {item.weight}</li>
                <li key={item.id +"_4"} >BMI: {item.bmi}</li>
                </ul>
            );
            
            htmlCode = (
                <div>
                    {this.items}
                </div>
            )
        }

        return (htmlCode)
    }
}
  
  const mapStateToProps = (state) => ({
    bmiRecords: state.bmiRecords,
  });

  BmiRecords = connect(
    mapStateToProps,
    null
  )(BmiRecords)
  
  export default BmiRecords;