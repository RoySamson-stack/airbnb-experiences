import React from "react";
import Card from "./cards"
import katie from "../img/image12.png"
import star from "../img/star.png"
import bike from "../img/mountain-bike.png"
import wedding from "../img/wedding-photography.png"

export default function Cards(){
  return(
    <div className="card-section">
      <Card 
      image={katie}
      icon={star}
      rating="5.0"
      reviewCount="10"
      country="Kenya"
      title="Katie"
      price="From $500 per night"
      />
       <Card 
      image={wedding}
      icon={star}
      rating="5.0"
      reviewCount="10"
      country="Kenya"
      title="Katie"
      price="From $500 per night"
      />
       <Card 
      image={bike}
      icon={star}
      rating="5.0"
      reviewCount="10"
      country="Kenya"
      title="Katie"
      price="From ${500} per night"
      />
   </div>
  )
}