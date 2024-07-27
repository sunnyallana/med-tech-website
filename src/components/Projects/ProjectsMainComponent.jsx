import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion } from "framer-motion"


const ProjectsMainComponent = () => {
    const [categories, setCategories] = useState({
        medicalInformatics: {
            name: 'Medical Informatics & Technology',
            details: [
                'Healthcare Integration System',
                'Hospital Information System',
                'Internet of Things (IoT) Solutions',
                'Patient Monitoring and Tracking Systems',
                'Mobile Solutions',
                'Electronic Medical Record Systems'
            ],
            showDetails: false
        },
        turnKeySolutions: {
            name: 'Turn Key Solutions',
            details: [
                'Design and Concept Development',
                'Medical Equipment Planning',
                'Civil/MEP Works',
                'Technology Sourcing and Delivering',
                'Installation and Maintenance'
            ],
            showDetails: false
        },
        capitalEquipment: {
            name: 'Capital Equipment',
            details: [
                'Automation',
                'Infection Control',
                'Defibrillator',
                'Dental',
                'Radiology',
                'Sports Healthcare',
                'Lab Furniture'
            ],
            showDetails: false
        }
    });

    const toggleDetails = (category) => {
        setCategories(prevCategories => ({
            ...prevCategories,
            [category]: {
                ...prevCategories[category],
                showDetails: !prevCategories[category].showDetails
            }
        }));

        // Close other categories
        Object.keys(categories).forEach(cat => {
            if (cat !== category) {
                setCategories(prevCategories => ({
                    ...prevCategories,
                    [cat]: {
                        ...prevCategories[cat],
                        showDetails: false
                    }
                }));
            }
        });
    };

    return (
        <div style={{ padding: '5% 5% 5% 5%' }} className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <p style={{ fontSize: '1.2rem' }}>
                        Our team of highly qualified professionals are very capable of supporting and executing projects with regards to medical equipment planning, design, facility and functional planning, accreditation support, hospital branding, project coordination / supervision, installation technical support, application support as well as Turnkey Project Management. As one of the leading medical equipment suppliers in Qatar representing global leaders in the industry, we offer a complete portfolio covering the critical areas in every Healthcare Facility.
                    </p>
                    <br />
                    <p style={{ fontSize: '1.2rem' }}>
                        We strive to make it successful with meticulous attention to all aspects, most important of which are quality, time and cost. Integrating healthcare support services, IT systems equipment with the initial construction and development ensures a comprehensive overall project solution.
                    </p>
                    <br />
                    <ul style={{ color: '#B11C45', fontSize: '1.2rem' }}>
                        <li>On-site project management including construction supervision.</li>
                        <li>Co-ordination of construction & commissioning of hospitals</li>
                        <li>Quality control of construction & materials</li>
                        <li>Co-ordination between contractor, client & consultants.</li>
                        <li>Start-up support including equipment, staff & systems.</li>
                        <li>Assistance in local authority clearances & approvals.</li>
                        <li>Our mission is to provide successful completion of a project for our clients</li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <motion.img 
                     initial={{ y: 80 }}
                     whileInView={{ y: 0 }}
                     transition={{ duration: 0.7 }}                 
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '120vh',
                        borderRadius: '10px',
                    }} src={`${process.env.PUBLIC_URL}/ProjectsMainImage.jpg`} alt="Projects Main" className="img-fluid"/>
                </div>
            </div>
            <div style={{ padding: '2% 5% 5% 5%', textAlign: 'center' }} className="container-fluid">
                <h1 className={styles.gradientText}>End to End Solutions</h1>
            </div>

            <div style={{ margin: '0 10% 0 10%', textAlign: 'center' }} className='row'>
                
                {Object.keys(categories).map(category => (
                    <div key={category} className="col-md-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                              scale: 0.8,
                              borderRadius: "50%"
                            }}
                            className={`${styles.parentBox} ${categories[category].showDetails ? styles.parentBoxActive : ''}`}
                            onClick={() => toggleDetails(category)}
                        >
                            {categories[category].name}
                        </motion.div>
                        {categories[category].showDetails && (
                            <div className="d-flex flex-wrap justify-content-center">
                                {categories[category].details.map((item, index) => (
                                    <div key={index} style={{ ...detailBoxStyle, color: '#b3203a' }}>{item}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const detailBoxStyle = {
    background: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '10px',
};

export default ProjectsMainComponent;
