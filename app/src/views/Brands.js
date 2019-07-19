import React from 'react';
import '../assets/brands.css'
import axios from 'axios';
class Brands extends React.Component{
    constructor(){
        super();
        this.state=({
            data:[]
        })
    }
    componentWillMount(){
        axios.get("/motie/h5/sites")
            .then(({data})=>{
                console.log(data);
                this.setState({
                    data:data.items
                })
            })
    }
    render(){
        return (
            <div id="brands">
                <h3>磨铁文学旗下品牌</h3>
                <hr/>
                {
                    this.state.data.map((v,i)=>{
                        return (
                            <div className="item" key={i}>
                                <img src={v.siteIconUrl} alt=""/>
                                <h4>{v.siteName}</h4>
                                <p>{v.introduction}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default Brands;