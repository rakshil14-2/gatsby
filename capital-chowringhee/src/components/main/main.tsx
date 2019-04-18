import React from 'react';
import { useOffers } from '../../hooks/offers-hook';
import Img from "gatsby-image"
import offersJson from '../../images/products/offers/offers.json';
import styles from './main.module.scss';

// &#x20B9;

function Main() {
    const { offersAllImagesFluid, offersAllImagesFixed } = useOffers();

    function getFormattedCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: "currency", currency: 'INR', minimumFractionDigits: 0 }).format(amount);
    }

    function getItemFluid(fluid: any, imageJson: any, index: number) {
        const savePercent = ' ('.concat(String(Math.round((imageJson.mrp - imageJson.offerPrice) / imageJson.mrp * 100)),'%)');
        return <div className={styles.product} key={index}>
            <div className={styles.picture}><Img fluid={fluid} ></Img></div>
            <div className={styles.details}>
                <div>{imageJson.name}</div>
                <div>{imageJson.descr}</div>
                <div>{imageJson.specs}</div>
                <p>
                    <span className={styles.offerPrice}>
                        {getFormattedCurrency(imageJson.offerPrice)}
                    </span>
                    <del className={styles.mrp}>
                        {getFormattedCurrency(imageJson.mrp)}
                    </del>
                    <span className={styles.save}>
                        Save {getFormattedCurrency(imageJson.mrp - imageJson.offerPrice)}{savePercent}
                    </span>
                </p>
            </div>
        </div>
    }

    function getProductFixed(fixed: any, imageJson: any, index: number) {
        return <div className={styles.product} key={index}>
            <div className={styles.picture}><Img fixed={fixed} ></Img></div>
            <div className={styles.details}>{imageJson.name.concat('. ', imageJson.descr, ' ', imageJson.specs)}</div>
        </div>
    }

    function getAllItems() {
        const allProducts: any[] = [];
        offersJson.forEach((j: any, index: number) => {
            allProducts.push(getItemFluid(offersAllImagesFluid[j.image], j, index));
            // allProducts.push(getProductFixed(offersAllImagesFixed[j.image], j, index));
        });
        return allProducts;
    }

    const Temp = <div className={styles.main}>
        <h1 className={styles.heading}>Special Offer</h1>
        {
            getAllItems().map(x => x)
        }
    </div>

    return Temp;
}

export default Main;