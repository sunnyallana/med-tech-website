import React from 'react';
import './Home.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

export default function Slides({item}) {
  
  return (
    <>
     <div className="image-container">
        
              <motion.img 
               initial={{ scale: 0.9 }}
              
               animate={{ scale: 1.3 }}
               transition={{ duration: 5, yoyo: 6}}
             
              src={item.img} className="img-fluid brightness" />
             
              <div className="carousel-caption  d-md-block container">
                <div
                 className="text-left w-75">
                  <h1 className="display-3 lh-2" style={{ letterSpacing: "0", fontFamily: "Times New Roman" }}>
                    {item.heading}
                  </h1>
                  <p className="h5 lh-2 py-2">{item.text}</p>
                </div>
                <div className='text-start'>
        <Link className="btn btn-primary bt-lg rounded-pill fs-5 px-4 bgColor my-3" to="/healthcaresolutions" role="button">Know More</Link>
        </div>
              </div>
              </div>
              
      
    </>
  )
}
