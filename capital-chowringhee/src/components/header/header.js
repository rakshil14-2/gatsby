import { Link } from "gatsby"
import React from "react"
import styles from './header.module.scss';
import { useMetaData } from '../../hooks/site-metadata';

const Header = () => {
  const { metaData } = useMetaData();
  return <div className={styles.container}>
    
    <div className={styles.brand}> <Link to="/"> {metaData.title} </Link> </div>
    
    <div className={styles.menu}>
    
        <Link to='/' className={styles.link} activeClassName={styles.active} >Home</Link>
        <Link to='/about' className={styles.link} activeClassName={styles.active}>About</Link>
        <Link to='/contact' className={styles.link} activeClassName={styles.active}>Contact</Link>
        <Link to='/service' className={styles.link} activeClassName={styles.active}>Service</Link>
        <Link to='/showcase' className={styles.link} activeClassName={styles.active}>Showcase</Link>
        <Link to='/shop' className={styles.link} activeClassName={styles.active}>Shop</Link>

    </div>

    <div className={styles.controls}>
      {/* <Link to='/'>Login</Link> */}
    </div>
  </div>
  
}
export default Header











//   <header className={styles.header}>
  //     <h2 className={styles.headerLeft}>
  //     <Link
  //       to="/">
  //       {metaData.title}
  //     </Link>
  //   </h2>
  //   <HeaderMain></HeaderMain>
  //   <HeaderRight></HeaderRight>
  // </header>
