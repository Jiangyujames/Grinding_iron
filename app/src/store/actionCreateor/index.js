import axios from 'axios'
export default {
    getTypeList(group,siteId,rankType,pageSize){
        axios.get("/motie/ranking/detail?group="+group+"&siteId="+siteId+"&rankType="+rankType+"&pageSize="+pageSize)
            .then(({data})=>{
                console.log(data)
            })
    }
}