import { Link } from "gatsby"
import React from "react"
import styles from './header.module.scss';
import { useMetaData } from '../../hooks/site-metadata';
import { HeaderMain } from './header-main';
import { HeaderRight } from './header-right';

const Header = () => {
  const { metaData } = useMetaData();
  return <header className={styles.header}>
    <h2 className={styles.headerLeft}>
      <Link
        to="/">
        {metaData.title}
      </Link>
    </h2>
    <HeaderMain></HeaderMain>
    <HeaderRight></HeaderRight>
  </header>
}
export default Header

/*
 
*/
