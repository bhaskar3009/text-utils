import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'darkslategray';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtis - Drak Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtis - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil 2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/TextForm" element={<TextForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
