import React, {useState, useEffect} from 'react'
import Item from './Item'
import ItemList from './ItemList'


const getProducts = () => {
    return new Promise((res, rej)) => {
        setTimeout(() =>{
            res(
                [
                    { id: 1, title: "chomba", price: 1200 }
                    { id: 2, title: "remera", price: 1000 }
                    { id: 3, title: "short", price: 1500 }
                ].filter(
                    i => i.id === id
                )
            )
        }, 2000)
    }
}

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        console.log('ItemListContainer cargado')
        getProducts().then( products => {
            setItems(products)
        })
}, [])


export default ItemListContainer