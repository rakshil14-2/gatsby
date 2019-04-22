import React from "react"
import Main from '../components/main/main';

import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {

  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Main></Main>
  </Layout>
}

export default IndexPage

/*

*/