<template>
    <div style="width:100%;height:100%;display: -webkit-box;-webkit-box-orient:vertical;position:absolute;" key='ther'>
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 38px;font-size:.3rem;position: relative;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click="back"><i class="iconfont">&#xf0292;</i>返回</div>商品资料
        </div>
        <div style='-webkit-box-flex:1;width:100%;'>
            <swiper :list="items" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
            <h3 style='text-align:center;'>{{obj.goodsName}}</h3>
            <div>
                <p>价格:<span style='color:red;'>￥{{obj.price}}</span></p>
                <p>购买人数:<span>{{obj.buynumber}}</span></p>
            </div>
        </div>
        <alert v-model="show">添加成功</alert>
        <div class='watch'>
            收藏商品
        </div>
        <div class='add' @click='change'>
            <div class='addshop'>添加到购物车</div>
        </div>
    </div>
</template>

<script>
    // import '../css/detail.css';
    import $ from 'jquery';
    import { XHeader, Swiper, SwiperItem, Alert } from 'vux';
    import router from '../router.js';
    import axios from 'axios';

    export default {
        components: {
            XHeader,
            Swiper,
            SwiperItem,
            Alert
        },
        created() {
            const self = this;
            axios({
                url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
                type: 'post',
                dataType: 'jsonp',
                params: {
                    goodsID: self.$route.params.id
                }
            }).then(res => {
                var obj = eval(res.data);
            })
            const callback = (obj) => {
                self.items.push({ img: obj[0].goodsListImg });
                self.obj = obj[0];
            }
        },
        data() {
            return {
                demo06_index: 0,
                items: [],
                obj: {},
                show: false,
                json: { "userID": sessionStorage.getItem('username'), "goodsID": this.$route.params.id, "number": 1 }
            }
        },
        methods: {
            demo06_onIndexChange(index) {
                this.demo06_index = index
            },
            back() {
                router.go(-1)
            },
            change() {
                axios({
                    url: 'http://datainfo.duapp.com/shopdata/updatecar.php',
                    params: this.json
                }
                ).then(res => {
                    this.show = !this.show;
                    console.log(res.data)
                }, (err) => {
                    console.log(err)
                })
            }
        }
    }

</script>

<style>
    /*@import '../assets/back/iconfont.css';*/
    
    .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {
        background-size: contain !important;
    }
    
    .addshop {
        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        font-size: .3rem;
        /*margin: .05rem auto 0;*/
        background: #FF5000;
    }
    
    .watch {
        text-align: center;
        line-height: .7rem;
        color: #828282;
        font-size: .26rem;
        width: 100%;
        z-index: 222;
        height: .7rem;
        background: aqua;
    }
</style>