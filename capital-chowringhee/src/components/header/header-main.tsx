import React from "react"
import { Link } from "gatsby";

function HeaderMain() {
    return <div className='header-main'>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Service</Link>
        <Link to='/'>Products</Link>
        <Link to='/'>Photography</Link>
        <Link to='/'>Events</Link>
        <Link to='/'>Contest</Link>
    </div>
}

export { HeaderMain };