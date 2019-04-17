import React from 'react';
import { useOffers } from '../../hooks/offers-hook';
import Img from "gatsby-image"
import offersJson from '../../images/products/offers/offers.json';
import styles from './main.module.scss';

function Main() {
    const { offersAllImagesFluid, offersAllImagesFixed } = useOffers();

    function getProductFluid(fluid: any, imageJson: any, index: number) {
        return <div className={styles.product} key={index}>
            <div className={styles.picture}><Img fluid={fluid} ></Img></div>
            <div className={styles.details}>{imageJson.name.concat('. ',imageJson.descr,' ', imageJson.specs)}</div>
        </div>
    }

    function getProductFixed(fixed: any, imageJson: any, index: number) {
        return <div className={styles.product} key={index}>
            <div className={styles.picture}><Img fixed={fixed} ></Img></div>
            <div className={styles.details}>{imageJson.name.concat('. ',imageJson.descr,' ', imageJson.specs)}</div>
        </div>
    }

    function getAllProducts() {
        const allProducts: any[] = [];
        offersJson.forEach((j: any, index: number) => {
            allProducts.push(getProductFluid(offersAllImagesFluid[j.image], j, index));
            // allProducts.push(getProductFixed(offersAllImagesFixed[j.image], j, index));
        });
        return allProducts;
    }

    const allProducts = getAllProducts();
    const Temp = <div className={styles.main}>
        {
            allProducts.map(x => x)
        }
    </div>

    return Temp;
    // const images = [];
    // Object.keys(offersAllImagesFluid).forEach(x => images.push(offersAllImagesFluid[x]));
    // const Temp = <div className={styles.main}>
    //     <div className={styles.product}>
    //         <div className={styles.picture}>
    //             <Img fluid={images[2]}></Img>
    //         </div>
    //     </div>
    //     {/* <Img fluid={images[1]}></Img>
    //     <Img className="product" fluid={images[2]}></Img>
    //     <Img fluid={images[3]}></Img>
    //     <Img fluid={images[3]}></Img>
    //     <Img fluid={images[4]}></Img>
    //     <Img fluid={images[5]}></Img>
    //     <Img fluid={images[6]}></Img>
    //     <Img fluid={images[0]}></Img>
    //     <Img fluid={images[2]}></Img>
    //     <Img className="product" fluid={images[1]}></Img>
    //     <Img fluid={images[3]}></Img> */}
    // </div>;
    // return Temp;
}

export default Main;
/*
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
*/