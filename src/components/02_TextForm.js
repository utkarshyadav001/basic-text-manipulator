import React, {useState} from 'react'
import '../style/textForm.css'


export default function TextForm(props) {
  
  const handleOnChange = (event)=>{
    // console.log("On Change function runing");
    setText(event.target.value);
  }

  const handleUpClicked = ()=>{
    let newText =  text.toLocaleUpperCase();
    // console.log("On upper case function runing" , text, newText);
    setText(newText);
    props.showAlert("sucess", "Converted to upperCase!");
  }
  const handleDownClicked = ()=>{
    let newText =  text.toLowerCase();
    // console.log("On upper case function runing" , text, newText);
    setText(newText);
    props.showAlert("sucess", "Converted to lowerCase!");
  }
  const handleClearText = ()=>{
    // console.log("Clear all text" , text, newText);
    setText("");
    props.showAlert("sucess", "Cleared all Text!");
  }
  const handleCopyText = ()=>{
    let copyText  = document.getElementById("Text_box");
    navigator.clipboard.writeText(copyText.value);
    // copyText.select()
    // console.log("Copy to clipBoard text " , text, newText);
    props.showAlert("sucess", "Copied to ClipBoard!")
  }
  const handleExtraSpaces = ()=>{
    let newText  = text.split(/[ ]+/);
    setText(newText.join(" "));
    // console.log("Remove Extra Spaces " , text, newText);
    props.showAlert("sucess", "Removed Extra Spaces ")
  }


  const [text, setText] = useState("");
  //   text = "new text";         // wrong way to change the state
  //   setState("new text");   // wrong way to change the state
  return (
    <div className="main"  id={props.mode}>
      <div id="textForm" >
          <h1>{props.formHeading}</h1>
          <textarea name="formText" className={"bk-"+props.mode} id="Text_box" cols="90" rows="14"  onChange={handleOnChange} value={text}></textarea>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleUpClicked}>Convert to Upper case</button>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleDownClicked}>Convert to Lower case</button>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleClearText}>Clear Text</button>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleCopyText}>Copy to clipboard</button>
          <button disabled={ text.length ===0? true : false} className="btn" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter( (words)=>{return words}).length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").filter( (words)=>{return words}).length} Min read time</p>
          <h2>Preview</h2>
          <p id="preview">{text.length === 0 ? "Enter text " : text}</p>
      </div>
    </div>
  )
}
