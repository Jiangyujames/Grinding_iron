import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import "../assets/BookList.css";

class myBookList extends React.Component{
    render(){
        return(
            <div>
                <div className="total">
                    <p>收藏书籍<i>5</i>本</p>
                    <div>管理</div>
                </div>
            </div>
        )
    }
}
export default myBookList;