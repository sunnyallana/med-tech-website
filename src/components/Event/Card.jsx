import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Event.module.css'


export default function Card({item}) {

  
  
  return (
    <>
     <motion.div
     initial={{ y:80 }}
     whileInView={{y:0}}
     transition={{ duration: 1}} class="row">
     <div class="col-sm-6 mb-3 mb-sm-0 h-100">
      <div className="card h-100" style={{width: "20rem", marginTop:"3rem"}}>
  <img src={item.urlToImage? item.urlToImage:"No image Available"}className="card-img-top" alt="news"/>
  <div className="card-body">
    <h4>{item.title ? item.title : 'No Title Available'}</h4>
    <p className="card-text">{item.description ? item.description : 'No Title Available'}...</p>
    <Link to={item.url} className={`btn btn-primary ${styles.bgColor}`}>Learn More</Link>
  </div>
</div>
</div>
</motion.div>
    </>
  )
}
