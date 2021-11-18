import React from "react";
import Card from "./cards"
import Data from "./data"
// import katie from "../img/image12.png"
// import star from "../img/star.png"
// import bike from "../img/mountain-bike.png"
// import wedding from "../img/wedding-photography.png"
export default function Cards(){


  const cards = Data.map(item =>{
    return(
      <Card 
      image={item.coverImg}
      icon={item.stats.icon}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })
  return(
    <div className="card-section">
      {cards}
   </div>
  )
}