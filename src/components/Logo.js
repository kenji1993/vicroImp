import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../img/vicroLogo.jpeg'

const Logo = () => {
    return(
        <>
        <Router>
        <Link to="/">
            <figure className="col-2">
                <img src={logo} className="logo" alt="Logo"></img>
            </figure>
        </Link>
        </Router>
       
        </>
    )
}

export default Logo