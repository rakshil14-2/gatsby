import React from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import offersJson from '../../gallaries/offers/offers.json';
import styles from './main.module.scss';

function Main() {
    // const { offersAllImagesFluid, offersAllImagesFixed } = useOffers();
    const {allImagesFixed} = useGallary('offers');

    function getFormattedCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: "currency", currency: 'INR', minimumFractionDigits: 0 }).format(amount);
    }

    function getItemFluid(fixed: any, imageJson: any, index: number) {
        const savePercent = ' ('.concat(String(Math.round((imageJson.mrp - imageJson.offerPrice) / imageJson.mrp * 100)), '%)');
        return <div className={styles.product} key={index}>
            <div className={styles.picture}>
                <Img fixed={fixed} ></Img>
            </div>
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

    function getAllItems() {
        const allItems: any[] = [];
        offersJson.forEach((j: any, index: number) => {
            allItems.push(getItemFluid(allImagesFixed[j.image], j, index));
        });
        return allItems;
    }

    const Temp =
        <div className={styles.main}>
            <h1 className={styles.heading}>Special Offer</h1>
            {
                getAllItems()
            }
        </div>

    return Temp;
}

export default Main;