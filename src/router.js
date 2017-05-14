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
import Parent from './components/Parent';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: resolve => require(['./components/Index'], resolve),
  children: [{
    path: '',
    component: resolve => require(['./components/First.vue'], resolve)
  }, {
    path: 'sort',
    component: resolve => require(['./components/Sort'], resolve)
  }, {
    path: 'person',
    component: resolve => require(['./components/Person'], resolve),
  }, {
    path: 'shopcar',
    component: resolve => require(['./components/Shopcar'], resolve),
  }
  ]
}, {
  path: '/detail/:id',
  component: resolve => require(['./components/ProductDetails'], resolve),
}, {
  path: '/register',
  component: resolve => require(['./components/Register'], resolve),
}, {
  path: '/login',
  component: resolve => require(['./components/Login'], resolve),
}, {
  path: '/set',
  component: resolve => require(['./components/Set'], resolve),
}, {
  path: '/address',
  component: resolve => require(['./components/Address'], resolve),
}, {
  path: '/list/:id',
  component: resolve => require(['./components/List'], resolve),
}, {
  path: '/order',
  component: resolve => require(['./components/Order'], resolve),
}, {
  path: '/order/:id',
  component: resolve => require(['./components/OrderMes'], resolve),
}, {
  path: "/parent",
  component: resolve => require(['./components/Parent'], resolve),
}
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;