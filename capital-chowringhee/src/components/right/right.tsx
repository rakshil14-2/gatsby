import React from "react"
import styles from './right.module.scss';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"

function Right({children}) {
    const {allImagesFluid} = useGallary('brands','fluid');
    const allImagesArray = Object.keys(allImagesFluid).map(x => allImagesFluid[x]);

    const Temp = <div className={styles.left}>
        {
            allImagesArray.map((a, index) => {
                return <div key={index} className={styles.brands}><Img  fluid={a}></Img></div>
            })
        }
    </div>

    return Temp;
}

export default Right;