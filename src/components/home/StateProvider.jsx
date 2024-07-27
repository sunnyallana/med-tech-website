import React from 'react';
import { Link } from 'react-router-dom';

export default function StateProvider() {
  return (
    <div className="container-fluid my-5">
    <div className="container-fluid background-image d-flex align-items-center justify-content-center">
      <div className="text-overlay">
        <div className='row'>
      <div className="col-lg-6 col-md-8 col-sm-12 mb-lg-3 py-3 mb-sm-3">
      <div className="card bg-light text-dark py-1 h-100">
      <div className="card-body">
        <h1 className="card-title  fw-bold py-1 text-start gradientText">State of the Art Solution Provider</h1>
        <p className="card-text py-1 text-start lead">We keep up with the times, to keep you ahead of the Curve. We always thrive to render value retained services by keeping ourselves aligned to the emerging technologies in the industry..</p>
        <div className='text-start'>
        <Link className="btn btn-primary rounded-pill fs-5 px-4 bgColor" to="/healthcaresolutions" role="button">Read More</Link>
        </div>
        </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  )
}
