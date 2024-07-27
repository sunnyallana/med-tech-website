import React from 'react'
import css from './Form.module.css';
import './Home.css';
export default function Form() {
  return (
    <>
    <div className="card-body" id={css.header}>
                <h5 className="card-text text-center py-3 ">
                  ENQUIRY NOW
                </h5>
              </div>
     <form className={css.form}>
  <div className="mb-3">
    <input type="text" className="form-control no-border" aria-describedby="emailHelp" placeholder='Full Name'/>
   
  </div>
  <div className="mb-3" id={css.controlsForm}>
    <div><input type="email" className="form-control" placeholder='Your Email'/></div>
    <div><input type="text" className="form-control" placeholder='Phone Number'/></div>
  </div>
  <select className='form-select' aria-label="Default select example">
  <option selected>Select Enquiry</option>
  <option value="1">Sales</option>
  <option value="2">Projects</option>
  <option value="3">Career</option>
</select>
<div className="mb-3">
  <textarea className="form-control" rows="5" placeholder='Enter Your Message'></textarea>
</div>
  <div className='text-center'>
  <button type="submit" className={`btn btn-primary btn-lg rounded-pill w-25 ${css.bgColor}`}>Send</button></div>
</form> 
    </>
  )
}
