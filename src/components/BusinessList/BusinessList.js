import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className="BusinessList">
      {
          this.props.results.map(
            function (business) {
              return (<Business business={business} key={business.id}/>)
            }
          )
      }
      </div>
    )
  }
};

export default BusinessList;
