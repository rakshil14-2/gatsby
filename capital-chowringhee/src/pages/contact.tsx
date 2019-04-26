import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Contact from '../components/contact/contact';

function ContactPage() {
  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Contact></Contact>
  </Layout>
}

export default ContactPage