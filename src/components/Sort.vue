<template>
  <div class="other" style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;">
    <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 40px;">
      <div @click='history.back(-1);' class='left'><i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i></div>商品分类
    </div>
    <div style='-webkit-box-flex:1;position:relative;overflow: scroll;'>
      <grid :rows="3">
        <grid-item :label="i.className" v-for="i in classes" :key="i.classID" @click.native='skip(i.classID)'>
          <img slot="icon" :src="img">
        </grid-item>
      </grid>
      <divider style='font-size:.25rem;'>没有更多了</divider>
      
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
  import { Badge, Group, Cell, Divider, Grid, GridItem } from 'vux';
  import Logo from '../assets/logo.png';
  import router from '../router.js';
  import axios from 'axios';

  export default {
    components: {
      Badge,
      Group,
      Cell,
      Divider,
      Grid,
      GridItem
    },
    created() {
      this.url = this.$route.path;
      axios({
        url:'http://datainfo.duapp.com/shopdata/getclass.php'
      }).then(res => {
        this.classes = res.data
      })
    },
    data() {
      return {
        url: "",
        img:Logo,
        classes: []
      }
    },
    methods:{
      skip(id){
        router.push(`/list/${id}`)
      }
    }
  }

</script>

<style>
  @import '../assets/all/iconfont.css';
  @import '../assets/class/iconfont.css';
  
  .badge-value {
    display: inline-block!important;
  }
  
  .vertical-middle {
    vertical-align: middle;
  }
  
  .other {
    height: 100%;
  }
</style>