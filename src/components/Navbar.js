import React from 'react'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark col-4">
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
                    <li className="nav-item">
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar