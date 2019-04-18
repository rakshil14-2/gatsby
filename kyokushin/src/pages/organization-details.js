import React from "react";
import Layout from "../components/layout";
import {organizationDetailsConfig} from "../assets/organization-details.config";

const OrganizationDetails = (state) => {
    const selected = state.location.state.name;
    return <Layout>
                {organizationDetailsConfig[selected]()}
            </Layout>
}

export default OrganizationDetails;