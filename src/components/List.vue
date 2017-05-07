<template>
    <div class="other" style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;">
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 40px;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click='back()'><i class="iconfont">&#xf0292;</i>返回</div>商品列表
        </div>
        <div style='-webkit-box-flex:1;'>
            <li data-id='"+result[i].goodsID+"' v-for='item in datas' class='goods' @click='skip(item.goodsID)'>
                <a href='javascript:;'><img :src=item.goodsListImg class='goodimg' />
                    <div class='instroduce'>
                        <h4 class='goodtitle'>{{item.goodsName}}</h4>
                        <p class='goodprice'>￥{{item.price}}</p>
                        <p class='goodadd'>折扣:{{item.discount}}</p>
                    </div>
                </a>
            </li>
        </div>
    </div>
</template>

<script>
    import router from '../router.js';
    import axios from 'axios';

    export default {
        created() {
            axios({
                methods:'post',
                url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
                params: {
                    classID: this.$route.params.id
                }
            }
            ).then(res => {
                console.log(res)
                var ress = eval(res.data)
            })
            const callback = (ress) => {
                console.log(ress)
                this.datas = ress;
            }
        },
        data() {
            return {
                datas: []
            }
        },
        methods: {
            back() {
                router.go(-1)
            },
            skip(id) {
                router.push(`/detail/${id}`)
            }
        }
    }

</script>

<style>
    .goodimg {
        width: 100px;
        float: left;
        height: 100px;
    }
    
    .goodtitle {
        font-size: 14px;
        margin: 0 0 16px 0;
        text-align: left;
    }
    
    .goods {
        list-style: none;
        width: 100%;
        float: left;
        height: 110px;
        margin: .1rem 0;
        border-bottom: 1px solid #dbdbdb;
    }
    
    .goods a {
        color: #000;
    }
    
    .goods a p {
        text-align: left;
        margin: 0;
    }
    
    .goodadd {
        color: grey;
    }
    
    .goodprice {
        color: red;
    }
</style>