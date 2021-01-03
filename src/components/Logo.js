import React from 'react'
import logo from './img/vicroLogo.jpeg'

const Logo = () => {
    return(
        <>
        <figure className="col-2">
            <img src={logo} className="logo" alt="Logo"></img>
        </figure>
        </>
    )
}

export default Logo