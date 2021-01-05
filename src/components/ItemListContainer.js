import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'


let itemsList = [
    {
        id: 1,
        title: "Chomba Tommy",
        price: 1200,
        stock: 5,
    },
    {
        id: 2,
        title: "Remera Tommy",
        price: 1100,
        stock: 7,
    },
    {
        id: 1,
        title: "Short",
        price: 1500,
        stock: 4,
    },
    {
        id: 4,
        title: "Remera A&F",
        price: 1400,
        stock: 10,
    },
    
]

const ItemListContainer = ({list}) => {

        const [items, setItems] = useState([])
        const promise = new Promise((resolve, rejected) => {
            setTimeout(() => {
                let status = 200
                if (status < 400) {
                    resolve(itemsList)
                } else {
                    rejected("hubo un error")
                }
            }, 2000)
        })
    
        useEffect(() => {
            promise
                .then(items => setItems(items))
                .catch(console.log("hubo un error"))
        }, [])
    
        return (
            <div>
                <p>{list}</p>
                <ItemList items={items} />
            </div>
        )
}

export default ItemListContainer