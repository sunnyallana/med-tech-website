import React from 'react';
import chairman from '../../images/chairman.jpg';
import './Story.css';

export default function HeadInfo() {
  return (
    <>
      <div className="container-fluid" style={{margin:"2rem 0"}}>
    <div className="row container-fluid about-us">
        <div className="col-lg-8 col-sm-12">
            <h2 className='gradientText h1'>From the Chairman’s Desk</h2>
            <p className='text-justify fw-light lh-base' style={{fontSize:"1.2rem",lineHeight:"1.6rem"}}>Over forty years ago, I envisaged a future of excellence as a healthcare solution provider to the Qatar market. Today, I am proud to say that vision has become a glorious reality, with MedTech being one of the premier healthcare technology solution provider in Qatar and the Middle East. <br/><br/>
Throughout MedTech’s exhilarating journey, my vision and core values have always remained my North Star. Our mission remains to cater to Qatar’s growing healthcare industry, and supply markets in Qatar and the Middle East with the world-class medical technology. We aim to capitalise on our success and challenge ourselves to reach new pinnacles of victory, for ourselves and our esteemed clients.
<br/><br/>
Our global presence enables us to deliver the world’s best technology to our clients, and our focus on customer centricity ensures equally world-class service. This winning formula has proven to be the cornerstone of our success, and will always continue to be. With the grace of Almighty God, we firmly believe that our greatest successes are still just around the corner.</p>
<h5>Dr. M P Hassan Kunhi PH.D</h5>
<h6 style={{color:"gray",marginBottom:"3rem"}}>Chairman & CEO</h6>
        </div>
        <div className="col-lg-4 col-sm-12 my-3">
            <img src={chairman} className='img-fluid rounded' alt='Chairman'/>
        </div>
    </div>
      </div>
    </>
  )
}
