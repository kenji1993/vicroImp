import React, {Component} from 'react'

const ItemListContainer = props => {
    
    const { itemList } = props

    return(
        <>
            <p className="itemList"> { itemList } </p>
        </>
    )
}


export default ItemListContainer