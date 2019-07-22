import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink

} from 'react-router-dom';
import "../assets/Rank.css"

import sellWell from "./sellWell";
import click from "./click"
import reward from "./reward"
import recommend from "./recommend"
import newBook from "./newBook"
import update from "./update"
import hotReading from "./hotReading"
import wealth from "./wealth"
import review from "./review"
import sellComplete from "./sellComplete"

class rankCompelete extends React.Component{
    render(){
        return(
            <div>
                <Router style={{overflow:"hidden"}}>
                    <div style={{width:"25%",height:"100%",float:"left"}}>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" exact to={"/Rank/rankCompelete/sellComplete"}>热销榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/click"}>点击榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/reward"}>打赏榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/recommend"}>推荐榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/newBook"}>新书榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/update"}>更新榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/hotReading"}>热读榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/wealth"}>财神榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankCompelete/review"}>书评榜</NavLink>
                    </div>

                    <div style={{width:"75%",height:"100%",float:"right"}}>
                        <Route exact path={"/Rank/rankCompelete/sellComplete"} component={sellComplete}></Route>
                        <Route path={"/Rank/rankCompelete/click"} component={click}></Route>
                        <Route path={"/Rank/rankCompelete/reward"} component={reward}></Route>
                        <Route path={"/Rank/rankCompelete/recommend"} component={recommend}></Route>
                        <Route path={"/Rank/rankCompelete/newBook"} component={newBook}></Route>
                        <Route path={"/Rank/rankCompelete/update"} component={update}></Route>
                        <Route path={"/Rank/rankCompelete/hotReading"} component={hotReading}></Route>
                        <Route path={"/Rank/rankCompelete/wealth"} component={wealth}></Route>
                        <Route path={"/Rank/rankCompelete/review"} component={review}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default rankCompelete