import React from 'react'
import Navbar from './components/Navbar'
import Logo from './components/Logo'



const Header = () => {
    return(
        <>
            <header>
                <Logo/>
                <Navbar/>
            </header>
        </>
    )
}

export default Header