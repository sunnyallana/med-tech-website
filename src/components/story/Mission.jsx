import React from 'react';
import { FaHandshake } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import './Story.css';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <>
      <div className="container-fluid" style={{margin:"2rem 0"}}>
    <div className="row container-fluid about-mission">
        <motion.div
         initial={{ y:90,opacity:0,scale:0.7 }}
         whileInView={{y:0,opacity:1,scale:1}}
         transition={{ duration: 1}} className="col-lg-5 col-md-5 col-sm-12 rounded bgColor py-3 mb-3 media" style={{height:"18rem"}}>
        <span className="display-4 mission" >
        <FaHandshake />              </span>
            <h2 className='text-center'>Our Mission</h2>
            <p className='lead'>Even after forty years of success, our mission remains the same - to transcend expectations and create unmatched value for our clients. We also remain firmly committed to empowering the incredibly talented MedTech team to pursue rewarding careers in the industry.</p>
        </motion.div>
        <motion.div
        initial={{ y:90,opacity:0,scale:0.7 }}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{ duration: 1}} className="col-lg-5 col-md-5 col-sm-12 rounded bgColor py-3 mb-3 media" style={{height:"18rem"}}>
        <span className="display-4 mission">
        <IoEyeSharp />              </span>
           <h2 className='text-center'>Our Vision</h2>
           <p className='lead'>
           We aim to become the premier supplier of medical equipment in the Middle East and markets around the world. Our hope is for our excellent service to translate into superior patient care on the ground.
           </p>
        </motion.div>
    </div>
      </div>
    </>
  )
}
