import HealthCareCoverImageComponent from "./HealthCareServices/HealthCareCoverImageComponent";
import ImageAccordian from "./HealthCareServices/ImageAccordian";
import styles from './HealthCareServices/HealthCare.module.css';

const HealthCareComponent = () => {
  return (
    <div className="container-fluid">
      <HealthCareCoverImageComponent image="CoverImage.jpg" />
      
      <div style={{margin: '3% 0 3% 0'}} className="text-center">
        <h1 className={styles.gradientText}>Our Solutions are</h1>
      </div>

      <div className="container mt-4">
        <div className="row">
          {/* First row */}
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Cardiology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Dermatology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Gynecology" />
          </div>
        </div>
        <div className="row">
          {/* Second row */}
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Neurology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Dermatology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Gynecology" />
          </div>
        </div>
        <div className="row">
          {/* Third row */}
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Cardiology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Dermatology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Gynecology" />
          </div>
        </div>
        <div className="row">
          {/* Fourth row */}
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Cardiology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Dermatology" />
          </div>
          <div className="col-md-4 mb-4">
            <ImageAccordian text="Gynecology" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareComponent;
