import React from "react";
import { Link } from "gatsby"
import {imageProcessor} from "../hooks/image-processor-hook";
import headerStyles from './header.module.scss';
import {Navbar,Nav} from "react-bootstrap";


const Header = () => {
    const temp = imageProcessor("logo","fixed"); 
    return <React.Fragment>
            <Navbar expand="lg" className={headerStyles.menu}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/projects/">Projects</Link>
                  <Link to="/contacts/">Contacts</Link>
                  <Link to="/pricing/">Pricing</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className={headerStyles.brandContainer}>
              {temp}
            </div>
          </React.Fragment>
          
    
}
export default Header;