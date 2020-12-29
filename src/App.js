import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


const App = () => {
    return(
        <>
            <div className="header-bg">
               <Header/>
            </div>
            
 
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-2">
                        <ItemListContainer itemList="Lista de items"/>
                    </div>
                </div> 
                    <ItemCount/>     
            </div>
               
        </>
    )
}

export default App