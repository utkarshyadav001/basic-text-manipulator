import React from 'react'
import '../style/about.css'

export default function About(props) {



  return (
    <div className="about" id={props.mode}>
    <div   className="aboutBox" style={props.mode === "white"? {border: "2px solid black"} : {border: "2px solid white"}}>
      <div className="box" style={props.mode === "white"? {border: "1px solid black"} : {border: "2px solid white"}}>
        <h1 id={"boxH1" + props.mode} >First box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box" style={props.mode === "white"? {border: "1px solid black"} : {border: "1px solid white"}}>
        <h1 id={"boxH1" + props.mode} > Second box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box" style={props.mode === "white"? {border: "1px solid black"} : {border: "1px solid white"}}>
        <h1 id={"boxH1" + props.mode} >Third box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic,  officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
    </div>
    </div>
  )
}
