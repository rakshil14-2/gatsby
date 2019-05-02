import React from "react";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ServiceCenters from '../components/service-centers/service-centers'

function ServicePage() {
  return <Layout>
   <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <ServiceCenters></ServiceCenters>
  </Layout>
}

export default ServicePage