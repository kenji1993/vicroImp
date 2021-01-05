import React from 'react'
import { List } from 'react-bootstrap-icons'
import Item from './Item'


const ItemList = ({ItemList}) => {
    return(
        <div className="ItemList">
            { List.map( p => 
                <Item key={p.id} id{p.id} title={p.title} price={p.price} />
            ) }
        </div>    
    
    )
}


export default ItemList