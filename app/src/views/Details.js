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
           bookInfo:{}
        }
         }
	
    componentWillMount() {
		axios.get("/motie/books/"+this.props.match.params.id+"/detail").then(({ data }) => {
		    console.log(9090909,data);
		    this.setState({
		        bookInfo: data.data
		}) 
		
		 }) 
       
	    }
		componentDidMount(){
			 
		}
		 render() {
			 console.log(this.state.bookInfo,898989)
			 console.log(this.state.bookInfo['tuijianBookList'],44444444444444)
		    return (
			<div className={"detals"}>
					   <div className={"deta"}>
					   <span className={"back"} onClick={()=>this.props.history.go(-1)}>&lt;</span><span className={"tite"}>作品详情</span></div>
							<img  className={"book"}src={this.state.bookInfo.icon} />
							<div>
				 			{this.state.bookInfo.name}
				 			<p>{this.state.bookInfo.authorName}|{this.state.bookInfo.sortName}|{this.state.bookInfo.status}</p>
							<p>{this.state.bookInfo.words}{this.state.bookInfo.discountPrice}</p>
							<p>粉丝数:{this.state.bookInfo.followCount}</p>
							<p>点击数:{this.state.bookInfo.visitCount}</p>
				 			</div>
							<hr/>
							<input type="button"  value={"加入书架"} onClick={()=>{   
														   console.log("加入书架");	   
										                }}/>
			                <input type="button"  value={"立即阅读"} onClick={()=>{   
			                	// this.props.history.push("/read");
			                   console.log("立即阅读");	   
			                }}/>
							<hr/>
							<div><i>打赏</i><i>推荐</i></div>
							<div>{this.state.bookInfo.introduce}</div>
							<div><i>目录:</i>{console.log(this.state.bookInfo['lastChapterList'])}<i>连载至</i></div>
							<p>看过这本书的人还看过</p>
						{
							!this.state.bookInfo['reviewList']?null:this.state.bookInfo['reviewList'].map((v,i)=>{
								return(
								<div key={i}><img src={v.userIcon}/></div>
								)
							})
						}						
			</div>

		    )
		}
		

	}
	
export default  withRouter(Detail);

			
// <div>
							// {
							// 	this.state.bookInfo.reviewList.map(v=>{
							// 		return(
							// 		<div>
							// 			
							// 		</div>
							// 		)
							// 		
							// 	})
							// 								
							// }
							// </div>
