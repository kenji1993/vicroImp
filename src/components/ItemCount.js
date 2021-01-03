import React, {useState} from 'react'
import chomba from './img/chombasTommy.jpg'


const ItemCount = () => {
    
    const [productos, setProductos] = useState(0)

    const stock = 9
    const sumarProductos = () => {
      if(productos <= stock -1){
        setProductos(productos +1)
      }
    }
    const restarProductos = () => {
        setProductos(productos -1)
    }
    if(productos < 0) {
       return setProductos(0)
    }
    

    return(
        <div className="card col-3 card-product">
            <img src={chomba} className="card-img-top" alt="imagen chomba" />
            <div className="card-body">
                <h2 className="card-title">CHOMBA TOMMY</h2>
                <p className="stock">Stock: {stock}</p>
                <div className="productCounter row">
                    <button type="button" onClick={ restarProductos } className="btn btn-outline-dark btn-lg col-3">-</button>
                    <p className="col-4 displayCounter">{ productos }</p>
                    <button type="button" onClick={ sumarProductos } className="btn btn-outline-dark btn-lg col-3">+</button>

                    <button type="button" className="btn btn-outline-dark btn-lg mt-1">Agregar al carrito</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ItemCount