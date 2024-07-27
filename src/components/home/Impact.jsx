import React, { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import "./Home.css";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from "framer-motion";

export default function Impact() {
  const [counter, setCounter] = useState(false);
  return (
    <>
      <motion.h2
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
       className="text-center my-3 gradientText">Making an Impact</motion.h2>
      <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
      <div
      className="container">
        <div
         className="row">
        <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
         className="col-lg-3 col-md-6 col-sm-12 mb-lg-3 py-3">
          <div className="card center-card h-100  border rounded">
            <div className="borders-styles">
              <span className="display-4">
                <CiFaceSmile/>
              </span>
            </div>
            <div
             className="card-body">
              <h2 className="card-text text-center py-3 fw-bolder">
                {counter &&
                <CountUp
  start={0}
  end={1000}
  duration={2.75}></CountUp>}+</h2>
              <p className="lead text-center">Happy smiles</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}className="col-lg-3 col-md-6 col-sm-12 mb-lg-3 py-3">
          <div className="card center-card h-100  border rounded">
            <div className="borders-styles">
              <span className="display-4">
              <CiSquarePlus />
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-text text-center py-3 fw-bolder">
                {counter && <CountUp
  start={0}
  end={200000}
  duration={2.75}></CountUp>}+</h2>
              <p className="lead text-center">Exclusive Products</p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }} className="col-lg-3 col-md-6 col-sm-12 mb-lg-3 py-3">
          <div className="card center-card h-100  border rounded">
            <div className="borders-styles">
              <span className="display-4">
              <IoPerson />
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-text text-center py-3 fw-bolder">
                {counter && <CountUp
  start={0}
  end={70}
  duration={2.75}></CountUp>}+</h2>
              <p className="lead text-center">MedTech Maestros</p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }} className="col-lg-3 col-md-6 col-sm-12 mb-lg-3 py-3">
          <div className="card center-card h-100  border rounded">
            <div className="borders-styles">
              <span className="display-4 gradientText">
              <FaHandshake />
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-text text-center py-3 fw-bolder">
                {counter &&<CountUp
  start={0}
  end={200}
  duration={2.75}></CountUp>}+</h2>
              <p className="lead text-center">Manufacturers</p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      </ScrollTrigger>
    </>
  );
}
