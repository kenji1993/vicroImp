import React, {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import NotFound from './NotFound'

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

   

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    
    useEffect(() =>{
        return() => {
            console.log(`ID: ${id}`)
        }
    }, id)


    const getDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
           const thisItem = itemsList.find(item => item.id == id) 
           let status = 200
           if(status < 400) {
               resolve(thisItem)
           } else {
               reject("Ha ocurrido un error")
           }
        }, 500);
    })

    return (
        <>
            { item ?
                <div  className="itemList col-lg-3 col-sm-3 col-md-4 col-9">
                    <ItemDetail item={item} id={id}/>
                </div>
                :
                <NotFound/>
            }
                

        </>
    )
}

export default ItemDetailContainer
