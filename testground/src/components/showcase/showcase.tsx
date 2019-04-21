import React, { Fragment } from 'react';
// import { useShowcase } from '../../hooks/showcase-hook';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import showcaseJson from '../../gallaries/showcase/showcase.json';
import styles from './showcase.module.scss';

// &#x20B9;

function Showcase() {
    const allImagesFixed = useGallary('showcase');

    function toCategoriesObject(itemsMeta: any[]) {
        const categoriesObject = {};
        itemsMeta.forEach(x => {
            if (x.category) {
                categoriesObject[x.category] || (categoriesObject[x.category] = []);
                categoriesObject[x.category].push(x);
            }
        })
        return categoriesObject;
    }

    function getFormattedCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: "currency", currency: 'INR', minimumFractionDigits: 0 }).format(amount);
    }

    function getDisplayItem(item: any, index: number) {
        const savePercent = ' ('.concat(String(Math.round((item.mrp - item.offerPrice) / item.mrp * 100)),'%)');
        const temp = <div key={index}>
            <div>
                <Img fixed={allImagesFixed[item.image]}></Img>
            </div>
            <div className={styles.details}>
                <div className={styles.name}>{item.name}</div>
                <div>{item.descr}</div>
                <div>{item.specs}</div>
                {/* <p>
                    <span className={styles.price}>
                        {getFormattedCurrency(item.offerPrice)}
                    </span>
                    <del className={styles.mrp}>
                        {getFormattedCurrency(item.mrp)}
                    </del>
                    <span className={styles.save}>
                        Save {getFormattedCurrency(item.mrp - item.offerPrice)}{savePercent}
                    </span>
                </p> */}
            </div>
        </div>
<<<<<<< HEAD
=======
    }

    function getAllItems() {
        const allItems: any[] = [];
        // offersJson.forEach((j: any, index: number) => {
        //     allProducts.push(getItemFluid(offersAllImagesFluid[j.image], j, index));

        // });
        // return allProducts;
        Object.keys(itemsAllImagesFluid).forEach((x: any, index: number) => {
            allItems.push(
                <div key={index} style={{ width: '436px', height: '326px' }}><Img fluid={itemsAllImagesFluid[x]}></Img></div>
            )
        });
        return allItems;
    }

    function getDisplayItem(item: any, index: number) {
        const temp = <div key={index}>
            <div style={{ width: '250px', height: '250px' }}>
                <Img fluid={itemsAllImagesFluid[item.image]}></Img>
            </div>
            <div>{item.name}</div>
        </div>
>>>>>>> ed086e5242b5290b4548584f47dc6a3e40d3cbf5
        return temp;
    }

    const categoriesObject: any = toCategoriesObject(showcaseJson);
    const categoriesObjectKeys: string[] = Object.keys(categoriesObject);
    const Temp = <div >

        {categoriesObjectKeys.map((categoriesKey, index) => {
            return <Fragment key={index}> <h1 className={styles.heading}>{categoriesKey}</h1>
                <div className={styles.category}>
                    {
                        categoriesObject[categoriesKey].map((x: any, index: number) => {
                            return getDisplayItem(x, index);
                        })
                    }
                </div>
            </Fragment>
        })
        }

    </div>

    return Temp;
}

export default Showcase;
/*
// function getItemFluid(fluid: any, imageJson: any, index: number) {
    //     const savePercent = ' ('.concat(String(Math.round((imageJson.mrp - imageJson.offerPrice) / imageJson.mrp * 100)), '%)');
    //     return <div className={styles.product} key={index}>
    //         <div className={styles.picture}><Img fluid={fluid} ></Img></div>
    //         <div className={styles.details}>
    //             <div>{imageJson.name}</div>
    //             <div>{imageJson.descr}</div>
    //             <div>{imageJson.specs}</div>
    //             <p>
    //                 <span className={styles.offerPrice}>
    //                     {getFormattedCurrency(imageJson.offerPrice)}
    //                 </span>
    //                 <del className={styles.mrp}>
    //                     {getFormattedCurrency(imageJson.mrp)}
    //                 </del>
    //                 <span className={styles.save}>
    //                     Save {getFormattedCurrency(imageJson.mrp - imageJson.offerPrice)}{savePercent}
    //                 </span>
    //             </p>
    //         </div>
    //     </div>
    // }

    // function getAllItems() {
    //     const allItems: any[] = [];
    //     Object.keys(allImagesFixed).forEach((x: any, index: number) => {
    //         allItems.push(
    //             <div key={index} style={{ width: '436px', height: '326px' }}><Img fluid={allImagesFixed[x]}></Img></div>
    //         )
    //     });
    //     return allItems;
    // }



        { <h2>Rack1</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div> }
        { <h2>Rack2</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div>
        <h2>Rack3</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div>
        <h2>Rack4</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div>}

*/
