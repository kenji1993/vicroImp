import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'




const App = () => {
    return(
        <>
            <div className="header-bg">
               <Header/>
            </div>
            
 
            <div className="container">
                <div className="row firstRow">
                        <ItemListContainer/>
                </div> 
                         
            </div>
               
        </>
    )
}

export default App