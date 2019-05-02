import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Showcase from "../components/showcase/showcase";
import ServiceCenters from '../components/service-centers/service-centers'

function ProductsPage() {
  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Showcase></Showcase>
  </Layout>
}

export default ProductsPage