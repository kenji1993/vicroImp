import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Item({ id, title, description, price, pictureUrl }) {

    return (
        <Router>

      
        <div className="card item">
        
            <img className="card-img-top" src={pictureUrl} alt={title}/>
            <h4 className="card-title">{title}</h4>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text"><span>$</span>{price}</p>
                <Link to={`/item/${id}`}>Detalles</Link>
            </div>
        </div>
        
                    
        </Router>
    )
}

export default Item