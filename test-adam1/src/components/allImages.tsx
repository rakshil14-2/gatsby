import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function AllImages({ source }) {
  const gql = graphql`{
  qr1:
  allFile(filter: {sourceInstanceName: {eq: "images1"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  qr2:
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
 } `;

  const data = useStaticQuery(gql);
  const sourceObject = {
    images: data.qr1.edges,
    images1: data.qr2.edges
  }

  const Temp = sourceObject[source].map((x: any, index: number) => {
    return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
  });

  return Temp;
}
export default AllImages;