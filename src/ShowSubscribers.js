import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css';
import './common/common.css'

class ShowSubscribers extends Component {

  render() {
    return(
      <div>
        <Header heading="Phone Directory" />

        <div className="body-container">

          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span>Name</span>
            <span>Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
    );
  }
  
}

export default ShowSubscribers;