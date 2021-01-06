import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import chomba from '../src/img/chombasTommy.jpg'


const App = () => {
    return(
        <>
            <div className="header-bg">
               <Header/>
            </div>
            
 
            <div className="container">
                <div className="row firstRow">
                        <ItemCount stock="9" nombreProducto="CHOMBA TOMMY" productImg={ chomba } imgAlt="Chomba Tommy"/>
                        <ItemListContainer/>
                </div> 
                         
            </div>
               
        </>
    )
}

export default App