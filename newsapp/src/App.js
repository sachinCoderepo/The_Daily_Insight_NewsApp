import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  render() {
   

  
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" category="general" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route path="/business" element={<News key="business" category="business" />} />
            <Route path="/health" element={<News key="health" category="health" />} />
            <Route path="/science" element={<News key="science" category="science" />} />
            <Route path="/general" element={<News key="general" category="general" />} />
            <Route path="/sport" element={<News key="sport" category="sport" />} />
            <Route path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
          
        </Router>
        <LoadingBar
        color='#f11946'
        progress={100}
      />
      </div>
    );
  }
}
