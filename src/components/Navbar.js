import React from 'react'
import CartWidget from './CartWidget'


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark col-4">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.kenjiarakaki.com/">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.kenjiarakaki.com/">Pantalones</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.kenjiarakaki.com/">Chombas</a>
                    </li>
                    <li className="nav-item">
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar