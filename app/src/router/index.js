import Home from '../views/Home.js'
import Login from '../views/Login.js'
import My from '../views/My.js'
import BookList from '../views/BookList.js'
export default [
    {
      path:"/booklist",
      component:BookList,
      exact:false,
        isChecked:true,
        nameStr:"书架",
        meta:{
          isfooter:true
        }
    },
    {
        path:"/",
        component:Home,
        exact:true,
        isChecked:false,
        nameStr:"首页",
        meta:{
            isfooter:true
        }
    },
    {
        path:"/my",
        component:My,
        exact:false,
        isChecked:true,
        nameStr:"我的",
        meta:{
            isfooter:true
        }
    },
    {
        path:"/login",
        component:Login,
        exact:false,
        isChecked:false,
        nameStr:"登录",
        meta:{
            isfooter:false
        }
    },
]