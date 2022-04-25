import React from 'react'
import '../style/alert.css'

const Alert = (props) => {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && <div id="alertBox">
        <strong>{capitalize(props.alert.type)} </strong> : <p>{props.alert.msg}</p>
    </div>
  )
}

export default Alert
