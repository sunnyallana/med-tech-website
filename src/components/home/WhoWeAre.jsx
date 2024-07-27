import React from 'react'
import buildingImg from '../../images/building.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function WhoWeAre() {
  return (
    <>
     <motion.h2 
     initial={{ y: 80 }}
     whileInView={{ y: 0 }}
     transition={{ duration: 0.7 }}
    className='text-center my-5 gradientText'>Who We Are</motion.h2> 
     <div className="container my-4 d-flex">
  <motion.div 
  initial={{ y: 80 }}
  whileInView={{ y: 0 }}
  transition={{ duration: 0.7 }}className="my-class d-flex gap-5">
    <div
    
     className="col-lg-6">
      <img
       src={buildingImg} alt='buildingImage' className='img-fluid rounded'/>
    </div>
    <div className="col-lg-6">
      <h4 className='gradientText'>We’ve supplied excellence for four decades - and we’re just getting started.</h4>
      <ul className='d-flex fs-4 flex-start ps-3'>
        <li className='me-4'>Excellence</li>
        <li className='me-4'>Expertise</li>
        <li className='me-4'>Ethics</li>
      </ul>
      <p className='lead'>These are some of the many reasons why MedTech Corporation has been one of Qatar’s leading healthcare solution providers for over 40 years. As a turnkey solutions provider in the healthcare industry, we have supplied world-class equipment to governments and private institutions across Qatar and the Middle East.
        <br/>
Since 1980, our processes have evolved at the same pace as the healthcare industry. Our only constant - which is key to our unmatched service delivery - is our values and commitment to customer satisfaction</p>
<motion.div 
whileHover={{ scale: 1.1 }}
whileTap={{
  scale: 0.8,
  borderRadius: "100%"
}}className='text-center my-5 '>
<Link className="btn btn-primary rounded-pill fs-5 px-4 bgColor" to="/story" role="button">Read More</Link>
</motion.div>
    </div>
  </motion.div>
</div>
    </>
  )
}
