// import React, { useState } from "react"
import { Link } from 'react-router-dom';

import propTypes from 'prop-types'
export default function Navbar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="login" className="nav-link" href="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="textForm" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">{props.AboutText}</Link>
          </li>
          {/* Add other navigation links here if needed */}
        </ul>

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
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
