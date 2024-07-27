import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard(props) {
  return (
    <>
    <motion.div
    initial={{ y:-90,opacity:0,scale:0.7 }}
    whileInView={{y:0,opacity:1,scale:1}}
    transition={{ duration: 1}} className="col-lg-5 col-md-5 border rounded  py-3 ms-3 mb-3" style={{boxShadow: "0 0 2px 4px rgba(0,0,0,0.05)"}}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </motion.div>
      
    </>
  )
}
