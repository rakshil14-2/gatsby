import React from "react";
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby";
import headerStyles from './header.module.scss'

export default () => ( 
    <div className= {headerStyles.headerContainer}>
        <div className={headerStyles.brand}>
            <div>
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                        siteMetadata {
                            title
                        }
                    }
                    }
                `}
                render={data =>(<> {data.site.siteMetadata.title} </>)} />
            </div>
        </div>
        <div className={headerStyles.menuBar}>
            <Link to="/">Home</Link>
            <Link to="/founder/">Founder</Link>
            <Link to="/organization/">Organization</Link>
            <Link to="/gurukul/">Gurukul</Link>
            <Link to="/gallery/">Gallery</Link>
            <Link to="/events/">Events</Link>
            <Link to="/dojo/">Dojo</Link>
            <Link to="/contact/">Contact</Link>
        </div>
    </div>
  )




  //<Navbar bg="dark" variant="dark">
    // <Navbar.Brand href="/">
    //     <h4>
    //       <StaticQuery
    //           query={graphql`
    //              query SiteTitleQuery {
    //                  site {
    //                  siteMetadata {
    //                      title
    //                  }
    //               }
    //              }
    //           `}
    //           render={data =>(<> {data.site.siteMetadata.title} </>)} />
    //     </h4>
    
    // </Navbar.Brand>
    // <Nav className="mr-auto">
    //   <Nav.Link><Link to="/">Home</Link></Nav.Link>
    //   <Nav.Link><Link to="/founder/">Founder</Link></Nav.Link>     
    //   <Nav.Link><Link to="/organization/">Organization</Link></Nav.Link>
    //   <Nav.Link><Link to="/gurukul/">Gurukul</Link></Nav.Link>
    //   <Nav.Link><Link to="/gallery/">Gallery</Link></Nav.Link>
    //   <Nav.Link><Link to="/events/">Events</Link></Nav.Link>
    //   <Nav.Link><Link to="/">Dojo</Link></Nav.Link>
    //   <Nav.Link><Link to="/contact/">Contact</Link></Nav.Link>
    //   <NavDropdown title="Nested" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4.3">
    //     Something else here
    //     </NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    //   </NavDropdown>
    // </Nav>
    // </Navbar>