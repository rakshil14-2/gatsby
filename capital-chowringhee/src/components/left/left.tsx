import React from "react"
import styles from './Left.module.scss';
import { useGallary } from '../../hooks/gallary-hook';
// import { useShowcase } from '../../hooks/showcase-hook';
import Img from "gatsby-image"

function Left() {
    const allImagesFixed = useGallary('shop');
    const allImagesArray = Object.keys(allImagesFixed).map(x => allImagesFixed[x]);
   

    const Temp = <div className={styles.left}>
        {/* {
            allImagesArray.map((a, index) => {
                return <Img key={index} fixed={a}></Img>
            })
        } */}
    </div>

    return Temp;
}

export default Left;