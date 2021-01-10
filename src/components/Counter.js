import React, {useState} from 'react'

const Counter = ({stock, initial, title}) => {
    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if(counter <= stock) {
            setCounter(counter +1)
        }
    }
    const restar = () => {
        setCounter(counter -1)
    }
    if(counter < 0) {
        return setCounter(0)
    }

    const onAdd = () => {
        setCounter(0)
        console.log(`${title} ${counter}`)
    }
 
    return (
        <div className="productCounter row">
           <button type="button" onClick={ restar } className="btn btn-outline-dark btn-lg col-3">-</button>
                <p className="col-4 displayCounter">{ counter }</p>
                <button type="button" onClick={ sumar } className="btn btn-outline-dark btn-lg col-3">+</button>

                <button type="button" onClick={ onAdd } className="btn btn-outline-dark btn-lg mt-1">Agregar al carrito</button>
        </div>
    )
}

export default Counter
