import React from "react";
import {
withRouter
} from "react-router-dom"
import Brands from './Brands';
import '../assets/free.css'
import axios from 'axios';

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    componentDidMount() {
        if (this.props.endtime) {
            let endTime = this.props.endtime.replace(/-/g, "/");
            this.countFun(endTime);
        }
    }

    //组件卸载取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countFun = (time) => {
        let end_time = new Date(time).getTime(),
            sys_second = (end_time - new Date().getTime());
        this.timer = setInterval(() => {
            //防止倒计时出现负数
            if (sys_second > 1000) {
                sys_second -= 1000;
                let hour = Math.floor(sys_second / 1000 / 3600);
                let minute = Math.floor((sys_second / 1000 / 60) % 60);
                let second = Math.floor(sys_second / 1000 % 60);
                this.setState({
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }

    render() {
        return (
            <span>{this.state.hour}:{this.state.minute}:{this.state.second}</span>
        )
    }
}

class Free extends React.Component {
    constructor() {
        super();
        this.state = {
            time: "2019/7/28 0:0:0",
            data: []
        }
    }

    componentWillMount() {
        axios.get("./data/free.json")
            .then(({data}) => {
                // console.log(data.items);
                this.setState({
                    data: data.items
                })
                console.log(this.state.data);
                // console.log(this.state.data[0].dataSourceList[0].dataList[0].imgUrl)
                console.log(this.state.data[0].dataSourceList[0].dataList)
            })
    }

    render() {
        return (
            <div id="free">
                {
                    this.state.data.map((v, i) => {
                        return (
                            <div key={i}>
                                <div style={{width: "100%", margin: "5px 0"}}>
                                    <h3>{v.name}</h3>
                                    <CountDown className="count" style={{display: v.name === "免费新书" ? "none" : "block"}}
                                               endtime={this.state.time}></CountDown>
                                </div>
                                <br/>
                                <div className={i === 1 ? "_bookList" : "bookList"}>
                                    {
                                        v.dataSourceList[0].dataList.map((t, r) => {
                                            return (
                                                <div key={r} className={i === 1 ? "_book" : "book"}>
                                                    <img src={t.imgUrl} alt=""/>
                                                    <p style={{display: i === 1 ? "none" : "block"}}>{t.bookName}</p>
                                                    <div style={{display: i === 1 ? "block" : "none", float: "right",}}>
                                                        <p>{t.bookName}</p>
                                                        <div>
                                                            <b className="intro">{t.introduction}</b>
                                                            <article>
                                                                <img src={t.userImgUrl} alt=""/>
                                                                <b>{t.penName}</b>
                                                                <a>{t.category}</a>
                                                            </article>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        )

                    })
                }
                <Brands></Brands>
            </div>
        )
    }

}

export default  withRouter(Free);
