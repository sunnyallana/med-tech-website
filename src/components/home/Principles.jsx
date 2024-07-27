import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

export default function Principles() {
  return (
    <>
      <motion.h2
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7 }}
       className='text-center my-3 gradientText'>Our Principles</motion.h2>
      <motion.p 
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className='text-center lead my-3'>Even as we continue to evolve, our principles have always been our North Star - leading us and our clients to success.</motion.p>
      <motion.div className="container-fluid row">
  <motion.div
    initial={{ y: 80 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 0.7 }}
   className="col-lg-4 col-md-6 mb-3 mb-sm-3 ">
    <div className="card bg-dark text-light p-3 bgColor">
      <div className="card-body">
        <h4 className="card-title text-center fw-bold">Mission</h4>
        <p className="card-text">To provide world-class equipment and services to our customers, and facilitate the growth of our customers’ medical infrastructure. We constantly evolve at the same pace as the industry, to stay ahead of the curve.</p>
        
      </div>
    </div>
  </motion.div>
  <motion.div
  initial={{ y: 80 }}
  whileInView={{ y: 0 }}
  transition={{ duration: 0.7 }}
   className="col-lg-4 col-md-6 mb-3 mb-sm-3">
    <div className="card pb-5 bg-dark text-light p-4 bgColor">
      <div className="card-body ">
        <h4 className="card-title text-center fw-bold">Vision</h4>
        <p className="card-text">To become the leading provider of medical equipment and health care solutions in the Middle East and the rest of the world.</p>    
      </div>
    </div>
  </motion.div>
  <motion.div 
  initial={{ y: 80 }}
  whileInView={{ y: 0 }}
  transition={{ duration: 0.7 }}
  className="col-lg-4 col-md-6 mb-3 mb-sm-3 ">
    <div className="card bg-dark text-light p-3 bgColor">
      <div className="card-body ">
        <h4 className="card-title text-center fw-bold">Our History</h4>
        <p className="card-text">Started Since 1980, our processes have evolved at the same pace as the healthcare industry. Our only constant - which is key to our unmatched service delivery - are our values and commitment to customer satisfaction..</p>  
      </div>
    </div>
  </motion.div>
</motion.div>
    </>
  )
}
