import React, { useState } from "react";
import css from "./Form.module.css";
import "./Home.css";
import { useUser } from '../context/UserContext';

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const { setUser } = useUser();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName || !email || !enquiry) {
      alert('Please fill in all fields.');
      return;
    }
    setUser({ fullName, email, enquiry }); // Save user info in the context
    alert('Registered successfully!');
  };

  return (
    <>
      <div className="card-body" id={css.header}>
        <h5 className="card-text text-center py-3 ">Register For Chat Now</h5>
      </div>
      <form className={css.form}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control no-border"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3" id={css.controlsForm}>
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              value={email}
        onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <select className="form-select" aria-label="Default select example"
        value={enquiry}
        onChange={(e) => setEnquiry(e.target.value)}>
          <option selected>Select Enquiry</option>
          <option value="Sales">Sales</option>
          <option value="Projects">Projects</option>
          <option value="Career">Career</option>
        </select>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleRegister}
            className={`btn btn-primary btn-lg rounded-pill w-25 ${css.bgColor}`}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
