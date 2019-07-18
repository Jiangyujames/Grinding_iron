import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink

} from 'react-router-dom';
import {
    connect
} from "react-redux";
import axios from "axios";
import sellactionCreateor from "../store/actionCreateor/sellWell"

class reward extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                {
                    this.props.sellWell.map(v=>{
                        return (
                            <div key={v.id} className="route-content">
                                <img src={v.icon} alt=""/>
                                <span className="route-content-r">
                                    <h3>{v.name}</h3>
                                    <p>{v.introduce}</p>
                                    <i className="author-rank">
                                        <img src={v.authorIcon} alt=""/>
                                        <strong>{v.authorName}</strong>
                                    </i>
                                </span>


                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.sellWell);
        this.props.getsellWellList();
    }
}

function mapStateToProps(state) {
    return {
        sellWell:state.sellWell
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getsellWellList(){
            console.log(121212212);
            axios.get("https://app2.motie.com/ranking?rankType=11&sex=1&pageNo=1&siteId=99&timeLimit=4&group=1&pageSize=10")
                .then(({data})=>{
                    const sellWell = data.data.bookList;
                    dispatch({
                        type:"UP_SELLWELL",
                        payload:{
                            sellWell
                        }
                    });
                    console.log(data.data.bookList);
                })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(reward)