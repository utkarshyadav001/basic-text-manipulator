import React from 'react'
import '../style/navbar.css'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={props.mode}>

        {/* Navbar Logo Here */}
        <div id="appLogo">
            <a href="/"><h4>{props.title}</h4></a>
        </div>

        {/* Navbar Button Here */}
        <div id="navBtn">
          <ul>
            <li><a href="/" id="homeBtn">Home</a></li>
            {/* <li><a href="/" id="createTokenBtn">Create Coin</a></li> */}
            {/* <li><a href="/" id="createNFTBtn">Create NFT</a></li> */}
            <li><a href="/about" id="aboutBtn">About</a></li>
            {/* <li><a href="/" id="documentsBtn">Documents</a></li> */}
            {/* <li><a href="/" id="helpBtn">Help</a></li> */}
          </ul>
        </div>
        <div className="checkbox">
          {/* <input type="checkbox" name="changeMode" id="checkBoxBtn" /> */}
          <p  onClick={props.togglemode} style={{color: "white"}}  >{props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</p>
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