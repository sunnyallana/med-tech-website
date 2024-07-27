import React from "react";
import value from "../../images/value.jpg";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";

export default function Values() {
  return (
    <>
      <div className="container-fluid" style={{ margin: "0" }}>
        <div className="row container-fluid about-us">
          <motion.div
          initial={{ y:-90,opacity:0,scale:0.7 }}
         whileInView={{y:0,opacity:1,scale:1}}
         transition={{ duration: 1}} className="col-lg-5 col-md-12 col-sm-12 my-3">
            <img src={value} className="img-fluid rounded" alt="Values" style={{height:"40rem"}} />
          </motion.div>
        
          <motion.div 
          initial={{ y:-90,opacity:0,scale:0.7 }}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{ duration: 1}}className="col-lg-7  col-md-12 col-sm-12">
            <h2 className="gradientText h1 text-start">Our Values</h2>
            <div className="container-fluid">
            <p
              className="text-justify fw-light lh-base lead"
              style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}
            > We care very deeply about the communities we serve. Our success drives your success which is why we strive to be the best at what we do.</p> 
              <div className="row">
                <ValueCard title="Exceeding Excellence" text="We believe in rising above traditional standards of excellence, to deliver the best for our clients."/>
<ValueCard title="Redefining Reliability" text="We take reliability to the highest level, to ensure that our clients always know that we are by their side."/>

              </div>
              <div className="row">
                <ValueCard title="Relentless Innovation" text="As technology in the healthcare sector rapidly evolves, we keep up with latest innovations to always stay a step ahead."/>
<ValueCard title="Community Consciousness" text="We deeply care about every community we interact with, and always aim to achieve the best possible outcomes for them. Be it our community of MedTech Maestros, supply chain partners, manufacturers, or clients."/>

              </div>
    
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
}
