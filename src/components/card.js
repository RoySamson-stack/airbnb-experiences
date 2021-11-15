import React from "react";
import Card from "./cards"
import katie from "../img/image12.png"
import star from "../img/star.png"

export default function Cards(){
  return(
    <div className="card-section">
      <Card 
      image={katie}
      icon={star}
      rating="5.0"
      title="Katie"
      price="From $500 per night"
      />
       <Card 
      image={katie}
      icon={star}
      rating="5.0"
      title="Katie"
      price="From $500 per night"
      />
       <Card 
      image={katie}
      icon={star}
      rating="5.0"
      title="Katie"
      price="From $500 per night"
      />
   </div>
  )
}