import React, { useEffect, useState } from "react"
import { Link } from "gatsby";
import styles from './header.module.scss';
function HeaderMain() {
    return <nav className={styles.headerMain}>
        <Link to='/' className={styles.link} activeClassName={styles.active} >Home</Link>
        <Link to='/about' className={styles.link} activeClassName={styles.active}>About</Link>
        <Link to='/contact' className={styles.link} activeClassName={styles.active}>Contact</Link>
        <Link to='/service' className={styles.link} activeClassName={styles.active}>Service</Link>
        <Link to='/showcase' className={styles.link} activeClassName={styles.active}>Showcase</Link>
        <Link to='/shop' className={styles.link} activeClassName={styles.active}>Shop</Link>
    </nav>
}

export { HeaderMain };