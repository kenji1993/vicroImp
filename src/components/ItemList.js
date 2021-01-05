import React from 'react'
import Item from './Item'



function ItemList({ items }) {
    return (
        <div>
            { items.map(item => (
                <div >
                    <Item key={item.id} title={item.title} />
                </div>
            ))

            }
        </div>
    )
}

export default ItemList