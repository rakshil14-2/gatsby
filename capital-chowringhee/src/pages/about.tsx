import React from "react"
import Layout from "../components/layout/layout"
import { useMarkDownHtml } from '../hooks/mark-down-hook';

function AboutPage() {
  const html = useMarkDownHtml('about');

  const Temp = () => <div className="mark-down" dangerouslySetInnerHTML={{ __html: html }}></div>

  return <Layout>
    <Temp></Temp>
  </Layout>
}

export default AboutPage