import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import TextForm from './components/textForm'
import LoginPage from './components/login';



function App() {
  return (
    

    
    <Router>
      <Navbar title="Login" AboutText="About Us" />
      <div className='container'>
        <Routes>
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/About" element={<About />} />
          <Route path="/textForm" element={<TextForm heading="Enter text to Analyze below" />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;



