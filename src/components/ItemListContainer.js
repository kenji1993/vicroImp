import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'

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
        id: 1,
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
        const promise = new Promise((resolve, rejected) => {
            setTimeout(() => {
                let status = 200
                if (status < 400) {
                    resolve(itemsList)
                } else {
                    rejected("hubo un error")
                }
            }, 0)
        })
    
        useEffect(() => {
            promise
                .then(items => setItems(items))
                .catch(console.log("hubo un error"))
        }, [])
    
        return (
            <div className="col-2 itemListContainer">
                <ItemList items={items} />
            </div>
        )
}

export default ItemListContainer

