import React from 'react'

function Item({ id, title, description, price, pictureUrl }) {

    return (
        <div className="card item">
            <h4 className="card-title">ID:{id} {title}</h4>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text"><span>$</span>{price}</p>
                <img className="card-img-bottom" src={pictureUrl} alt={title}/>
            </div>
        </div>
    )
}

export default Item