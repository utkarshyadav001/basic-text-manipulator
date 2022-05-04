import React from 'react'
import '../style/alert.css'

const Alert = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div id="alert" style={props.mode === "dark" ? {backgroundColor: "rgb(4, 9, 56)"} : {backgroundColor: "white"}}>
      {props.alert && <div id="alertBox">
        <strong>{capitalize(props.alert.type)} </strong> : <p>{capitalize(props.alert.msg)}</p>
      </div>}
    </div>
  )
}

export default Alert
