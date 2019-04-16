import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { useOffers } from "../../hooks/offers-images";
import offersJson from '../../images/products/offers/offers.json';
import Img from "gatsby-image"

function Left() {
    const { offersAllImages } = useOffers();

    const Temp = <div className="left">
        {offersJson.map((x: any, index: number) => {
            return <div className="left-item" key={index}>
                <div>{x.name}</div>
                <Img  fluid={offersAllImages[x.image]}></Img>
            </div>
        })}
    </div>

    return Temp;
}

export default Left;