import React from 'react';
import './App.css'

const Header = function (props){
    return(
        <div className="header">
            {props.heading}
        </div>
    )
}

export default Header;