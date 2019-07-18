import React from "react";
import router from "../router/headerr.js"
import readd from "../assets/img/read.png";
import "../assets/home.css"
import {
    NavLink,
    BrowserRouter as Router,
} from "react-router-dom"
export default class Header extends React.Component{
    render(){
        return (
            <div className="topp">
                <img className="mptieyuedu" src={readd} />
                <div>
                    <Router>
                        <div className="nav">
                            {
                                router.map((v,i)=>{
                                    return (
                                        <NavLink key={i} exact={v.exact} className="navv" to={v.path}>{v.nameStr}</NavLink>
                                    )
                                })
                            }
                        </div>
                        <div className="icon">
                            <i  className="iconfont icon-sousuo"></i>
                            <i  className="iconfont icon-caidan"></i>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}