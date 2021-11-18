import React from "react"

export default function Card(props){

  let badgeText;
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.image} alt="image" className="card-img"/>
     <div className="card-stats">
       <img src="../img/star.png" className="card-star"/> 
       <span className="gray">{props.rating}</span>
       <span className="gray">{props.reviewCount}</span>
       <span className="gray">{props.location}</span>
     </div>
     <p className="card-title">{props.title}</p>
     <p><span className="card-price">{props.price}</span></p>
    </div>
  )
}