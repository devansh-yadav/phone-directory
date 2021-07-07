import React from "react";
import Header from "./Header";
import './App.css';

function App() {

  let subscribers = [
    {
      id: 1,
      name: "Shilpa",
      phone: "8888888888"
    },
    {
      id: 2,
      name: "Srishti",
      phone: "9999999999"
    }
  ]

  return (
    <div>
      <Header heading = "Phone Directory"/>

      <div className="body-container">

        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span>Name</span>
          <span>Phone</span>
        </div>        
        
        {
          subscribers.map(sub => {
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

export default App;
