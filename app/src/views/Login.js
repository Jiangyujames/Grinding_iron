import React from 'react'
import {input,Button, Radio, Icon } from 'antd'
import "../assets/login.css"
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Login extends React.Component{
    sendCode(e){
        if(this.refs.userPhone.value){
            axios.get("/api/sendCode",{
                params:{
                    phoneId:this.refs.userPhone.value
                }
            }).then(({data})=>{
                    if(data.ok===1){

                    }
                }
            )
        }
    }
    sendlogin(e){
        //console.log(888888)
        console.log(this.props)
        axios.post("/api/login",{
            phoneId:this.refs.userPhone.value,
            code:this.refs.codes.value
        }).then(({data})=>{
            if(data.ok===1){
                localStorage.phoneId=this.refs.userPhone.value
                this.props.history.push("/booklist")
            }
        })
    }
    render(){
        return(
            <div>
                <div className={"top"}>
                    <span onClick={()=>{
                        //console.log(this.props.history,99998888888888888)
                        this.props.history.push('/')
                    }} className={"iconfont icon-xuanzesanjiao-xiangzuo"}></span>
                     手机快捷登录/注册
                </div>
                <div className={"content"}>
                    <p>
                        <input type="text" placeholder={"输入手机号码"} ref={"userPhone"}/>
                    </p>
                    <p className={"msg"}>
                        <input type="text" placeholder={"输入短信验证码"} ref={"codes"}/>
                        <button onClick={this.sendCode.bind(this)}>发送验证码</button>
                    </p>

                        <button onClick={this.sendlogin.bind(this)} >登录/注册</button>

                </div>

            </div>
        )
    }
}
export default withRouter(Login)