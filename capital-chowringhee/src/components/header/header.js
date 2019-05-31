import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';
// import { useMetaData } from '../../hooks/site-metadata';
import { imageProcessor } from '../../hooks/image-processor-hook';

const Header = () => {
	// const { metaData } = useMetaData();
  const temp = imageProcessor('logo', 'fixed');
  // console.log('header traversed');
	return (
		<div className={styles.container}>
			<div className={styles.brandLogo}>
				<Link to="/">
					{/* {metaData.title}  */}
					{temp}
				</Link>
			</div>

			<div className={styles.menu}>
				<Link to="/" className={styles.link} activeClassName={styles.active}>
					Home
				</Link>
				<Link to="/aboutUs/" className={styles.link} activeClassName={styles.active}>
					About
				</Link>
				<Link to="/contacts/" className={styles.link} activeClassName={styles.active}>
					Contacts
				</Link>
				<Link to="/service/" className={styles.link} activeClassName={styles.active}>
					Service
				</Link>
				<Link to="/showcase/" className={styles.link} activeClassName={styles.active}>
					Showcase
				</Link>
				<Link to="/shop/" className={styles.link} activeClassName={styles.active}>
					Shop
				</Link>
				<Link to="/workshop/" className={styles.link} activeClassName={styles.active}>
					Workshop
				</Link>
			</div>

			<div className={styles.brandName}>
				{/* <Link to='/'>Login</Link> */}
				Capital Chowringhee Pvt. Ltd.
			</div>
		</div>
	);
};
export default Header;

/*
  <header className={styles.header}>
      <h2 className={styles.headerLeft}>
      <Link
        to="/">
        {metaData.title}
      </Link>
    </h2>
    <HeaderMain></HeaderMain>
    <HeaderRight></HeaderRight>
  </header>
*/
