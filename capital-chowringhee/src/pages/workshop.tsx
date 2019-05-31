import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Workshop from '../components/workshop/workshop';

function WorkshopPage() {
  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Workshop></Workshop>
  </Layout>
}

export default WorkshopPage