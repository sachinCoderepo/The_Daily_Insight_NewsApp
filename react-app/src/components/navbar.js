// import React, { useState } from "react"
import { Link } from 'react-router-dom';

import propTypes from 'prop-types'
export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="login" className="nav-link">{props.title} <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="employee" className="nav-link">Employee Details <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="news" className="nav-link">Daily News <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">{props.AboutText}</Link>
          </li>
          
          {/* Add other navigation links here if needed */}
        </ul>
      
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>


      </div>
    </nav>)
}

// props validation 
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  AboutText: propTypes.string.isRequired
}

// props to set default
Navbar.defaultProps = {
  title: "set the Title",
  AboutText: "About text here"
}
