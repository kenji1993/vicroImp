import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'




const App = () => {
    return(
        <>
            <div className="header-bg">
               <Header/>
            </div>
            
 
            <div className="container">
                <div className="row main">
                        <ItemListContainer/>
                        <ItemDetailContainer/>
                </div> 
                         
            </div>
               
        </>
    )
}

export default App