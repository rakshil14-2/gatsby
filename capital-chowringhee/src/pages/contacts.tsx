import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Contact from '../components/contacts/contacts';

function ContactsPage() {
  return <Layout>
    <SEO title="Capital Chowringhee Pvt Ltd" keywords={[`gatsby`, `application`, `react`]} />
    <Contact></Contact>
  </Layout>
}

export default ContactsPage