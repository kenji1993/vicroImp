import React, {useState} from 'react'


const ItemCount = ({stock, initial, nombreProducto, productImg, imgAlt}) => {
    
    const [productos, setProductos] = useState(initial)


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
    
    const onAdd = () => {
        setProductos(0)
        console.log(`${nombreProducto}  ${productos}` )
    }

    return(
        <div className="card col-3 card-product">
            <img src={productImg} className="card-img-top" alt={imgAlt} />
            <div className="card-body">
                <h2 className="card-title">{nombreProducto}</h2>
                <p className="stock">Stock: {stock - productos}</p>
                <div className="productCounter row">
                    <button type="button" onClick={ restarProductos } className="btn btn-outline-dark btn-lg col-3">-</button>
                    <p className="col-4 displayCounter">{ productos }</p>
                    <button type="button" onClick={ sumarProductos } className="btn btn-outline-dark btn-lg col-3">+</button>

                    <button type="button" onClick={ onAdd } className="btn btn-outline-dark btn-lg mt-1">Agregar al carrito</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ItemCount