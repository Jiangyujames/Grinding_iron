import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink

} from 'react-router-dom';
import "../assets/Rank.css"

import sellWell from "./sellWell";
import clickGirl from "./clickGirl"
import reward from "./reward"
import recommend from "./recommend"
import newBook from "./newBook"
import update from "./update"
import hotReading from "./hotReading"
import wealth from "./wealth"
import review from "./review"
import sellGirl from "./sellGirl"

class rankGirl extends React.Component{
    render(){
        return(
            <div>
                <Router style={{overflow:"hidden"}}>
                    <div style={{width:"25%",height:"100%",float:"left"}}>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" exact to={"/Rank/rankGirl/sellGirl"}>热销榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/clickGirl"}>点击榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/reward"}>打赏榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/recommend"}>推荐榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/newBook"}>新书榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/update"}>更新榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/hotReading"}>热读榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/wealth"}>财神榜</NavLink>
                        <NavLink className="leftRouter" activeClassName="leftRouter-active" to={"/Rank/rankGirl/review"}>书评榜</NavLink>
                    </div>

                    <div style={{width:"75%",height:"100%",float:"right"}}>
                        <Route exact path={"/Rank/rankGirl/sellGirl"} component={sellGirl}></Route>
                        <Route path={"/Rank/rankGirl/clickGirl"} component={clickGirl}></Route>
                        <Route path={"/Rank/rankGirl/reward"} component={reward}></Route>
                        <Route path={"/Rank/rankGirl/recommend"} component={recommend}></Route>
                        <Route path={"/Rank/rankGirl/newBook"} component={newBook}></Route>
                        <Route path={"/Rank/rankGirl/update"} component={update}></Route>
                        <Route path={"/Rank/rankGirl/hotReading"} component={hotReading}></Route>
                        <Route path={"/Rank/rankGirl/wealth"} component={wealth}></Route>
                        <Route path={"/Rank/rankGirl/review"} component={review}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
export default rankGirl