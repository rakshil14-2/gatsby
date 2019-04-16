import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { useOffers } from "../../hooks/offers-images";
import offersJson from '../../images/products/offers/offers.json';
import Img from "gatsby-image"

function Main() {
    const { offersAllImages } = useOffers();
    const Temp = <div className="main">
        {
            offersJson.map((x: any, index: number) => {
                return <div className="main-item" key={index}>
                    <div>{x.name}</div>
                    <Img  fluid={offersAllImages[x.image]}></Img>
                </div>
            })
        }
    </div>;
    return Temp;
}
export default Main;