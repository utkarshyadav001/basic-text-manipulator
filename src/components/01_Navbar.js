import React from 'react'
import '../style/navbar.css'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={"Nav-"+props.mode}>

        {/* Navbar Logo Here */}
        <div id="appLogo">
            <Link to="/"><h4>{props.title}</h4></Link>
        </div>

        {/* Navbar Button Here */}
        <div id="navBtn">
          <ul>
            <li><Link to="/" id="homeBtn">Home</Link></li>
            {/* <li><Link to="/" id="createTokenBtn">Create Coin</Link></li> */}
            {/* <li><Link to="/" id="createNFTBtn">Create NFT</Link></li> */}
            <li><Link to="/about" id="aboutBtn">About</Link></li>
            {/* <li><Link to="/" id="documentsBtn">Documents</Link></li> */}
            {/* <li><Link to="/" id="helpBtn">Help</Link></li> */}
          </ul>
        </div>
        {/* <div className="checkbox"> */}
          {/* <input type="checkbox" name="changeMode" id="checkBoxBtn" /> */}
          {/* <p  onClick={props.togglemode} style={{color: "white"}}  >{props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</p> */}
        {/* </div> */}
        <div className="multiThemes">
            <p className='multiThemesBtn bg-blue'  onClick={()=>{props.togglemode("blue");}}></p>
            <p className='multiThemesBtn bg-red'  onClick={()=>{props.togglemode("red");}}></p>
            <p className='multiThemesBtn bg-green'  onClick={()=>{props.togglemode("green");}}></p>
            <p className='multiThemesBtn bg-yellow'  onClick={()=>{props.togglemode("yellow");}}></p>
            <p className='multiThemesBtn bg-white'  onClick={()=>{props.togglemode("white");}}></p>
        </div>
          {/* Connect Wallet Button Here */}
        {/* { props.connectWallet ?
          <div id="connectWallet">
            <p id="connectWalletBtn">Connect Wallet</p> 
          </div>
           : ""} */}
          
    </nav>
  )
}

//  PropTypes property
//  1. propTypes
//  2. defultProps



Navbar.defaultProps = {
  title: "React Master",
  connectWallet: true,

}