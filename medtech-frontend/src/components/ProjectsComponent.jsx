import ProjectsCoverImageComponent from "./Projects/ProjectsCoverImageComponent";
import ProjectsMainComponent from "./Projects/ProjectsMainComponent";

const ProjectsComponent = () => {
    return (
        <div>
            <ProjectsCoverImageComponent image="ProjectsCoverImage.jpg" />
            <ProjectsMainComponent/>
        </div>
    )
}

export default ProjectsComponent;