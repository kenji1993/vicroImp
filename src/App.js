import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
    return(
        <>
            <header>
               <Header/>
            </header>
            
 
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-2">
                        <ItemListContainer itemList="Lista de items"/>
                    </div>
                </div>     
            </div>
               
        </>
    )
}

export default App