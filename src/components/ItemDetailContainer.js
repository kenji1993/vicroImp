import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


let itemsList = [
    {
        id: 1,
        title: "Chomba Tommy",
        price: 1200,
        stock: 5,
        description: "Chombas lisas de algodón Tommy Hilfiger",
        pictureUrl: "https://i.ibb.co/tHrYBbS/chombas-Tommy.jpg"
    },
    {
        id: 2,
        title: "Remera Tommy",
        price: 1100,
        stock: 7,
        description: "Remeras Tommy Hilfiger estampadas (logo bordado en manga)",
        pictureUrl: "https://i.ibb.co/1TTspd8/remeras-Tommy.jpg"
    },
    {
        id: 1,
        title: "Bermuda Tommy",
        price: 1800,
        stock: 4,
        description: "Bermudas Tommy Hilfiger de gabardina",
        pictureUrl: "https://i.ibb.co/8XkzC4G/bermuda-Tommy.jpg"
    },
    {
        id: 4,
        title: "Remera Polo",
        price: 1400,
        stock: 10,
        description: "Remeras básicas Polo Ralph Lauren",
        pictureUrl: "https://i.ibb.co/MGd0M21/remeras-Polo.jpg"
    },
    
]

const ItemDetailContainer = () => {
    const [items, setItem] = useState([])
    
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let status = 200
            if(status < 400) {
                resolve(itemsList)
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
            { items.map(item => (
                <div  className="itemList col-lg-3 col-sm-3 col-md-4 col-9">
                    <ItemDetail id={item.id} title={item.title} description={item.description}
                     price={item.price} pictureUrl={item.pictureUrl} stock={item.stock}/>
                </div>
            ))

            }
        </>
    )
}

export default ItemDetailContainer
