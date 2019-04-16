import React from 'react';
import { useOffers } from '../../hooks/offers-hook';
import Img from "gatsby-image"

function Main() {
    const { offersAllImages } = useOffers();
    const images = [];
    Object.keys(offersAllImages).forEach(x => images.push(offersAllImages[x]));
    const Temp = <div className="main">
       <Img className="product" fluid={images[0]}></Img>
       <Img fluid={images[1]}></Img>
       <Img className="product" fluid={images[2]}></Img>
       <Img fluid={images[3]}></Img>
       <Img fluid={images[3]}></Img>
       <Img fluid={images[4]}></Img>
       <Img fluid={images[5]}></Img>
       <Img fluid={images[6]}></Img>
       {/* <Img fluid={images[7]}></Img> */}
       <Img fluid={images[0]}></Img>
       <Img fluid={images[2]}></Img>
       <Img className="product" fluid={images[1]}></Img>
       <Img fluid={images[3]}></Img>
    </div>;
    return Temp;
    // return <div className="main">
    //     <div>This is one</div>
    //     <div>This is two</div>
    //     <div>This is one</div>
    //     <div>This is two</div>
    //     <div>This is one</div>
    //     <div>This is two</div>
    //     <div>This is one</div>
    //     <div>This is two</div>
    // </div>
}

export default Main;