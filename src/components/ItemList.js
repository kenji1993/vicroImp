import React from 'react'
import Item from './Item'



function ItemList({ items }) {
    return (
        <div>
            { items.map(item => (
                <div  className="itemList">
                    <Item key={item.id} id={item.id} title={item.title} description={item.description}
                     price={item.price} pictureUrl={item.pictureUrl} />
                </div>
            ))

            }
        </div>
    )
}

export default ItemList