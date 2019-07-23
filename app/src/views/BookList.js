import React from "react";
import '../assets/BookList.css'
import axios from "axios"
import {connect} from 'react-redux'
import {CHANGE_BOOKLIST} from '../store/actionType/TypeList'
import tools from '../tools'
class BookList extends React.Component{
    constructor(){
        super()
       this.state={
            isshow:false,
            index:1
       }
    }
    componentDidMount(){
       this.props.getbookList()
    }

    render(){
        return(
            <div>
                <div className={"bookList-header"}>
                    <div  style={{borderBottom:this.state.index===1?"1px solid red":null}}
                          onClick={()=>{
                              this.setState({
                                  index:1
                              })
                          }}>我的书架</div>
                    <div  style={{borderBottom:this.state.index===2?"1px solid red":null}}
                        onClick={()=>{
                        this.setState({
                            index:2
                        })
                    }}>最近阅读</div>
                </div>
                <div>
                    <div className={"bookList-sum"}>
                        <span>
                            收藏书籍{this.state.index===1?this.props.count:0}本
                        </span>
                        <b onClick={()=>{
                            this.setState({
                                isshow:!this.state.isshow
                            })
                        }}>
                            管理
                        </b>
                    </div>

                        {
                           this.state.index===1?this.props.bookList.map((v)=>{
                                return(
                                    <div className={"bookList-conent"} key={v._id}>
                                       <div className={"bookList-conent-img"}>
                                           <img src={v.imgUrl} alt=""/>
                                       </div>
                                        <div className={"bookList-conent-right"}>
                                            <h5>{v.bookName}</h5>
                                            <div>加入时间:{tools.getdate(v.addTime)}</div>
                                            <div className={"bookList-conent-right2"}>
                                                <b>点击阅读</b>
                                                <span style={{display:this.state.isshow?"block":"none"}}  onClick={()=>{
                                                   // console.log(v._id)
                                                   this.props.deleteBook.bind(this,v._id)()
                                                }}>删除</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }):null

                        }
                    {
                        this.state.index===2?<div>hahahha</div>:null
                    }


                </div>
            </div>
        )
    }
}
function mapStateToProps(state,props){
    return{
        bookList:state.bookList.bookList,
        count:state.bookList.count

    }
}
function mapDispatchToProps(dispatch){
    return{
        getbookList(){
            axios.get("/api/getBookList").then(({data})=>{
                //console.log(data,6666666666666)
                dispatch({
                    type:CHANGE_BOOKLIST,
                    payload:{
                        bookList:data.bookList,
                        count:data.count

                    }
                })
            })
        },
        deleteBook(_id){
            axios.delete("/api/deleteBook",{
                params:{
                    _id
                }
            }).then(({data})=>{
               if(data.ok===1){
                  this.props.getbookList()
               }
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);