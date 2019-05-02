import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer";
import Left from "../left/left";
// import Right from '../right/right';
// import { useGeneric } from '../../hooks/site-metadata-hook';

import "./layout.scss"

const Layout = ({ children }) => {
  return <div className='container'>    
    <Header></Header>
    <Left></Left>
    <main>{children}</main>
    {/* <Right></Right> */}
    <Footer></Footer>
  </div>
}
export default Layout

/*

*/
