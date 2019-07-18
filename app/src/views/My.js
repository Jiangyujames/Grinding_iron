import  React,{Component} from 'react'
import '../assets/my.css'
import '../font/iconfont.css'
import {withRouter} from  'react-router-dom'
class My extends Component{
    render(){
        return(
            <div>
                <div className={"my_top"} onClick={()=>{this.props.history.push("/person/myDetail")}}>
                    <img src="http://cdn.motieimg.com/people/mt_person_ico.png?x-oss-process=style/user_big" alt=""/>
                    <div className={"top-L"}>
                        <div className={'top-LR'}>
                            <span>用户0f375bf8</span>
                        </div>
                        <div className={'top-LL'}>
                            <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                        </div>
                    </div>
                </div>
                <div className={"my-conent"}>
                    <p>
                        <span className={"iconfont icon-password"}></span>
                        我的账户
                    </p>
                    <ul>
                        <li>
                            <span>0</span>
                            <span>磨铁币</span>
                        </li>
                        <li>
                            <span>0</span>
                            <span>阅读券</span>
                        </li>
                        <li>
                            <span>1</span>
                            <span>推荐票</span>
                        </li>
                    </ul>
                    <div className={"btn"}>
                        <button>充值</button>
                    </div>
                </div>
                <div className={"list"}>
                    <div className={"list1"}>
                        <b>
                            <span className={"iconfont icon-huafeichongzhi"}></span>
                             充值记录
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"} >
                        <b>
                            <span className={"iconfont icon-licai"}></span>
                            消费记录
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"}>
                        <b>
                            <span className={"iconfont icon-dingdan"}></span>
                            自动订阅
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"}>
                        <b>
                            <span className={"iconfont icon-lipin"}></span>
                            我的活动
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"}>
                        <b>
                            <span className={"iconfont icon-duoshaorenguanzhu"}></span>
                           我的投票
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"}>
                        <b>
                            <span className={"iconfont icon-zhongchou"}></span>
                            作家专栏
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                    <div className={"list1"} onClick={()=>{this.props.history.push("/about")}}>
                        <b>
                            <span className={"iconfont icon-password"}></span>
                            关于我们
                        </b>
                        <span className={"iconfont icon-xialasanjiao-xiangyou"}></span>
                    </div>
                </div>
                <div className={"btns"} onClick={()=>{
                    localStorage.removeItem("phoneId")
                    this.props.history.push("/login")
                }}>退出登录</div>
            </div>
        )
    }
}
export default withRouter(My)