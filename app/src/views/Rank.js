import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    withRouter
} from 'react-router-dom';
import "../assets/Rank.css";
import sellWell from "./sellWell";
import click from "./click"
import reward from "./reward"
import rankBoys from "./rankBoys"
import rankGirl from "./rankGirl"
import rankCompelete from "./rankCompelete"
import sellGirl from "./sellGirl"
import sellComplete from "./sellComplete"

class Rank extends React.Component{
    render(){
        return(
            <div className="sexRank">
                <input type="button" className="sexInput" onClick={()=>{this.props.history.push("/")}} value={"<"}/>
                <Router>
                    <NavLink style={{padding:"0 15px",color:"#000",fontSize:"20px",textDecoration:"none"}} activeStyle={{padding:"0 15px",color:"red",textDecoration:"none"}} exact to={"/Rank/rankBoys/sellWell"}>男生</NavLink>
                    <NavLink style={{padding:"0 15px",color:"#000",fontSize:"20px",textDecoration:"none"}} activeStyle={{padding:"0 15px",color:"red",textDecoration:"none"}} to={"/Rank/rankGirl/sellGirl"}>女生</NavLink>
                    <NavLink style={{padding:"0 15px",color:"#000",fontSize:"20px",textDecoration:"none"}} activeStyle={{padding:"0 15px",color:"red",textDecoration:"none"}} to={"/Rank/rankCompelete/sellComplete"}>全本</NavLink>

                    <Route exact path={"/Rank/rankBoys/sellWell"} component={rankBoys}></Route>
                    <Route path={"/Rank/rankGirl/sellGirl"} component={rankGirl}></Route>
                    <Route path={"/Rank/rankCompelete/sellComplete"} component={rankCompelete}></Route>
                </Router>

            </div>
        )
    }
}
export default withRouter(Rank)