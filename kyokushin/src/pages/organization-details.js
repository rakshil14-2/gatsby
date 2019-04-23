import React from "react";
import Layout from "../components/layout";
import {organizationDetailsConfig} from "../assets/organization-details.config";

const OrganizationDetails = ({location}) => {
    let name;
    location.state ? name = location.state.name : name = 'shokeiMatsui';
    return <Layout imageSource={name}>
                {organizationDetailsConfig[name]()}
            </Layout>
}

export default OrganizationDetails;