import React from 'react'
import Header from './Header'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



const App = () => {
    return(
        
        <>
        <Router>
            <div className="header-bg">
                   <Header/>
            </div>
            <Switch>
            
            <div className="container">
                <div className="row main">
                    <ItemListContainer/>
                    <ItemDetailContainer/>
                </div> 
                         
            </div>
         
        
            <Route path="/category/:categoryId" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/" component={ItemListContainer}/>
        </Switch>
        </Router>
    
           
        </>
    )
}

export default App