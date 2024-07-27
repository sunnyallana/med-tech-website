import { IconButton } from '@mui/material';
import { Email, Phone, LocationOn, Fax } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const ContactDetailsComponent = () => {
    return (
        <div style={{margin: '5% 0% 5% 0%', padding: '0% 3% 0% 3%'}} className="container-fluid">
            <motion.div 
                initial={{ scale:0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}                
                className="row"> 
                <div className="col-md-4">
                    <h1 style={{marginBottom: '5%'}} className={styles.gradientText}>Contact Details</h1>
                    <p>
                        <LocationOn style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)' }} /> MedTech Corporation
                        <br/>
                            &nbsp; &nbsp; &nbsp; C Ring road, Building No: 221,
                        <br/>
                            &nbsp; &nbsp; &nbsp; 2nd Floor, Zone 41 ,
                        <br/>
                            &nbsp; &nbsp; &nbsp; Street No 230, Doha – Qatar
                    </p>
                    <p>
                        <Email style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)' }} /> <a style={
                            {textDecoration:'none'}
                            } 
                            href="mailto:info@med-tech.com">info@med-tech.com
                            </a>
                    </p>
                    <p>
                        <Phone style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)' }} /> +974 4443 4140 <br/>
                         &nbsp; &nbsp; &nbsp; +974 3344 0057
                    </p>
                    <p>
                        <Fax style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)' }} /> +974 4443 4548 (Fax)
                    </p>
                    <div>
                        <a href="https://www.instagram.com">
                            <IconButton style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', marginRight: '2%' }}>
                                <InstagramIcon />
                            </IconButton>
                        </a>
                        <a  href="https://www.linkedin.com">
                            <IconButton style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', marginRight: '2%' }}>
                                <LinkedInIcon />
                            </IconButton>
                        </a>
                        <a  href="https://www.youtube.com">
                            <IconButton style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', marginRight: '2%'}}>
                                <YouTubeIcon />
                            </IconButton>
                        </a>
                        <a  href="https://www.facebook.com">
                            <IconButton style={{ color: 'white', background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)', marginRight: '2%' }}>
                                <FacebookIcon />
                            </IconButton>
                        </a>
                    </div>
                </div>
                <div className="col-md-8">
                    <div style={{ boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)', padding: '5%', borderRadius: '10px'}}>
                        <form>
                            <h3 style={{marginBottom:'5%'}} className={styles.gradientText}>Send Enquiry</h3>
                            <div className="form-group m-1">
                                <input style={{border: 'none', borderBottom: '1px solid #d3d3d3', borderRadius: '0px', marginBottom: '2%'}} type="text" className="form-control" placeholder="Name" id="name" name="name" />
                            </div>
                            <div className="form-group m-1">
                                <input style={{border: 'none', borderBottom: '1px solid #d3d3d3', borderRadius: '0px', marginBottom: '2%'}} type="email" className="form-control" placeholder="Email" id="email" name="email" />
                            </div>
                            <div className="form-group m-1">
                                <input style={{border: 'none', borderBottom: '1px solid #d3d3d3', borderRadius: '0px', marginBottom: '2%'}} type="tel" className="form-control" placeholder="Phone Number" id="phone" name="phone" />
                            </div>
                            <div className="form-group m-1">
                                <textarea style={{border: 'none', borderBottom: '1px solid #d3d3d3', borderRadius: '0px', marginBottom: '2%'}} className="form-control" placeholder="Message" id="message" name="message" rows="4" cols="50"></textarea>
                            </div>
                            <div className="text-center">
                                <button style={{background: 'linear-gradient(90deg, rgba(106,44,112,1) 13%, rgba(184,33,51,1) 91%)'
                                    , borderRadius: '20px', width: '20%', marginTop: '5%', outline: 'none', border: 'none'
                                }} type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactDetailsComponent;
