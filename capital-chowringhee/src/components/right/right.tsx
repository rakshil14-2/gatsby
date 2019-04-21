import React from "react"
import styles from './right.module.scss';
// import { useShowcase } from '../../hooks/showcase-hook';
import Img from "gatsby-image"

function Right({children}) {
    // const { allImagesFluid } = useShowcase();

    const Temp = <div className={styles.right}>
    {children}
        {/* <h1>Showcase</h1>
        {Object.keys(allImagesFluid).map((x: any, index: number) => {
            return <div key={index} style={{ width: '200px', height: '200px' }}><Img fluid={allImagesFluid[x]} ></Img></div>;
        })} */}
    </div>

    return Temp;
}

export default Right;