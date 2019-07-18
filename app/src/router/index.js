import Login from '../views/Login.js';
import My from '../views/My.js';
import BookList from '../views/BookList.js';
import About from '../views/About.js';
import MyDetail from '../views/MyDetail';
import Boys from "../views/Boys";
import Girl from "../views/Girl";
import Publish from "../views/Publish";
import Type from "../views/Type";
import Rank from "../views/Rank";
import Complete from "../views/Complete";
import Free from "../views/Free";

export default [
    {
      path:"/booklist",
      component:BookList,
        exact:true,
        isChecked:true,
        nameStr:"书架",
        meta:{
            isfooter:true,
            isHeader:false
        }
    },
    {
        path:"/",
        component:Boys,
        exact:true,
        isChecked:false,
        nameStr:"首页",
        meta:{
            isfooter:true,
            isHeader:true
        }
    },
    {
        path:"/my",
        component:My,
        exact:false,
        isChecked:true,
        nameStr:"我的",
        meta:{
            isfooter:true,
            isHeader:false
        }
    },
    {
        path:"/login",
        component:Login,
        exact:false,
        isChecked:false,
        nameStr:"登录",
        meta:{
            isfooter:false,
            isHeader:false
        }
    },
    {
        path:"/about",
        component:About,
        exact:false,
        isChecked:false,
        nameStr:"关于我们",
        meta:{
            isfooter:false,
            isHeader:false
        }
    },
    {
        path:"/person/myDetail",
        component:MyDetail,
        exact:false,
        isChecked:false,
        nameStr:"个人页面",
        meta:{
            isfooter:false,
            isHeader:false
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
        }
    },
    {
        path:"/Type/:group/:siteId/:rankType/:pageSize",
        exact:false,
        isChecked:false,
        component:Type,
        nameStr:"分类",
        meta:{
            isfooter:false,
            isHeader:false
        }
    },
    {
        path:"/Rank",
        exact:false,
        isChecked:false,
        component:Rank,
        nameStr:"排行",
        meta:{
            isfooter:false,
            isHeader:false
        }
    },
    {
        path:"/Complete",
        exact:false,
        isChecked:false,
        component:Complete,
        nameStr:"全本",
        meta:{
            isfooter:true,
            isHeader:true
        }
    },
    {
        path:"/Free",
        exact:false,
        isChecked:false,
        component:Free,
        nameStr:"免费",
        meta:{
            isfooter:true,
            isHeader:true
        }
    },
]