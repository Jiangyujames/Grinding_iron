
import {CHANGE_TYPELIST} from "../actionType/TypeList";
import axios from 'axios'
export default{
    getTypeList(dispatch){
        return (dispatch)=>{
            axios.get("/motie/ranking/detail?group="+this.state.group+"&siteId="+this.state.siteId+"&rankType="
                +this.state.rankType+"&pageSize="+this.state.page*this.props.match.params.pageSize)
                .then(({data})=>{
                    dispatch({
                        type:CHANGE_TYPELIST,
                        payload:{
                            typeList:data.data,
                            isloading:false
                        }
                    })
                })
        }
    },
}