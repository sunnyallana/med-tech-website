import ProjectsMainComponent from "./Projects/ProjectsMainComponent";
import CoverImageComponent from "./CoverImageComponent";

const ProjectsComponent = () => {
    return (
        <div>
            <CoverImageComponent image="ProjectsCoverImage.jpg" title="Projects" />
            <ProjectsMainComponent/>
        </div>
    )
}

export default ProjectsComponent;