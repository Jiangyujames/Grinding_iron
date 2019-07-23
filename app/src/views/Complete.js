import React from "react";
import Brands from './Brands';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	withRouter,
} from "react-router-dom";
import "../assets/wanben.css";
class Complete extends React.Component{
	 constructor(){
	    super();
	    this.state = {
	      bookList:[],
		  comebooks:[],
		  bookInfo:[]
	    }
	}
    render(){
		
        return(	
		      <div>
			  
				 <div className="comebooks" >
					
					<h3><em></em>精品完读</h3>
				  <div className="bookslist" >
					{ this.state.comebooks.map(v=>{
						     return (
						           <div className="comes" key={v.bookId} onClick={()=>{this.props.history.push("/detali/"+v.bookId)}}>
								     <NavLink to={"/detail/"+v.bookId}>
									      <img src={v.bookIconUrl} alt=""/>
										  <b>{v.bookName}</b>	
									</NavLink>
									</div>
						     )
						 })
					}
				 </div>
						
				</div>
				
				
				 <div  className="booklist">
				   <h3><em></em>最新完本</h3>
					{ this.state.bookList.map(v=>{
						     return (
						           <div className="books" key={v.bookId} onClick={()=>{this.props.history.push("/detali/"+v.bookId)}}>
									  <img src={v.bookIconUrl} alt=""/>
										<span>
											 <b>{v.bookName}</b>
											 <p>{v.introduce}</p>
										</span>
									</div>
						     )
						 })
					}		
				</div>
				 <Brands></Brands>
				</div>
			 
        )
    }
	
	
    componentDidMount(){
        axios.get("/motie/ranking/detail?group=1&siteId=2&rankType=10&pageSize=6")
            .then(({data})=>{   
				console.log(data)
				this.setState({
					bookList:data.data
				})
				  
         })
		 axios.get("/motie/ranking/detail?group=3&siteId=2&rankType=10&pageSize=3")
		     .then(({data})=>{   
		 		console.log(data)
		 		this.setState({
		 			comebooks:data.data
		 		})
		 		  console.log(11111,this.state.bookList)
		 		
		  })
		   
		
    }

}


export default  withRouter(Complete);