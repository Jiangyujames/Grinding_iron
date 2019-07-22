import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import React from 'react'
import axios from 'axios'
import '../assets/details.css'

class Detail extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
        this.state = {
            bookInfo:{},
            isdisabled:false
        }
    }

    componentWillMount() {
        axios.get("/motie/books/"+this.props.match.params.id+"/detail").then(({ data }) => {
            // console.log(9090909,data);
            this.setState({
                bookInfo: data.data
            })

        })

    }
    addBooks(){
        console.log(8888888888888)
        axios.post("/api/addBooks",{
            imgUrl:this.state.bookInfo.icon,
            bookName:this.state.bookInfo.name
        }).then(({data})=>{

        })
    }
    render() {
        return (
            <div className={"detals"}>
                <div className={"deta"}>
                    <span className={"back"} onClick={()=>this.props.history.go(-1)}>&lt;</span><span className={"tite"}>作品详情</span></div>


                <div className={"bg"} style={{background:this.state.bookInfo.icon}}>
                    <div className="infot">
                        <img  className={"book"} src={this.state.bookInfo.icon} />
                        <div className={"inforight"}>
                            <h3 className={"bname"}>{this.state.bookInfo.name}</h3>
                            <p>{this.state.bookInfo.authorName} | {this.state.bookInfo.sortName} | {this.state.bookInfo.status}</p>
                            <p>{this.state.bookInfo.words}字 | {this.state.bookInfo.discountPrice}</p>
                            <p>粉丝数:{this.state.bookInfo.followCount}</p>
                            <p>点击数:{this.state.bookInfo.visitCount}</p>
                        </div>
                    </div>

                </div>


                <div className={"btns"}>
                    <input type="button"  className={"add"} value={"加入书架"}
                           disabled={this.state.isdisabled?true:false}    onClick={()=>{
                        this.setState({
                            isdisabled:true
                        },()=>{
                            this.addBooks.bind(this)()
                        })
                    }}/>
                    <input type="button"  className={"read"} value={"立即阅读"} onClick={()=>{

                    }}/>
                </div>

                <div className={"dashang"}>
                    <p><i></i><p>打赏</p></p>
                    <p><i></i><p>推荐</p></p>
                </div>
                <hr/>
                <div className={"introduce"}>{this.state.bookInfo.introduce}</div>

                <div className={"mulu"}><em></em><p>目录:</p>{console.log(this.state.bookInfo['lastChapterList'])}<p>连载至</p></div>
                <p><em></em>看过这本书的人有</p>

                <div className={"more"}> {
                    !this.state.bookInfo['reviewList']?null:this.state.bookInfo['reviewList'].map((v,i)=>{
                        return(
                            <div className={"people"} key={i}>
                                <img src={v.userIcon}/>
                                <p>{v.userName}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>

        )
    }


}

export default  withRouter(Detail);

