import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import "../assets/BookList.css"

class recentReading extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div className="total">
                        <p>阅读记录<i>5</i>条</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default recentReading;