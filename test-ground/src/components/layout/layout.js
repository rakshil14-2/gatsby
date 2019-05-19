import React from "react"
import Main from '../main/main'
import Showcase from '../showcase/showcase';
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  return <div className="container">
    <div className="header"></div>
    <div className="left"></div>
    {/* <Main></Main> */}
    <Showcase></Showcase>
    <div className="right"></div>
    <div className="footer"></div>
  </div>
}

export default Layout
