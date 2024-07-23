import React from 'react';
import styles from './Contact.module.css';

const JoinUsComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                
                <div className="col-md-5 d-flex justify-content-center">
                    <img style={{height: '90%', width: '90%', borderRadius: '5%'}} src={process.env.PUBLIC_URL + '/joinUsImage.jpg'} alt="Join Us" />
                </div>

                <div style={{padding: '0% 3% 0% 3%'}} className="col-md-7">
                    <div className="text-center">
                        <h1 className={styles.gradientText}>Join Us</h1>
                    </div>
                    <p className="text-center">If you have the passion, we have the perfect mission Join us as we continue our mission to transform the healthcare industry in the Middle East and rest of the world.</p>
                    <div className="d-flex justify-content-center">
                        <button style={{borderRadius: '20px', width: '20%', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', outline: 'none', border: 'none'}} className="btn btn-primary">Join Now</button>
                    </div>

                    <div className="text-center">
                    <h3 style={{marginTop: '6%'}} className={styles.gradientText}>Our Newsletter</h3>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button style={{background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', outline: 'none', border: 'none'}} className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUsComponent;