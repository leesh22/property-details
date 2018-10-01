import React, { Component } from 'react';

class PropertyTable extends Component {

  constructor(props) {
    super(props)
    

    //initialising state
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    // making call to API
    this.getProperties();
  }

  getProperties() {
               
    fetch('http://localhost:8080/properties').then((res) => {
      res.json().then((body) => {
        // setting state from API response
        this.setState({
          properties: body
        });
      });
    });
  }

  render() {
    return (
      <div>
        <table>
            <tbody> 
              <tr>
                <th>Owner</th>
                <th>Address</th>
                <th>Income Generated</th>
                <th>Within Service Area</th>
              </tr>
              
              {/* mapping over  properties to render table*/}
              { this.state.properties.map((property) => {
                return (
                    <tr key={property.airbnbId}>
                    <td>{property.owner}</td>
                    <td>
                      <ul>
                      {/* mapping over address items to render */}
                      { Object.keys(property.address).map((item, i) => <li key={i}> {property.address[item]}</li>)}
                      </ul>
                    </td>
                    <td>{property.incomeGenerated}</td>
                    {/* checking id property is within service area */}
                    <td>{property.withinServiceArea ? 'yes' : 'no'}</td>
                  </tr>
                  );
                })
              }
            </tbody> 
        </table>
      </div>
    );
  }
}

export default PropertyTable;
