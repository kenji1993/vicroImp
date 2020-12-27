import React from 'react'
import Navbar from './components/Navbar'
import Logo from './components/Logo'



const Header = () => {
    return(
        <>    
                <div className="container">
                    <div className="row header-row">
                        <Logo/>
                        <Navbar/>
                    </div>
                </div>
            
        </>
    )
}

export default Header