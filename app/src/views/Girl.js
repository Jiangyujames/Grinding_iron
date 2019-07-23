import React from 'react';
import "../assets/home.css"

import {
    BrowserRouter as Router,
    Route,
    NavLink,
	withRouter
	
} from "react-router-dom";
import "../assets/publishh/iconfont.css";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import img1 from "../assets/img/lun1.jpg"
import img2 from "../assets/img/lun2.png"
import Header from "../components/Header"
import axios from "axios";

class Girl extends React.Component{
    constructor (){
        super();
        this.state={
            bookList:[],
            bookType:[],
            page:1,
        }
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            autoplay: true,              //自动播放
            grabCursor : true,          //鼠标覆盖Swiper时指针会变成手掌形状
            loop: true,                 //循环
            autoplay: {                 //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {               //分页器
                el: '.swiper-pagination'
            }
        })
        axios.get("/motie/ranking/detail?group=3&siteId=2&rankType=10&pageSize=3")
            .then(({data}) => {
                this.setState({
                    bookList: data.data
                })
                console.log(11111,this.state.bookList)
            })
        this.getPage();
    }
    getPage(){
        axios.get("/motie/ranking/detail?group=2&siteId=4&rankType=10&pageSize="+this.state.page*6)
            .then(({data})=>{
                console.log(110,data);
                this.setState({
                    bookType:data.data
                })
                console.log(222,this.state.bookType)
            })
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="banner">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img className="slid" src={img1}/></div>
                            <div class="swiper-slide"><img className="slid" src={img2}/></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div className="lately">
                        <div className="late-left">
                            <p className="late-left-font">最近阅读</p>
                        </div>
                        <div className="late-right">
                            <p className="bookxiang">盛世书香</p>
                            <span className="bookchou">第一章 国公府的新先生</span>
                        </div>
                    </div>
                    <p className="kong"></p>
                    <div className="navigation">
                        <Router>
                            <NavLink className="navviga" to={"/Type"}><img src={require('../assets/img/lu4.png')}/>分类</NavLink>
                            <NavLink className="navviga" to={"/Rank"}><img src={require('../assets/img/lu3.png')}/>排行</NavLink>
                            <NavLink className="navviga" to={"/Complete"}><img src={require('../assets/img/lu2.png')}/>全本</NavLink>
                            <NavLink className="navviga" to={"/Free"}><img src={require('../assets/img/lu1.png')}/>免费</NavLink>
                        </Router>
                    </div>x
                    <p className="kong"></p>
                    <div className="Recommend">
                        <h3 className="hh"><em></em>主编力荐</h3>
                        {
                            this.state.bookList.map(v=>{
                                return(
                                    <div key={v.bookId} onClick={()=>{this.props.history.push("/detali/"+v.bookId)}}>
                                        <li><img src={v.bookIconUrl} alt=""/>
                                            <p>{v.authorName}</p></li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="kong"></p>
                    <div className="ttype2">
                        <h3 className="hh"><em></em>本期主打分类</h3>
                        {
                            this.state.bookType.map(v=>{
                                return(
                                    <div key={v.bookId} onClick={()=>{this.props.history.push("/detali/"+v.bookId)}}>
                                        <li>
                                            <div><img src={v.bookIconUrl} alt=""/></div>
                                            <div><i>{v.authorName}</i>
                                                <span>{v.introduce}</span>
                                                <p>{v.categoryVO.name}</p>
                                                <b>{v.bookName}</b>
                                            </div>
                                        </li>
                                    </div>
                                )
                            })
                        }
                        <input className="btn" type="button" onClick={()=>{
                            this.setState({
                                page:++this.state.page
                            },()=>{
                                this.getPage()
                            })
                        }} value={"点"}/>
                    </div>
                    <p className="kong"></p>
                </div>
            </div>

        )
    }
}

export default withRouter(Girl);