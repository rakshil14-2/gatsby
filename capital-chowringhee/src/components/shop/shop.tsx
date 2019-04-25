import React, { Fragment } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import styles from './shop.module.scss';

function Shop() {
    const { allImagesFixed } = useGallary('shop');

    const allImages = Object.keys(allImagesFixed).map(x => allImagesFixed[x]);

    const Temp = <div className={styles.shop}>
        {
            allImages.map((x, index) => {
                return <Img key={index} fixed={x}></Img>
            })
        }
    </div>

    return Temp;
}

export default Shop;