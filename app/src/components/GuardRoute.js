import React from 'react'
import {withRouter} from 'react-router-dom'
import GuardNav from './GuardNav'
class GuardRoute extends React.Component{
    componentWillMount(){
        if(this.props.isChecked){
            if(!localStorage.phoneId){
                this.props.history.push("/login")
            }
        }
    }
    render(){
        return(
            <div>
                {this.props.meta.isfooter?<GuardNav></GuardNav>:null}
                <this.props.component></this.props.component>
            </div>

        )
    }
}
export default withRouter(GuardRoute)