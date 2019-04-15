import React from "react"
import { useOffers } from "../../hooks/offers-images";
import offersJson from '../../images/products/offers/offers.json';
import Img from "gatsby-image"

function Left() {
    const { offersData } = useOffers();

    const offersAllImages = {};
    offersData.allFile.edges.forEach((x: any) => {
        offersAllImages[x.node.name] = x.node.childImageSharp.fluid;
    })

    // console.log(offersAllImages);

    const Temp = offersJson.map((x:any,index:number)=>{
        return <div key={index}>{x.name}</div>
        // <Img key={index} fluid={offersAllImages[x.image]}></Img>
    })
    return Temp;

    // return <div className="left">
    //     {offersJson.map((x: any, index: number) => {
    //         // console.log(offersAllImages[x.image]);
    //         return <Img key={index} fluid={offersAllImages[x.image]}></Img>
    //     })}
    // </div>



    // const Temp = productsJson.map((x: any, index: number) => {
    //     return <div key={index}>
    //         <label>{x.name.concat(' ', x.oldPrice, ' ', x.newPrice)}</label>
    //         <Img fluid={allProductImages[x.name]}></Img>
    //     </div>
    // });
    // return Temp;

}

export default Left;