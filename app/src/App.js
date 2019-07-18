import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink

} from 'react-router-dom'

import router from './router'
import  GuardRoute from './components/GuardRoute'
class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Router>
                    {
                        router.map((v,i)=>{
                            console.log(v)
                            return(
                                    <Route key={i} path={v.path} exact={v.exact} render={()=><GuardRoute {...v}></GuardRoute>}></Route>
                                   )
                        })
                    }
                </Router>
            </div>
        )
    }

}

export default App;
