import  React,{Component} from 'react'
import '../assets/my.css'
import '../font/iconfont.css'
class My extends Component{
    render(){
        return(
            <div>
                <div className={"my_top"}>
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
                    <p>
                        <button>充值</button>
                    </p>
                </div>
            </div>
        )
    }
}
export default My