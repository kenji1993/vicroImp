import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


let itemD = 
   {
        id: 1,
        title: "Chomba Tommy",
        price: 1200,
        stock: 5,
        description: "Chombas lisas de algodón Tommy Hilfiger",
        colores: "Blanco, Azul Oscuro, Gris claro, Gris oscuro, Salmón, Negro, Rojo, Azul",
        pictureUrl: "https://i.ibb.co/tHrYBbS/chombas-Tommy.jpg"
    }


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let status = 200
            if(status < 400) {
                resolve(itemD)
            } else {
                reject("Ha ocurrido un error")
            }
        }, 2000);
    })

    useEffect(() => {
        promesa
        .then(item => setItem(item))
        .catch(console.log("Ha ocurrido un error"))
    },[])

    return (
        <>
   
                <div  className="itemList col-lg-3 col-sm-3 col-md-4 col-9">
                    <ItemDetail item={item}/>
                </div>
            
        </>
    )
}

export default ItemDetailContainer
