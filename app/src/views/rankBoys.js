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

class rankBoys extends React.Component{
    render(){
        return(
            <div>
                <Router style={{overflow:"hidden"}}>
                    <div style={{width:"23%",height:"100%",float:"left"}}>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" exact to={"/Rank/rankBoys/sellWell"}>热销榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/click"}>点击榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/reward"}>打赏榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/recommend"}>推荐榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/newBook"}>新书榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/update"}>更新榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/hotReading"}>热读榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/wealth"}>财神榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankBoys/review"}>书评榜</NavLink>
                    </div>

                    <div style={{width:"75%",height:"100%",float:"right"}}>
                        <Route exact path={"/Rank/rankBoys/sellWell"} component={sellWell}></Route>
                        <Route path={"/Rank/rankBoys/click"} component={click}></Route>
                        <Route path={"/Rank/rankBoys/reward"} component={reward}></Route>
                        <Route path={"/Rank/rankBoys/recommend"} component={recommend}></Route>
                        <Route path={"/Rank/rankBoys/newBook"} component={newBook}></Route>
                        <Route path={"/Rank/rankBoys/update"} component={update}></Route>
                        <Route path={"/Rank/rankBoys/hotReading"} component={hotReading}></Route>
                        <Route path={"/Rank/rankBoys/wealth"} component={wealth}></Route>
                        <Route path={"/Rank/rankBoys/review"} component={review}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default rankBoys