import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Boy from '@/components/Boy'
import Girl from '@/components/Girl'
import Kid from '@/components/Kid'
import LifeStyle from '@/components/LifeStyle'
import HeaderBoy from '@/components/HeaderBoy'
import MySwiper from '@/components/MySwiper'
import Category from '@/components/Category'
import Prodetail from '@/components/Prodetail'
import Footernav from '@/components/Footernav'
import Cate from '@/components/Cate'
import Shopping from '@/components/Shopping'
import Cart from '@/components/Cart'
import My from '@/components/My'
import MySlider from '@/components/Myslider'
import Indexcate from '@/components/Indexcate'
import Hotcate from '@/components/Hotcate'
import Prodetailone from '@/components/Prodetailone'
import MyProduct from '@/components/MyProduct'
import Login from '@/components/Login'
import Chapter from '@/components/Chapter'
import ShopCar from '@/components/ShopCar'
import Market from '@/components/Market'
import Excellent from '@/components/Excellent'
import Star from '@/components/Star'
import Myshopcar from '@/components/Myshopcar'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/youhuo/boy',
      name: 'Boy',
      component: Boy,
      children: [{ path: '/youhuo/boy', name: 'catlog', components: {myswiper: MySwiper, category: Category,prodetail: Prodetail, footernav: Footernav , indexcate: Indexcate ,hotcate: Hotcate} }]
    },
    {
      path: '/youhuo/girl',
      name: 'Girl',
      component: Girl,
    },
    {
      path: '/youhuo/kid',
      name: 'Kid',
      component: Kid,
    },
    {
      path: '/youhuo/lifestyle',
      name: 'LifeStyle',
      component: LifeStyle,
    },
    {
      path: '/youhuo/cate',
      name: 'Cate',
      component: Cate,
    },
    {
      path: '/youhuo/shopping',
      name: 'Shopping',
      component: Shopping,
    },
    {
      path: '/youhuo/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/youhuo/my',
      name: 'My',
      component: My,
    },
    {
      path: '/product/:proId',
      name: 'proid',
      component: MyProduct,
      children: [{ path: '/product/:proId', name: 'catlog', components: { category: Category, shopcar :ShopCar} }],
    
    },{
      path: '/youhuo/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/chapter/:proId',
      name: 'login',
      component: Chapter,
    },
    {
      path: '/market/:marketId',
      name: 'login',
      component: Market,
    },
    {
      path: '/excellent',
      name: 'login',
      component: Excellent,
    },
    {
      path: '/star',
      name: 'login',
      component: Star,
    },
    {
      path: '/myshopcar/:userid',
      name: 'login',
      component: Myshopcar,
    }
  ]
})
//router.beforeEach(function(){window.scrollTo(0,0)})

 export default router;
