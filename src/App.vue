<template>
  <div id="app" style="width:100%;height:100%;">
    <transition name='fade' model='in-out'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'app',
    components:{
      Flexbox,
      FlexboxItem
    }
  }
  var oHtml = document.getElementsByTagName('html')[0];
  var initWid = 640;
  var swidth = document.documentElement.clientWidth;
  oHtml.style.fontSize = swidth * 100 / initWid + 'px';

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import 'css/footer.css';

  html{
    width:100%;
    height:100%;
  }
  body {
    width:100%;
    height:100%;
    background-color: #fbf9fe;
  }
  
  .fade-leave-active {
    transition: all 1s;
    position: absolute;
  }
  
  .fade-enter-active {
    transition: all 1s;
    position: absolute;
  }
  
  .fade-leave-active {
    opacity: 0;
    transform: translateX(-50%)
  }
  
  .fade-enter {
    opacity: 1;
    transform: translateX(100%)
  }
  
  .fade-enter-active,
  .fade-leave {
    opacity: 1;
    left: 0;
  }
</style>