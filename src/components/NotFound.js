import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
    let location = useLocation();

    return (
        <div >
            <h3>
               Error 404<code>{location.pathname}</code>

            </h3>
            <div>
                <Link to="/">
                    Volver al home
          </Link>
            </div>
        </div>
    )
}

export default NotFound