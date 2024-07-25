import React from 'react';
import ImageAccordian from "./HealthCareServices/ImageAccordian";
import styles from './HealthCareServices/HealthCare.module.css';
import CoverImageComponent from './CoverImageComponent';

const HealthCareComponent = () => {
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
  ];

  return (
    <div>
      <CoverImageComponent image="HealthCareCoverImage.jpg" title="Our Services" />
      
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