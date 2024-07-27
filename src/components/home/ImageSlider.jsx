import React from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import Slides from "./Slides";
import "./Home.css";

export default function ImageSlider() {
  const data = [
    {
      img: img2,
      heading: "Science and Technology For Life",
      text: "Welcome to medTech Qatar’s leading provider of healthcare solutions for over 40 years.",
    },
    {
      img: img1,
      heading: "Supplying cutting-edge medical equipment, with clinical precision",
      text: "We supply world-class equipment with a focus on customer satisfaction, and enabling our clients to save lives.",
    },
    {
      img: img3,
      heading: "The most accurate diagnostic equipment, supplied with pinpoint accuracy",
      text: "Early diagnosis equals early treatment, and we ensure a reliable supply of tomorrow’s diagnostic tools, today.",
    },
    {
      img: img4,
      heading: "Reaching People & Touching Lives",
      text: "We aim to provide first in class, high-quality and right-priced affordable medicines to improve patient quality of life",
    },
    {
      img: img5,
      heading: "Revolutionising the healthcare industry, one solution at a time",
      text: "Our multidisciplinary team provides cutting-edge turnkey solutions that transform healthcare facilities into thoughtful patient experiences.",
    },
  ];

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "-6rem", padding: "0", boxSizing: "border-box" }}>
        <div
       
      
       className="carousel-indicators">
          {data.map((_, index) => (
            <button
              type="button"
              key={index}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div
        
      
         className="carousel-inner">
          {data.map((item,index) => (
             <div
            
             
              
            
              className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <Slides item={item} />
            </div>
      
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
    </>
  );
}
