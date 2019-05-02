import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Shop from '../components/shop/shop';

function ShopPage() {
  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Shop></Shop>
  </Layout>
}

export default ShopPage