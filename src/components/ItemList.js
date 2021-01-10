import React from 'react'
import Item from './Item'



function ItemList({items}) {


    return (
        <>
            { items.map(item => (
                <div  className="itemList col-lg-3  col-sm-6 col-md-4 col-9">
                    <Item id={item.id} title={item.title} description={item.description}
                     price={item.price} pictureUrl={item.pictureUrl} />
                </div>
            ))

            }
        </>
    )
}

export default ItemList