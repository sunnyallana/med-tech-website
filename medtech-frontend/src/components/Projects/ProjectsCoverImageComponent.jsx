const ProjectsCoverImageComponent = ({ image }) => {
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        position: 'relative',
    };


    return (
        <div style={backgroundImage}>
            <div>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default ProjectsCoverImageComponent;
