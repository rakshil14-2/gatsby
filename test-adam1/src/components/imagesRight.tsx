import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function ImagesRight() {
  const gql = graphql`
  query {
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
    }`;
  
  const data = useStaticQuery(gql);
  // const data =  useStaticQuery(gql1);

  const Temp = data.allFile.edges.map((x: any, index: number) => {
    return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
  });
  return Temp;
}
export default ImagesRight;