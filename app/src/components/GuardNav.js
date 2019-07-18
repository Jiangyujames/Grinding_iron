import React from 'react'
import router from '../router'
import '../App.css'
import {NavLink} from  'react-router-dom'
class GuardNav extends React.Component{
    render(){
        return (
            <nav>
                <NavLink activeStyle={{color:"red"}} to={'/booklist'}><span className={'iconfont icon-shu1'}></span>书架 </NavLink>
                <NavLink activeStyle={{color:"red"}} to={'/boys'}><span className={'iconfont icon-star1'}></span>首页</NavLink>
                <NavLink activeStyle={{color:"red"}} to={'/my'}><span className={'iconfont icon-zhucedengluyonghuming'}></span>我的</NavLink>
            </nav>
        )
    }

}
export default GuardNav