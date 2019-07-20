import React from 'react'
import '../assets/type.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from "axios"
import {CHANGE_TYPELIST} from '../store/actionType/TypeList'
class Type extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:1,
            isTwo:1,
            isThree:1,
            isFour:1,
            page:1,
            group:this.props.match.params.group,
            siteId:this.props.match.params.siteId,
            rankType:this.props.match.params.rankType



        }
    }
    componentDidMount(){
        let _me=this
        const params=this.props.match.params;
        this.props.getTypeList(_me)
    }
    render(){
        return(
            <div>
                <div className={"header"} onClick={()=>{this.props.history.go(-1)}}>
                    <span className={"iconfont icon-xuanzesanjiao-xiangzuo"}></span>
                    分类
                </div>
                <div className={"naav"}>
                    <dl>
                        <dt>频道</dt>
                        <dd  className={this.state.index===1?"active-link":null} onClick={()=>{
                            this.setState({
                                index:1
                            })
                        }}>男频</dd>
                        <dd  className={this.state.index===2?"active-link":null} onClick={()=>{
                            this.setState({
                                index:2,
                                group:2,
                            })
                            this.props.getTypeList(this)
                        }}>女频</dd>
                        <dd  className={this.state.index===3?"active-link":null} onClick={()=>{
                            this.setState({
                                index:3,

                            })
                        }}>出版</dd>
                    </dl>
                    <dl>
                        <dt>分类</dt>
                        <dd className={this.state.isTwo===1?"active-link":null} onClick={()=>{
                            this.setState({
                                isTwo:1
                            })
                        }}>全部</dd>
                        <dd className={this.state.isTwo===2?"active-link":null} onClick={()=>{
                            this.setState({
                                isTwo:2
                            })
                        }}>现代都市</dd>
                        <dd className={this.state.isTwo===3?"active-link":null} onClick={()=>{
                            this.setState({
                                isTwo:3
                            })
                        }}>仙侠武侠</dd>
                        <dd className={this.state.isTwo===4?"active-link":null} onClick={()=>{
                            this.setState({
                                isTwo:4
                            })
                        }}>玄幻奇幻</dd>
                    </dl>
                    <dl>
                        <dt>状态</dt>
                        <dd className={this.state.isThree===1?"active-link":null} onClick={()=>{
                            this.setState({
                                isThree:1
                            })
                        }}>全部</dd>
                        <dd className={this.state.isThree===2?"active-link":null} onClick={()=>{
                            this.setState({
                                isThree:2
                            })
                        }}>完结</dd>
                        <dd className={this.state.isThree===3?"active-link":null} onClick={()=>{
                            this.setState({
                                isThree:3
                            })
                        }}>连载</dd>
                    </dl>
                    <dl>
                        <dt>价格</dt>
                        <dd className={this.state.isFour===1?"active-link":null} onClick={()=>{
                            this.setState({
                                isFour:1
                            })
                        }}>全部</dd>
                        <dd className={this.state.isFour===2?"active-link":null} onClick={()=>{
                            this.setState({
                                isFour:2
                            })
                        }}>免费</dd>
                        <dd className={this.state.isFour===3?"active-link":null} onClick={()=>{
                            this.setState({
                                isFour:3
                            })
                        }}>付费</dd>
                    </dl>
                </div>
                <div className={"context"}>

                    {
                        this.props.typeList.map((v)=>{
                            return(
                                <div className={"context-item"} key={v.bookId} onClick={()=>this.props.history.push("/detali/"+v.bookId)}>
                                    <div className={"imggg"}>
                                        <img src={v.bookIconUrl} alt=""/>
                                    </div>

                                    <div>
                                        <h5>{v.bookName}</h5>
                                        <p>{v.introduce}</p>
                                        <div className={"context-item-d"}>
                                            <b>{v.authorName}</b>
                                            <span>{v.categoryVO.name}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                    {this.props.isloading?<div className={"isload"}>加载中...</div>:null}
                    {
                        this.props.isloading?null: <input type="button" value={"加载"} onClick={()=>{
                            this.setState({
                                page:++this.state.page
                            })
                            this.props.getTypeList(this)
                        }}/>
                    }

                </div>
            </div>
        )
    }
}
function mapStateToProps(state,props){
    return{
        typeList:state.typeList.typeList,
        isloading:state.typeList.isloading
    }
}
function mapDispatchToProps(dispatch){
    //console.log(this.props.location)

    return{
        getTypeList(_me){
            console.log(999999999999999)
            axios.get("/motie/ranking/detail?group="+_me.state.group+"&siteId="+_me.state.siteId+"&rankType="
                +_me.state.rankType+"&pageSize="+_me.state.page*_me.props.match.params.pageSize)
                .then(({data})=>{
                    console.log(data)
                    dispatch({
                        type:CHANGE_TYPELIST,
                        payload:{
                            typeList:data.data,
                            isloading:false
                        }
                    })
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Type))