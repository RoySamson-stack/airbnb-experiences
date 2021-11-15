import React from 'react';
import Airbnb from "../img/airbnb-logo.png"
import "./navbar.css"

function NavBar (){
    return (
        <nav className="navbar">
          <img src={Airbnb} alt="" className="navbar-image"/>
        </nav>
    );
  
}

export default NavBar;