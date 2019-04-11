import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogsListing = ({ data }) => (
    <Layout>
        <SEO title="Page two" />
        <h1>This is blogs listing page</h1>
        <p>Welcome to my blogs</p>
        <Link to="/">Go back to the homepage</Link>
        {data.allMarkdownRemark.edges.map((x: any, index: number) => {
            return <div key={index}><Link to={x.node.fields.slug} >{x.node.frontmatter.description}</Link></div>
        })}
        {/* {console.log(data.allMarkdownRemark.edges)} */}
    </Layout>
)

export default BlogsListing

export const query = graphql`
query {allMarkdownRemark{edges{node{fields{slug}}    node{frontmatter{description}}}}}
`

// {allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
//     limit: 1000){edges{node{fields{slug} frontmatter{title}}}}}