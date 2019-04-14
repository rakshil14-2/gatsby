import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import productsJson from '../products/products.json';

function Products() {

  const gql = graphql`{
      qr1:
      allFile(filter:{sourceInstanceName: {eq:"products"}, extension:{ne:"json"}}) {
        edges {
          node {
            sourceInstanceName
            name
            base
            extension
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`;

  const data = useStaticQuery(gql);
  const allProductImages = {};
  data.qr1.edges.forEach(element => {
    allProductImages[element.node.name] = element.node.childImageSharp.fluid;
  });
  
  const Temp = productsJson.map((x:any,index:number)=>{
    return <div key={index}>
      <label>{x.name.concat(' ', x.oldPrice, ' ', x.newPrice)}</label>
      <Img fluid = {allProductImages[x.name]}></Img>
    </div>
  }); 
  return Temp;
}
export default Products;

/*
 // const Temp = data.qr1.edges.map((x, index) => {
  //   const name = x.node.name;
  //   const details = productsJson.filter(t => t.name === name)[0];
  //   return <div key={index}>
  //     <label>{details.name.concat(' ', details.oldPrice, ' ', details.newPrice)}</label>
  //     <Img key={index} fluid={x.node.childImageSharp.fluid}></Img>
  //   </div>
  // });
*/