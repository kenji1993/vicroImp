import React from 'react'


const Item = ({ id, title, price }) => {
    return (
        <div className="card-container">
            <div className="info-container">
                <p className="id-code">ID: {id}</p>
                <p className="title">{title}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    ) 
}

export default Item