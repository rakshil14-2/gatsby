import React from "react"
import Layout from "../components/layout/layout"
import { useMarkDownHtml } from '../hooks/mark-down-hook';
import SEO from "../components/seo"

function AboutPage() {
  const html = useMarkDownHtml('about');
  const Temp = () => <div className="mark-down" dangerouslySetInnerHTML={{ __html: html }}></div>

  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`retailers`, `electronic products`, `retail shop in Kolkata`]} />
    <Temp></Temp>
  </Layout>
}

export default AboutPage