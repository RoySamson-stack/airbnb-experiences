import React from "react"

export default function Card(props){
  return (
    <div className="card">
      <img src={`../img/${props.img}`} alt="image" className="card-img"/>
     <div className="card-stats">
       <img src="../img/star.png" className="card-star"/> 
       <span className="gray">{props.rating}</span>
       <span className="gray">{props.reviewCount}</span>
       <span className="gray">{props.country}</span>
     </div>
     <p className="card-title">{props.title}</p>
     <p><span className="card-price">{props.price}</span></p>
    </div>
  )
}