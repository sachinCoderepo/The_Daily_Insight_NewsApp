import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import TextForm from './components/textForm'
import LoginPage from './components/login';
import Alert from './components/Alert';
import { useState } from 'react';



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({msz: message,
      type:type})}
  

  const ToggleMode = ()=>{
    if(mode ==="light"){
    setmode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("Dark-Mode is Enable, Success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Lite-Mode is Enable, Success")
    }
  }

  return (
    
    <Router>
      <Navbar title="Login" AboutText="About Us" mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert}></Alert>

      <div className='container'>
        <Routes>
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/About" element={<About />} />
          <Route path="/textForm" element={<TextForm heading="Enter text to Analyze below" mode={mode} />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;



