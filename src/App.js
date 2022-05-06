import { useState } from 'react';
import './App.css';
import Navbar from './components/01_Navbar';
import TextForm from './components/02_TextForm';
import Alert from './components/04_Alert';
import About from './components/03_About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
    // let CEO = "Utkarsh Yadav";

  const [mode, setMode] = useState("dark");

  const togglemode = (cls) => {
    console.log(cls);
    if (mode !== cls) {
      setMode(cls);
      showAlert("sucess", cls + " mode has been enabled");

      // setInterval(() => {
      //   document.title = "Install Text Analyzer app";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Text Analyzer is the best app!";
      // }, 3000);
    }
    else {
      setMode("dark");
      showAlert("sucess ", "Dark mode has been enabled");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => { 
    setAlert(
      {
        msg: message,
        type: type,
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <div>
      <Router>

        <Navbar title="Text Analyzer" connectWallet={false}  togglemode={togglemode} mode={mode}/>
        <Alert alert={alert} mode={mode} />
        
        <Routes>
          <Route exact path="/" element={<TextForm formHeading="Text Analyzer : Count Word , Character and  Upper case, Lower case and remove extra spaces!" mode={mode} showAlert={showAlert}  />} /> 
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;