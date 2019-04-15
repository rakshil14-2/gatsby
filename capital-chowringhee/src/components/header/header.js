import { Link } from "gatsby"
import React from "react"
import { useMetaData } from '../../hooks/site-metadata';
import { HeaderMain } from './header-main';
import { HeaderRight } from './header-right';

const Header = () => {
  const { metaData } = useMetaData();
  return <header className="header">
    <h2 className="header-left">
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
 style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}

style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
