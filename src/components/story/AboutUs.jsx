import React from 'react';
import ourStory from '../../images/ourStory.jpg';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <>
        <div className="container-fluid" style={{margin:"0"}}>
    <div className="row container-fluid about-us">
        <motion.div
        initial={{ x:-80 }}
        whileInView={{x:0}}
        transition={{ duration: 1}} className="col-lg-7 col-sm-12">
            <h2 className='gradientText h1'>WHO WE ARE</h2>
            <p className='text-justify fw-light lh-base' style={{fontSize:"1.2rem",lineHeight:"1.6rem"}}><span className='h5'>Welcome to the world of MedTech </span>– As one of Qatar’s leading healthcare solution providers, MedTech has consistently pushed the envelope when it comes to our offerings and service. The last forty years tell a story of how our success has been scripted by our core values and relentless pursuit of innovation.  across Qatar. With an ever-evolving healthcare industry, our core focus has always been to stay a step ahead of the curve. By partnering with the most premium equipment manufacturers from around the world, we deliver the future of the industry to our clients today.
<br/><br/>
Besides our world-class technology offerings, our focus on client satisfaction truly enhances the MedTech edge. By recruiting and training the best talent in the industry, we have built a team that goes above and beyond the call of duty to deliver excellence. Take for example our 24/7 support, our focus on compassionate service, and our excellent project outcomes.
<br/><br/>
Step into the world of MedTech today, and truly experience the MedTech edge.</p>


        </motion.div>
        <motion.div 
         initial={{ x:35 }}
         whileInView={{x:0}}
         transition={{ duration: 1}}className="col-lg-5 col-sm-12 my-3">
            <img src={ourStory} className='img-fluid rounded' alt='Chairman' style={{height:"30rem"}}/>
        </motion.div>
    </div>
      </div>
    </>
  )
}
