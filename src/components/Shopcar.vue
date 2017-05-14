<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;">
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 40px;">
            <div @click='history.back(-1);' class='left'><i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i></div>购物车
        </div>
        <div style='-webkit-box-flex:1;position:relative;overflow: scroll;display: -webkit-box;-webkit-box-orient:vertical;'>
            <div class='shopList' v-if='show'>
                <div id='scroller'>
                    <ul class='shopListcon' style='text-align: left;'>
                        <transition-group name='list'>
                            <template v-for='(item,index) in goods'>
                                <div class='shopcon' v-bind:key="item.goodsID">
                                    <li>
                                        <div class='shopimg'><img :src=item.goodsListImg alt='' class='img'></div>
                                        <div class='shopinf'>
                                            <h3 class='shopname'>{{item.goodsName }}</h3>
                                            <p class='price'>单价:￥<span>{{ item.price }}</span></p>
                                            <p class='shopnum'><span class='num'>数量：</span><a href='#' class='jian' @click="reduces(item.goodsID,index)">-</a>
                                                <input type='text' :value=item.number class='txt' v-model='item.number' @blur='blurs(item.goodsID,index)'>
                                                <a href='#' class='plus' @click='plus(item.goodsID,index)'>+</a>
                                            </p>
                                        </div>
                                        <a href='javascript:;' class='del' @click="clicps(item.goodsID,index)"><img :src="delet" style='width:100%;height:100%;' /></a>
                                    </li>
                                </div>
                            </template>
                        </transition-group>
                    </ul>
                </div>
            </div>
            <div v-else='show' style='display: flex;justify-content: center;align-items: center;height:100%;-webkit-box-flex:1;'>
                <span style='padding:7px 4px;border:1px solid #aaa;width:auto;'>
                    <router-link to='/login' style='padding:5px 10px;border:1px solid #aaa;'>请先登录</router-link>
                </span>
            </div>
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
        <actionsheet v-model="show2" :menus="menus3" @on-click-menu-delete="del(id,index)" show-cancel></actionsheet>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Delete from '../assets/删除.png';
    import { Actionsheet } from 'vux';
    import axios from 'axios';

    export default {
        components: {
            Actionsheet
        },
        data() {
            return {
                goods: [],
                show2: false,
                delet: Delete,
                url: '',
                show: false,
                id: "",
                index: "",
                menus3: {
                    'title.noop': '你确定吗?<br/><span style="color:#666;font-size:12px;"></span>',
                    delete: '<span style="color:red" >删除</span>',
                    cancle: '<span>取消</span>'
                },
            }
        },
        created() {
            this.url = this.$route.path

            if (sessionStorage.getItem('username')) {
                this.show = true;
            }
            const _this = this;
            axios({
                url:"http://datainfo.duapp.com/shopdata/getCar.php",
                params:{userID: sessionStorage.getItem('username')},
                methods:'post'
            }).then(res=>{
                var res = eval(res.data)
            })
           
            const callback = (res) => {
                _this.goods = res;
            }
        },
        methods: {
            clicps(id, index) {
                this.id = id;
                this.index = index;
                this.show2 = true;
            },
            del(id, index) {
                axios({
                    url:"http://datainfo.duapp.com/shopdata/updatecar.php", 
                    params:{ userID: sessionStorage.getItem('username'), goodsID: id, number: 0 }
                }).then(res => {
                    this.goods.splice(index, 1);
                })
            },
            plus(id, index) {
                if (this.goods[index].number >= 99) this.goods[index].number = 99;
                else this.goods[index].number = parseInt(this.goods[index].number) + 1;
                axios({
                    url:"http://datainfo.duapp.com/shopdata/updatecar.php", 
                    params:{ userID: sessionStorage.getItem('username'), goodsID: id, number: this.goods[index].number }
                })
            },
            reduces(id, index) {
                if (this.goods[index].number <= 2) this.goods[index].number = 1;
                else this.goods[index].number = parseInt(this.goods[index].number) - 1;
                axios({
                    url:"http://datainfo.duapp.com/shopdata/updatecar.php", 
                    params:{ userID: sessionStorage.getItem('username'), goodsID: id, number: this.goods[index].number }
                })
            },
            blurs(id, index) {
                if (this.goods[index].number >= 99) this.goods[index].number = 99;
                else if (this.goods[index].number <= 2) this.goods[index].number = 1;
               axios({
                   url:"http://datainfo.duapp.com/shopdata/updatecar.php", 
                   params:{ userID: sessionStorage.getItem('username'), goodsID: id, number: this.goods[index].number }
                })
            }
        }
    }

</script>

<style scoped>
    @import '../assets/all/iconfont.css';
    .list-leave-active {
        transition: all 1s;
    }
    
    .list-enter-active {
        transition: all 1s;
    }
    
    .list-leave-active {
        opacity: 0;
        transform: translateX(-100%)
    }
    
    .list-enter {
        opacity: 1;
        transform: translateX(100%)
    }
    
    .list-enter-active,
    .list-leave {
        opacity: 1;
        left: 0;
    }
    
    .shopListcon {
        width: 100%;
        font-size: .28rem;
        list-style: none;
        float: left;
    }
    
    .shopname {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .shopListcon li {
        width: 90%;
        margin: .28rem .32rem .28rem;
        overflow: hidden;
    }
    
    .shopimg {
        width: 1.76rem;
        height: 1.76rem;
        float: left;
    }
    
    .shopinf {
        float: left;
        margin-left: .23rem;
        width: 3.18rem;
    }
    
    .del {
        display: block;
        float: left;
        width: .3rem;
        height: .35rem;
        /*background: url(../images/del.png) no-repeat;*/
        background-size: contain;
        margin-left: .2rem;
        color: #000;
    }
    
    .jian {
        float: left;
        display: block;
        width: .44rem;
        height: .44rem;
        background: black;
        color: #fff;
        text-align: center;
        line-height: .44rem;
        margin-left: .1rem;
    }
    
    .plus {
        float: left;
        display: block;
        width: .44rem;
        height: .44rem;
        background: black;
        color: #fff;
        text-align: center;
        line-height: .44rem;
    }
    
    .num {
        float: left;
    }
    
    .img {
        width: 100%;
        height: 100%;
    }
    
    .txt {
        border: none;
        float: left;
        width: .56rem;
        height: .44rem;
        padding-left: .3rem;
        border: 1px solid #aaa;
        outline: none;
        margin: 0 .15rem;
        border-radius: .1rem;
        box-shadow: 2px 3px 2px inset;
    }
</style>