import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function WidgetProcessor({ source }) {
  const widgetGql = graphql`{
  qr1:
  allFile(filter: {sourceInstanceName: {eq: "left-widget"}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  qr2:
  allFile(filter: {sourceInstanceName: {eq: "right-widget"}}) {
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

  const data = useStaticQuery(widgetGql);
  const sourceObject = {
    leftWidget: data.qr1.edges,
    rightWidget: data.qr2.edges
  }

  const Temp = sourceObject[source].map((x: any, index: number) => {
    return <div key={index} className="image-spacing-bottom">
              <Img fluid={x.node.childImageSharp.fluid}></Img>
            </div>
          
  });

  return Temp;
}
export default WidgetProcessor;