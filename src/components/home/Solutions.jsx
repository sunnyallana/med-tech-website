import React from "react";
import sol1 from "../../images/sol1.jpg";
import sol2 from "../../images/sol2.jpg";
import sol3 from "../../images/sol3.jpg";
import { Link } from "react-router-dom";
import {motion } from 'framer-motion'
import "./Home.css";

export default function Solutions() {
  return (
    <>
      <h2 className="text-center gradientText">Our Solutions</h2>
      <div className="container">
        <div className="row">
          <motion.div
         
          initial={{ x: -30 }}
  whileInView={{ x: 0 }}
  transition={{ duration: 1 }}
           className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3 mb-sm-3">
            <div className="card custom-card h-100">
              <img src={sol1} className="img-fluid card-img-top" alt="..." />
              <div className="card-body card-body-effect">
                <h5 className="card-text text-center py-3">
                  <Link
                    to="/healthcaresolutions"
                    className="text-decoration-none"
                  >
                    <span id="color">Surgical Devices and Consumables</span>
                  </Link>
                </h5>
              </div>
            </div>
          </motion.div>
          <motion.div 
         
          initial={{ y: -80 }}
  whileInView={{ y: 0 }}
  transition={{ duration: 1 }}
          className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3">
            <div className="card custom-card h-100">
              <img src={sol2} className="card-img-top " alt="..." />
              <div className="card-body card-body-effect">
                <h5 className="card-text text-center py-3 ">
                  <Link
                    to="/healthcaresolutions"
                    className="text-decoration-none"
                  >
                    <span id="color">Diagnostics</span>
                  </Link>
                </h5>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="col-lg-4 col-md-6 col-sm-12 mb-lg-3 py-3">

            <div className="card custom-card h-100">
            
              <img
                src={sol3}
                className="card-img-top"
                alt="..."
                style={{ height: "14.8rem" }}
              />
              <div className="card-body card-body-effect">
                <h5 className="card-text text-center py-3">
                  <Link
                    to="/healthcaresolutions"
                    className=" text-decoration-none"
                  >
                    <span id="color">Life Sciences</span>
                  </Link>
                </h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='text-center'>
        <Link className="btn btn-primary bt-lg rounded-pill fs-5 px-4 bgColor my-3" to="/healthcaresolutions" role="button">Click Here For More</Link>
        </div>
    </>
  );
}
