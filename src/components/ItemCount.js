import React, {useState} from 'react'

const ItemCount = () => {
    
    const [productos, setProductos] = useState(0)

    const sumarProductos = () => {
        setProductos(productos +1)
    }
    const restarProductos = () => {
        setProductos(productos -1)
    }

    return(
        <>
            <h2>Remera:</h2>
            <div>
            <button onClick={ sumarProductos }>+</button>
            <p>{ productos }</p>
            <button onClick={ restarProductos }>-</button>
            </div>
            
        </>
    )
}

export default ItemCount