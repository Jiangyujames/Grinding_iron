import React from 'react'
import '../assets/type.css'
class Type extends React.Component{
    constructor(){
        super()
        this.state={
            index:1,
            isTwo:1,
            isThree:1,
            isFour:1

        }
    }
    render(){
        return(
            <div>
                <div className={"header"}>
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
                                index:2
                            })
                        }}>女频</dd>
                        <dd  className={this.state.index===3?"active-link":null} onClick={()=>{
                            this.setState({
                                index:3
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

                </div>
            </div>
        )
    }
}
export default Type