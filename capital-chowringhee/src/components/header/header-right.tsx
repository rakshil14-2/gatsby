import React from "react"
import { Link } from "gatsby";

function HeaderRight(){
    return <div className='header-right'>
    <Link to='/'>Login</Link>
    </div>
}

export {HeaderRight};