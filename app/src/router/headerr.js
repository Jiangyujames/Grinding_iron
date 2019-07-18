import Boys from "../views/Boys"
import Girl from "../views/Girl";
import Publish from "../views/Publish";
export default [
    {
        path:"/boys",
        exact:false,
        isChecked:false,
        component:Boys,
        nameStr:"男生",
        meta:{
            isfooter:true,
            isHeader:true
        }
    },
    {
        path:"/Girl",
        exact:false,
        isChecked:false,
        component:Girl,
        nameStr:"女生",
        meta:{
            isfooter:true,
            isHeader:true
        }
    },
    {
        path:"/Publish",
        exact:false,
        isChecked:false,
        component:Publish,
        nameStr:"出版",
        meta:{
            isfooter:true,
            isHeader:true
        },
    },
]
