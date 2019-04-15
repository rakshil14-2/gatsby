import React from "react"
// import { StaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import Footer from "../footer/footer";
import Left from "../left/left";
// import { useGeneric } from '../../hooks/site-metadata-hook';

// import "./layout.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return <div className='container'>
    <Header></Header>
    <Left></Left>
    <main className='main'>{children}</main>
    <div className='right'></div>
    <Footer></Footer>
  </div>
}
export default Layout

/*
<>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
*/
