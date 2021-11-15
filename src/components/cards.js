import React from "react"

export default function Card({image, icon, title, price, rating}){
  return (
    <div className="card">
      <img src={image} alt="image" className="card-img"/>
     <div className="card-stats">
       <img src={icon} className="card-star"/> 
       <span className="gray">{rating}</span>
       <span className="gray">{}</span>
     </div>
     <p>{title}</p>
     <p><span className="bold">{price}</span></p>
    </div>
  )
}