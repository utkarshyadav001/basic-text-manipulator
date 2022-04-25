// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/01_Navbar'
import TextForm from './components/02_TextForm'
import Alert from './components/04_Alert';
// import About from './components/03_About'


function App() {
  // let CEO = "Utkarsh Yadav";

  const [mode, setMode] = useState("light");

  const togglemode = ()=>{
    if (mode === "light") {
      setMode("dark");
      showAlert("sucess", "Dark mode has been enabled");
    }
    else{
      setMode("light");
      showAlert("sucess ", "Light mode has been enabled");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
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
    <>
      <Navbar title="React Master" connectWallet={true} mode={mode} togglemode={togglemode}/>
      <Alert  alert={alert}/>
      <TextForm formHeading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
