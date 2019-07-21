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
				<Link to="/" >
					Home
				</Link>
				<Link to="/aboutUs/" >
					About
				</Link>
				<Link to="/contacts/" >
					Contacts
				</Link>
				<Link to="/service/" >
					Service
				</Link>
				<Link to="/showcase/" >
					Showcase
				</Link>
				<Link to="/shop/" >
					Shop
				</Link>
				<Link to="/workshop/" >
					Camera-Workshop
				</Link>
				<Link to="/casioService/" >
					Casio-Service
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
  
*/
