import React from 'react'
import CartWidget from './CartWidget'


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pantalones</a>
                    </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Chombas</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar