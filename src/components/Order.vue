<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;background: #eee;">
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 38px;font-size:.3rem;position: relative;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click='back()'><i class="iconfont">&#xf0292;</i>返回</div>订单管理
        </div>
        <div style='-webkit-box-flex:1;display:-webkit-box;-webkit-box-orient:vertical;'>
            <tab :animate="true" bar-active-color="orangered" active-color='red' v-model="index">
                <tab-item>已发货</tab-item>
                <tab-item>未发货</tab-item>
                <tab-item>全部订单</tab-item>
            </tab>
            <swiper v-model="index" style='-webkit-box-flex:1;display:-webkit-box;-webkit-box-orient:vertical;' :show-dots="false">
                <swiper-item :key="index" style='height:200px;'>
                    <template>
                        <div class="tab-swiper vux-center">
                            <li class='goods' @click='skip(item.goodsID)' v-for="(item, index) in list2">
                                <a href='javascript:;'><img :src=item.goodsListImg class='goodimg' />
                                    <div class='instroduce'>
                                        <h4 class='goodtitle'>{{item.goodsName}}</h4>
                                        <p class='goodprice'>￥{{item.price}}</p>
                                        <p class='goodadd'>折扣:{{item.discount}}</p>
                                    </div>
                                </a>
                            </li>
                        </div>
                    </template>
                </swiper-item>
            </swiper>
        </div>
    </div>
</template>

<script>
    import router from '../router.js';
    import { Tab, TabItem, Swiper, SwiperItem } from 'vux';
    import axios from 'axios';

    export default {
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        created() {
            axios({
                url: 'http://datainfo.duapp.com/shopdata/getCar.php',
                params: { userID: sessionStorage.getItem('username') }
            }).then(res => {
                var ress = eval(res.data)
            })
            const callback = (ress) => {
                this.list2 = ress;
            }
        },
        data() {
            return {
                index: 0,
                list2: []
            }
        },
        methods: {
            back() {
                router.go(-1)
            },
            skip(id) {
                router.push(`/order/${id}`)
            }
        }
    }

</script>

<style>
    .vux-swiper {
        height: auto !important;
        -webkit-box-flex: 1;
    }
</style>