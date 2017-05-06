import Vue from 'vue';
import VueRouter from 'vue-router';
import Sort from './components/Sort';
import Index from './components/Index';
import Person from './components/Person';
import IndexContent from './components/First';
import Detail from './components/ProductDetails';
import Register from './components/Register';
import Login from './components/Login';
import Shopcar from './components/Shopcar';
import Set from './components/Set';
import Address from './components/Address';
import List from './components/List';
import Order from './components/Order';
import OrderMes from './components/OrderMes';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Index,
  children: [{
    path: '',
    component: IndexContent,
  }, {
    path: 'sort',
    component: Sort,
  }, {
    path: 'person',
    component: Person,
  }, {
    path: 'shopcar',
    component: Shopcar
  }
  ]
}, {
  path: '/detail/:id',
  component: Detail
}, {
  path: '/register',
  component: Register
}, {
  path: '/login',
  component: Login
},{
    path:'/set',
    component:Set
  },{
    path:'/address',
    component:Address
  },{
    path:'/list/:id',
    component:List
  },{
    path:'/order',
    component:Order
  },{
    path:'/order/:id',
    component:OrderMes
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;