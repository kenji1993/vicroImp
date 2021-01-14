import React from 'react'


const ItemDetail = ({ item }) => {

    const onAdd = () => {
        console.log(`Has agregado ${item.title}`)
    }
   
    return (
        <div className="card item">
            <img className="card-img-top" src={item.pictureUrl} alt={item.title}/>
            <h4 className="card-title">{item.title}</h4>
            <div className="card-body">
                <p className="card-text">{item.description}</p>
                <p className="card-text">Colores: {item.colores}</p>
                <p className="card-text"><span>$</span>{item.price}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <div className="productCounter row">                
                <button type="button" onClick={ onAdd } className="btn btn-outline-dark btn-lg mt-1">Agregar al carrito</button>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail