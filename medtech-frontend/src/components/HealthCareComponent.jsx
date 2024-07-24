import React from 'react';
import HealthCareCoverImageComponent from "./HealthCareServices/HealthCareCoverImageComponent";
import ImageAccordian from "./HealthCareServices/ImageAccordian";
import styles from './HealthCareServices/HealthCare.module.css';

const HealthCareComponent = () => {
  // Array of texts for ImageAccordian components
  const accordionTexts = [
    'Cardiology',
    'Dermatology',
    'Gynecology',
    'Neurology',
    'Orthopedics',
    'Oncology',
    'Pediatrics',
    'Psychiatry',
    'Radiology',
    'Urology',
    'Endocrinology',
    'ENT (Ear, Nose, Throat)',
    // Add more texts as needed
  ];

  return (
    <div>
      <HealthCareCoverImageComponent image="HealthCareCoverImage.jpg" />
      
      <div style={{margin: '3% 0 3% 0'}} className="text-center">
        <h1 className={styles.gradientText}>Our Solutions are</h1>
      </div>

      <div className="container mt-4">
        <div className="row">
          {accordionTexts.map((text, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ImageAccordian text={text} image={`${process.env.PUBLIC_URL}/joinUsImage.jpg`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCareComponent;