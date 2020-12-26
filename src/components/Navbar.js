import React from 'react'


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
            </nav>
        </>
    )
}

export default Navbar