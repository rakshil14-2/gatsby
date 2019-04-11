import React from "react";
import { Link, graphql } from "gatsby";
import { Img } from "gatsby-image";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data);
  return <div>
    {data.allFile.edges.map((x, index) =>
      <div key={index}>
      <Img fixed={x.node.childImageSharp.fixed} alt="Images" />
        {/* <div><li>{x.node.childImageSharp.fluid.base64}</li></div> */}
      </div>
    )}
    </div>

  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  //   {
  //     data.allFile.edges.map((x, index) =>
  //     <div key={index}>
  //       <Img fluid={x.node.childImageSharp.fluid} alt="Images"></Img>
  //     </div>
  //   )
  //   }
  // </Layout>
}

export default IndexPage

export const query = graphql`
query 
{
  allFile(filter:{sourceInstanceName:{eq:"images"}}) {
    edges {
      node  {
        id
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          
          }
        }
      }
    }
  }
}
`


/*
fluid(maxWidth: 2000){
            ...GatsbyImageSharpFluid

base64 tracedSVG aspectRatio src srcSet srcWebp srcSetWebp sizes originalImg originalName presentationWidth presentationHeight
{

  data.allImageSharp.edges.map((x, i) => {
    console.log(x.fluid.sizes);
    return <Img sizes={x.fluid.sizes}></Img>
  })
}


{
  data.allImageSharp.edges.map((x, index) =>
    <div key={index}>
      <Img fluid={x.node.fluid} alt="Images"></Img>
    </div>
  )
}
*/