import React, {useState} from 'react'

const ItemDetail = ({pictureUrl, title, description, price, stock, initial}) => {

    const [productos, setProductos] = useState(0)


        const sumarProductos = () => {
        if(productos <= stock -1){
            setProductos(productos +1)
        }
        }
        const restarProductos = () => {
            if (productos > 0) {
            setProductos(productos -1)

            }
        }
        
        const onAdd = () => {
            setProductos(0)
            console.log(`${title}  ${productos}` )
        }
        
    return (
        <div className="card item">
            <img className="card-img-top" src={pictureUrl} alt={title}/>
            <h4 className="card-title">{title}</h4>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <p className="card-text"><span>$</span>{price}</p>
                <p className="card-text">Stock: {stock - productos}</p>
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

export default ItemDetail