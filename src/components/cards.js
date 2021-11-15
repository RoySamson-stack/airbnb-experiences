import React from "react"

export default function Card(image, icon, title, price, rating){
  return (
    <div className="card">
      <img src={image} alt="image" className="card-img"/>
     <div className="card-stats">
       <img src={image} className="card-star"/> 
       <span className="gray">{rating}</span>
       <span className="gray">{title}</span>
       <span>{icon}</span>
     </div>
     <p>{title}</p>
     <p><span className="bold">{price}</span></p>
    </div>
  )
}