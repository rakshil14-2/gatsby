import React from "react";
import Layout from "../components/layout";
import {navigate} from "gatsby";
import { useGallery } from '../hooks/gallery-hook';

const ProjectDetails = ({location}) => {
    
    const details = location.state ? location.state.source : typeof window !== 'undefined' ? navigate('/projects/'): 'kyokushinDetails';

    const projectImages = useGallery(details);

    return <Layout>
        <div className="project-details-container">
            <div className="images-container">
                {projectImages}
            </div>
            <div className="content">
                <h4>Contents under construction</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique mollis magna ut 
                    rutrum. Nullam blandit aliquam nulla, nec consectetur nibh finibus id. Proin ultricies, nulla quis 
                    viverra iaculis, ipsum magna luctus velit, non accumsan nisl nibh eu ante. Vivamus dictum rutrum 
                    arcu, vel mollis nisl dignissim id. Ut at odio ac quam tincidunt elementum non ut tortor. In hac 
                    habitasse platea dictumst. Pellentesque vel ornare erat. Mauris eu lectus faucibus neque malesuada 
                    maximus ut vitae augue. Proin aliquet feugiat massa, sed pulvinar nisl pellentesque suscipit. Etiam 
                    pharetra mauris neque, eu aliquet nulla mollis in. Nulla ornare eget velit at fermentum. Morbi 
                    iaculis sem vel velit feugiat, id eleifend urna bibendum. Praesent rhoncus, eros nec cursus ornare, 
                    dui neque feugiat felis, vel auctor risus nibh a turpis. Aliquam quis magna sem.
                </p>

                <p>
                    Curabitur vitae quam sit amet ex ornare ornare ut eu odio. Maecenas hendrerit luctus orci, sit amet 
                    faucibus lacus semper sed. Quisque rutrum sapien est, hendrerit interdum metus ultrices ut. Proin 
                    efficitur vitae tortor vel congue. Integer nec interdum risus. Phasellus scelerisque quam placerat, 
                    scelerisque massa sit amet, mollis libero. Donec in tellus ac elit aliquet vestibulum a vel ante. 
                    Aenean efficitur lacus dapibus sem cursus, sit amet bibendum erat fermentum. In pharetra sem vel 
                    orci scelerisque laoreet. Nulla vitae varius dui. Aliquam varius, lacus nec feugiat consequat, 
                    est metus luctus velit, quis hendrerit urna nibh et augue. Cras tristique nibh sed lacus tristique, 
                    vel dictum lorem dapibus.
                </p>

                <p>
                    Vestibulum venenatis consectetur condimentum. Integer dolor enim, cursus vel fermentum quis, 
                    viverra et ex. Aenean gravida sem non risus laoreet rhoncus sed eget velit. Quisque condimentum 
                    ante quis libero mollis, at luctus augue lobortis. Nunc odio est, aliquet cursus felis sit amet, 
                    vehicula suscipit neque. Phasellus ultrices erat eu ante lobortis, eu lobortis nisi tincidunt. 
                    Aenean pulvinar augue id tortor viverra imperdiet. Nullam vitae volutpat metus. Donec tempus purus 
                    et nisl posuere maximus. Aliquam pulvinar sapien in vulputate egestas. Nulla aliquam nisl lectus, 
                    ac tincidunt ligula sagittis laoreet. Mauris sit amet quam non tortor bibendum posuere. Nullam 
                    consequat fringilla sodales. Duis blandit odio elit. Nulla malesuada massa purus. Aenean sed dolor 
                    et ipsum laoreet malesuada luctus nec sem.
                </p>

                <p>
                    Aliquam posuere cursus feugiat. Cras justo massa, laoreet vel dictum at, pharetra at augue. Nam 
                    felis velit, cursus vel mauris sed, pharetra convallis dolor. Aliquam massa elit, porttitor 
                    tristique ultricies nec, porttitor eget justo. Quisque feugiat lobortis quam. Nullam eu rutrum 
                    sem. Pellentesque quis sollicitudin felis, mattis ultrices erat. Suspendisse potenti. Phasellus a 
                    dolor in purus eleifend congue. Curabitur elementum condimentum enim quis placerat. Etiam ut est 
                    in arcu porttitor facilisis. Nullam sed nisl et urna tristique ullamcorper. Nulla eu neque euismod, 
                    porttitor felis eget, vestibulum ex. Pellentesque placerat posuere massa, id fermentum sapien 
                    interdum vel.
                </p>

                <p>
                Nullam at purus ut diam finibus viverra at non purus. Praesent finibus iaculis dapibus. Donec laoreet, 
                odio id sodales condimentum, mi velit maximus nibh, sit amet finibus elit mi et elit. Fusce cursus quam 
                enim, ac aliquam nisl laoreet id. Donec non elit elementum, sollicitudin ex sed, egestas justo. Integer 
                nec diam eu purus ornare vulputate. Etiam varius metus id justo faucibus fringilla nec vel felis. 
                Vestibulum vehicula turpis sit amet turpis scelerisque ultricies. Cras tristique vel turpis quis 
                ullamcorper. Nam vel justo a ligula consequat ornare. Duis placerat, ipsum et suscipit venenatis, 
                magna leo fringilla felis, eu volutpat augue eros id lacus. Suspendisse vulputate ante velit, sit amet 
                suscipit augue maximus ut. Aenean leo risus, rhoncus sit amet gravida et, dictum et metus. Cras eu sem 
                turpis. Vivamus ac tincidunt purus. Phasellus posuere, urna quis sagittis vulputate, turpis augue congue 
                metus, eget sollicitudin orci libero vitae ligula.
                </p>
            </div>    
        </div>
    </Layout>
}

export default ProjectDetails;