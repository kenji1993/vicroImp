import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark col-4">
                <ul>
                    <li className="nav-item">
                        <NavLink to="/category/remeras" className="nav-link" >Remeras</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/pantalones" className="nav-link" >Pantalones</NavLink>
                    </li>
                        <li className="nav-item">
                        <NavLink to="/category/chombas" className="nav-link" >Chombas</NavLink>
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