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
import sellWell from "../views/sellWell.js"
import click from "../views/click.js"
import reward from "../views/reward.js"
import rankBoys from "../views/rankBoys.js"
import rankGirl from "../views/rankGirl.js"
import rankCompelete from "../views/rankCompelete.js"
import clickGirl from "../views/clickGirl.js"
import recommend from "../views/recommend.js"
import newBook from "../views/newBook.js"
import update from "../views/update.js"
import hotReading from "../views/hotReading.js"
import wealth from "../views/wealth.js"
import review from "../views/review.js"
import sellGirl from "../views/sellGirl.js"
import sellComplete from "../views/sellComplete.js"


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
    {
        path:"/sellWell",
        component:sellWell,
        exact:false,
        isChecked:false,
        nameStr:"热销榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/click",
        component:click,
        exact:false,
        isChecked:false,
        nameStr:"点击榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/reward",
        component:reward,
        exact:false,
        isChecked:false,
        nameStr:"打赏榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/rankBoys",
        component:rankBoys,
        exact:false,
        isChecked:false,
        nameStr:"男生",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/rankGirl",
        component:rankGirl,
        exact:false,
        isChecked:false,
        nameStr:"女生",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/rankCompelete",
        component:rankCompelete,
        exact:false,
        isChecked:false,
        nameStr:"全本",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/recommend",
        component:recommend,
        exact:false,
        isChecked:false,
        nameStr:"推荐榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/newBook",
        component:newBook,
        exact:false,
        isChecked:false,
        nameStr:"新书榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/update",
        component:update,
        exact:false,
        isChecked:false,
        nameStr:"更新榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/hotReading",
        component:hotReading,
        exact:false,
        isChecked:false,
        nameStr:"热读榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/wealth",
        component:wealth,
        exact:false,
        isChecked:false,
        nameStr:"财神榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/review",
        component:review,
        exact:false,
        isChecked:false,
        nameStr:"书评榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/sellGirl",
        component:sellGirl,
        exact:false,
        isChecked:false,
        nameStr:"热销榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/clickGirl",
        component:clickGirl,
        exact:false,
        isChecked:false,
        nameStr:"点击榜",
        meta:{
            isfooter:false
        }
    },
    {
        path:"/sellComplete",
        component:sellComplete,
        exact:false,
        isChecked:false,
        nameStr:"热销榜",
        meta:{
            isfooter:false
        }
    },
]