import React from "react"
import { Link } from "gatsby";
import styles from './header.module.scss';

function HeaderRight(){
    return <div className={styles.headerRight}>
    {/* <Link to='/'>Login</Link> */}
    </div>
}

export {HeaderRight};