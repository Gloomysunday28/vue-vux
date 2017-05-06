<template>
  <div class="other" style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;background: #eee;">
    <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 40px;">
      <div @click='history.back(-1);' class='left'><i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i></div>个人信息
    </div>
    <div style='-webkit-box-flex:1;position:relative;overflow: scroll;'>
      <group>
        <cell is-link>
          <img slot="icon" width="50" height='50' style="display:block;margin-right:5px;" :src="img">
          <h5>Gloomy Sunday</h5>
        </cell>
      </group>
      <group>
        <cell title="收货地址" link='/address'></cell>
        <cell title="收藏宝贝" link='/order'></cell>
        <cell title="我的订单" link='/order'></cell>
      </group>
      <group>
        <cell title="设置" is-link link='/set'></cell>
      </group>
    </div>
    <div class='foot' style='font-size:.25rem;'>
      <router-link to="/" class="weui-tabbar__item weui-bar__item_on" :style=" url ==  '/' ? {color:'red'} :{color:''} ">
        <i class='iconfont' style='width:100%;display: block; font-size:.3rem;'>&#xe604;</i> 首页
      </router-link>
      <router-link to="/sort" class="123" :style=" url ==  '/sort' ? {color:'red'} :{color:''} ">
        <i class='iconfont' style='width:100%;display: block;font-size:.3rem;'>&#x3452;</i> 分类
      </router-link>
      <router-link to="/shopcar" class="123" :style=" url ==  '/shopcar' ? {color:'red'} :{color:''} ">
        <i class='iconfont' style='width:100%;display: block;font-size:.3rem;'>&#xe602;</i> 购物车
      </router-link>
      <router-link to="/person" class="123" :style=" url ==  '/person' ? {color:'red'} :{color:''} ">
        <i class='iconfont' style='width:100%;display: block;font-size:.3rem;'>&#xe600;</i> 个人信息
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Badge, Group, Cell, Divider } from 'vux';
  import Logo from '../assets/logo.png';

  export default {
    components: {
      Badge,
      Group,
      Cell,
      Divider
    },
    created(){
      this.url=this.$route.path;
    },
    data() {
      return {
        img: Logo,
        url:""
      }
    }
  }

</script>

<style>
  @import '../assets/all/iconfont.css';
  .badge-value {
    display: inline-block!important;
  }
  
  .vertical-middle {
    vertical-align: middle;
  }
  
  .other {
    height: 100%;
  }
  
  input {
    box-shadow: none;
  }
</style>