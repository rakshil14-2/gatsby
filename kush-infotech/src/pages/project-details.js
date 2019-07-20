import React from "react";
import Layout from "../components/layout";
import {navigate} from "gatsby";
import { useGallery } from '../hooks/gallery-hook';
import {projectDetailsConfig} from "../assets/project-details.config";

const ProjectDetails = ({location}) => {
    
    const details = location.state ? location.state.source : typeof window !== 'undefined' ? navigate('/projects/'): 'kyokushinDetails';

    const projectImages = useGallery(details);

    return <Layout>
        <div className="project-details-container">
            <div className="images-container">
                {projectImages}
            </div>
            <div className="content">
                {projectDetailsConfig[details]()}
            </div>    
        </div>
    </Layout>
}

export default ProjectDetails;