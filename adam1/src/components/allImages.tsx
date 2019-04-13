import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function AllImages() {
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

    const edges1 = data.qr1.edges;
    const edges2 = data.qr2.edges;

    // const Temp = data.allFile.edges.map((x: any, index: number) => {
    //     return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
    // });

    const Temp1 = edges1.map((x: any, index: number) => {
        return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
    });

    // const Temp2 = <div>Test</div>

    return Temp1;
}
export default AllImages;