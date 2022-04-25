import React, { useState } from 'react'
import '../style/about.css'

export default function About() {
  const [changeStyle, setStyle] = useState({
    backgroundColor: "White",
    color: "Black",
    border: "1px solid Black"
  });
  const mode = ()=>{
    if (changeStyle.backgroundColor === "White") {
      setStyle({
        backgroundColor: "Black",
        color: "White",
        border: "1px solid White"
      });
    }
    else{
      setStyle({
        backgroundColor: "White",
        color: "Black",
        border: "1px solid Black"
      });
    }
  }

  return (
    <div  style={changeStyle} id="aboutBox">
      <div className="box">
        <h1 style={changeStyle} >First box</h1>
        <p style={changeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box">
        <h1 style={changeStyle} > Second box</h1>
        <p style={changeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box">
        <h1 style={changeStyle} >Third box</h1>
        <p style={changeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic,  officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <button id="btn" onClick={mode}>Show/Hide</button>
    </div>
  )
}
