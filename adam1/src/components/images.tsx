import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Images() {
    const gql = graphql`
    query {
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
      }`;
    const data = useStaticQuery(gql);
    const Temp = data.allFile.edges.map((x: any, index: number) => {
        return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
    });
    return Temp;
}
export default Images;

/*

const Images = () => (
    <StaticQuery
        query={graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "images"}}) {
              edges {
                node {
                  id
                  childImageSharp {
                    id
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
    `}
        render={(data: any) => {
            const Temp = data.allFile.edges.map((x:any,index:number)=>{
                return <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
            });
            return Temp;
        }}
    ></StaticQuery>
)
export default Images;
*/