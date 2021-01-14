import React, {useState, useEffect} from 'react'
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
// import chomba from '../img/chombasTommy.jpg'

let itemsList = [
    {
        id: 1,
        title: "Chomba Tommy",
        price: 1200,
        stock: 5,
        description: "Chomba lisa",
        pictureUrl: "https://i.ibb.co/tHrYBbS/chombas-Tommy.jpg"
    },
    {
        id: 2,
        title: "Remera Tommy",
        price: 1100,
        stock: 7,
        description: "Remera letras de colores",
        pictureUrl: "https://i.ibb.co/1TTspd8/remeras-Tommy.jpg"
    },
    {
        id: 3,
        title: "Bermuda Tommy",
        price: 1800,
        stock: 4,
        description: "Bermuda gabardina",
        pictureUrl: "https://i.ibb.co/8XkzC4G/bermuda-Tommy.jpg"
    },
    {
        id: 4,
        title: "Remera Polo",
        price: 1400,
        stock: 10,
        description: "Remera lisa",
        pictureUrl: "https://i.ibb.co/MGd0M21/remeras-Polo.jpg"
    },
    
]

const ItemListContainer = () => {

        const [items, setItems] = useState([])

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let status = 200
                if (status < 400) {
                    resolve(itemsList)
                } else {
                    reject("Ha ocurrido un error")
                }
            }, 500)
        })
    
        useEffect(() => {
            promise
                .then(items => setItems(items))
                .catch(console.log("Ha ocurrido un error"))
        }, [])
    
        return (
            <>
                {/* <ItemCount stock={9} initial={1} productImg={chomba} imgAlt="Chomba Tommy" nombreProducto="Chomba Tommy" /> */}
                <ItemList items={items} />
            </>
        )
}

export default ItemListContainer

