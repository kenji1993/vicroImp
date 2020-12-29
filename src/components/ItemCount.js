import React, {useState} from 'react'
import chomba from './img/chombasTommy.jpg'


const ItemCount = () => {
    
    const [productos, setProductos] = useState(0)

    const sumarProductos = () => {
        setProductos(productos +1)
    }
    const restarProductos = () => {
        setProductos(productos -1)
    }


    return(
        <div className="card col-3 card-product">
            <img src={chomba} className="card-img-top" alt="imagen chomba" />
            <div className="card-body">
                <h2 className="card-title">CHOMBA TOMMY</h2>
                <div className="productCounter">
                    <button type="button" onClick={ restarProductos } className="btn btn-outline-dark btn-lg">-</button>
                    <p>{ productos }</p>
                    <button type="button" onClick={ sumarProductos } className="btn btn-outline-dark btn-lg">+</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCount