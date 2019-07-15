import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import recentReading from "./recentReading";
import myBookList from "./myBookList";
import "../assets/BookList.css";
import {
    createStore,
    combineRoducers
} from "redux";





class BookList extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div className="topRoute">
                        <NavLink style={{color:"#999"}} activeStyle={{color:"#000"}} exact to={"/myBookList"}>我的书架</NavLink>
                        <NavLink style={{color:"#999"}} activeStyle={{color:"#000"}} to={"/recentReading"}>最近阅读</NavLink>

                    </div>
                    <Route exact path={"/myBookList"} component={myBookList}></Route>
                    <Route path={"/recentReading"} component={recentReading}></Route>
                    <div>

                    </div>
                </Router>
            </div>
        )
    }
}
export default BookList;