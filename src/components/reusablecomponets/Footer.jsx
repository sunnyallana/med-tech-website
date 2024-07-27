import React from 'react';
import styles from'./Footer.module.css';
import { IoMedical } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {



    
  return (
    <>
      
    <footer>
        <motion.div 
        initial={{ y:80,x:-50 }}
        whileInView={{y:0,x:0}}
        transition={{ duration: 1}}
        className="container">
           <i> <IoMedical /></i><span>MedTech</span>
            <div className="row">
                <div
                 
                 className="col-lg-3 col-sm-6 ">
                    <motion.div
                    initial={{ y:80,x:-50 }}
                    whileInView={{y:0,x:0}}
                    transition={{ duration: 1}} className={styles.singleBox}>
                    
                    <p>We at MedTech, focus on constantly evolving with the Science of Health, thus making us the emerging reliable company in the field of Healthcare in our Region</p>
                     <p className={styles.socials}>
                    <i> <FaFacebookF /></i>
                    <i><FaInstagram /></i> 
                     <i><FaYoutube /></i>                           
                           <i><FaLinkedinIn /></i>
                        </p>
                    </motion.div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className={styles.singleBox}>
                        <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/story">Our Story</Link></li>
                        <li><Link to="/healthcaresolutions">HealthCareSolutions</Link></li>
                        
                    </ul>
                    </div>                    
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className={styles.singleBox}>
                        <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>                    
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className={styles.singleBox}>
                        <h2>Office</h2>
                        <ul>
                       <li><i><RiMapPin2Fill/></i>MedTech Corporation
C Ring road, Building No: 221,
2nd Floor, Zone 41 ,
Street No 230, Doha – Qatar</li>
                       <li><i><MdEmail/></i>info@med-tech.com</li>
                       <li><i><FaPhone/></i>+974 4443 4140 <br/>
                       +974 3344 0057</li>
                       <li><i><FaFax/></i>974 4443 4548 (fax)</li>
                       </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>

    </>
  )
}
