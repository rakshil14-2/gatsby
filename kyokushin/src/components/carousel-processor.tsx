import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function CarouselProcessor({ source }){

  const carouselGql = graphql`{
    homeCarousel:
    allFile( sort: { fields: [name]}, filter: {sourceInstanceName: {eq: "home-carousel"}}) {
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
   }`;
    const data = useStaticQuery(carouselGql);

    const Temp = data.homeCarousel.edges.map((x: any, index: number) => {
      return  <Carousel.Item key={index}>
                <Img fluid={x.node.childImageSharp.fluid}></Img>
              </Carousel.Item>
            
    });
  
    return <Carousel> {Temp} </Carousel>;
}

export default CarouselProcessor;