import React from 'react';
import './Home.css';
import Form from './Form';
import contact from '../../images/contact.jpg';
import css from './Form.module.css';
import { IoIosChatbubbles } from "react-icons/io";
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function InTouch() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleChatClick = () => {
    if (!user) {
      alert('Please register first!');
      return;
    }
    navigate('/chatnow'); 
    // Proceed to chat functionality
  };
  return (
    <>
    <h2 className='text-center gradientText'>Get in Touch</h2>
    <div className='container' style={{marginBottom:"5rem"}}>
        <div className='row'>
            <motion.div
            initial={{ rotate:0 }}
            whileInView={{ rotateY:360}}
            transition={{ duration: 1 }} className='col-lg-6 mb-3'>
            <Form/>
            </motion.div>
            <div className='col-lg-6 mb-3'>
                <img className='img-fluid rounded mb-3' src={contact}  alt='GetInTouch'/>
                <motion.div
                initial={{ scale: 0.2 }}
                whileInView={{scale:1}}
              
                transition={{ duration: 1, iteration: Infinity }} className='text-center'>
                <button  onClick={handleChatClick} type="submit" className={`btn btn-primary btn-lg rounded-pill w-50 my-3 ${css.bgColor}`}>Chat Now <IoIosChatbubbles /></button></motion.div>
    
            </div>
        </div>
    </div>
      
    </>
  )
}
