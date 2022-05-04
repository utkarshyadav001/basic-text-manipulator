// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/01_Navbar';
import TextForm from './components/02_TextForm';
import Alert from './components/04_Alert';
// import About from './components/03_About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';


function App() {
    // let CEO = "Utkarsh Yadav";

  const [mode, setMode] = useState("dark");

  const togglemode = (cls) => {
    console.log(cls);
    if (mode !== cls) {
      setMode(cls);
      showAlert("sucess", cls + " mode has been enabled");
      document.title = "Text Analyzer - Light mode";
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
      document.title = "Text Analyzer - Dark mode";
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
    }, 2500);
  }

  return (
    <div>
      {/* <Router> */}

        <Navbar title="React Master" connectWallet={false}  togglemode={togglemode} mode={mode}/>
        <Alert alert={alert} mode={mode} />
        
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <TextForm formHeading="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode} /> */}
          {/* </Route> */}
        {/* </Switch> */}

      {/* </Router> */}
    </div>
  );
}

export default App;