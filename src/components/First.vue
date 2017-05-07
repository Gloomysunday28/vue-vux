<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;" class='first'>
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;">
            <div style='width:100%;height:100%;'><div style='margin:6px auto;width:60%;height:70%;border-radius:10px;background: #fff;opacity: .5;margin-top:7px;'></div><i class='iconfont' style='position:absolute;left:80px;top:5px;font-size:.35rem;z-index:9;'>&#xe501;</i></div>
        </div>
        <div style='-webkit-box-flex:1;position:relative;overflow: scroll;'>
            <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" @click="click"></swiper>
            <flexbox style='margin:20px 0;'>
                <flexbox-item>
                    <x-button type="default" style='background:yellow;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>童鞋</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="primary" style='width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0;'>男鞋</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="warn" style='width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>女鞋</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="" style='background:red;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>乔丹</x-button>
                </flexbox-item>
            </flexbox>
            <flexbox style='marginBottom:20px;'>
                <flexbox-item>
                    <x-button type="" style='background:deepskyblue;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>鸿星</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="" style='background:orangered;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0;'>阿迪</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="warn" style='background:limegreen;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>李宁</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="" style='background:rebeccapurple;width:0.6rem;height:0.6rem;border-radius:0.6rem;font-size:0.24rem;padding:0'>安踏</x-button>
                </flexbox-item>
            </flexbox>
            <div style='padding-left:20px;marginBottom:20px;'>
                <img src="https://static.vux.li/demo/1.jpg" width="30" height=30 alt="" style="float:left;marginRight:30px">
                <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false" width="70%">
                    <swiper-item>
                        <p>义务爱了 完成传奇世界H5-王者归</p>
                    </swiper-item>
                    <swiper-item>
                        <p>基本世神 兑换传奇世界H5畅玩级礼包</p>
                    </swiper-item>
                    <swiper-item>
                        <p>零哥章魚 完成传奇世界H5王者归来</p>
                    </swiper-item>
                    <swiper-item>
                        <p>做迎而為 兑换饿了么畅享美食红包</p>
                    </swiper-item>
                    <swiper-item>
                        <p>只知道不知道 兑换饿了么畅享红包</p>
                    </swiper-item>
                    <swiper-item>
                        <p>基本世神 兑换传奇世界H5畅玩级礼</p>
                    </swiper-item>

                    
                </swiper>
            </div>
            <divider style='float:left;margin-top:.2rem;'>猜你喜欢</divider>
            <ul class='prod'>
                <template v-for="(item,key,index) in items">
                    <li :data-id=item.goodsID :key="item.goodsID" :index='key' @click="click(item.goodsID)">
                        <div><img :src="item.goodsListImg" alt=""></div>
                        <h3>{{item.goodsName}}</h3>
                        <p><span>￥{{item.price}}</span><b>{{item.price}}</b></p>
                    </li>
                </template>
            </ul>
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
    import { Swiper, Flexbox, FlexboxItem, XButton, SwiperItem, Divider } from 'vux'
    import $ from 'jquery';
    import router from '../router.js';

    const baseList = [{
        img: 'https://static.vux.li/demo/1.jpg',
    }, {
        img: 'https://static.vux.li/demo/2.jpg',
    }, {
        img: 'https://static.vux.li/demo/3.jpg',
    }]

    const urlList = baseList.map((item, index) => ({
        img: item.img,
    }))

    export default {
        components: {
            SwiperItem,
            Swiper,
            Flexbox,
            FlexboxItem,
            XButton,
            Divider
        },
        data() {
            return {
                demo06_list: urlList,
                demo06_index: 0,
                items: [],
                url: ""
            }
        },
        created() {
            this.url = this.$route.path;
            const https = () => {
                return this.$http.get('http://datainfo.duapp.com/shopdata/getGoods.php')
            }

            const user = async () => {
                const a = await https();
                eval(a.body)
                var res = a.body;
            }

            user();
            const callback = (res) => {
                this.items = res
            }
        },
        methods: {
            demo06_onIndexChange(index) {
                this.demo06_index = index
            },
            click(id) {
                router.push(`/detail/${id}`)
            },
            aa() {
                $('.first').scrollTop(500);
            }
        }
    }

</script>

<style scoped>
    @import '../css/goods.css';
    @import '../assets/all/iconfont.css';
</style>