<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;background: #eee;">
        <div style="width:100%;text-align: center; background: #fff;color: #000;height: 40px;line-height: 38px;font-size:.3rem;position: relative;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click='back()'><i class="iconfont">&#xf0292;</i>返回</div>订单详情
        </div>
        <div id='banner'>
            <p>
                <span class='wait'>请先付款</span>
            </p>
            <div style='float:left;background: none;position:absolute;right:50px;top:45px;'>
                <img style='width:50px;height:50px;' :src=img>
            </div>
        </div>
        <div class='concat' style="font-size:0.2rem;width:100%;padding:20px;overflow: hidden;">
            <p>收货人:<span class='person'></span></p>
            <p>收货地址:<span class='address'></span></p>
        </div>
        <div class='wrapper'>
            <div class='scroller' style='position:relative;'>
                <ul class='prods' style='font-size:0.25rem;'>
                    <li style='height:100px;position:relative;width:100%;margin-bottom:0;' class='orders'>
                        <div style="width:30%;height:100%;float:left;"><img :src=items.goodsListImg alt=""></div>
                        <div style='float:left;width:60%;margin-left:20px;'>
                            <h3 class='goodtitle' style='font-size:0.25rem;'>{{items.goodsName}}</h3>
                        </div>
                        <p style='float:right;width:15%;font-size:.25rem;'><span>￥{{items.price}}</span></p>
                        <div style='position:absolute;right:10px;bottom:0px;'>x<span>1</span></div>
                    </li>
                </ul>
            </div>
        </div>
        <footer style='width:100%;float:left;height:0.78rem;position:fixed;left:0;bottom:0;z-index:9999;font-size:.25rem;border-top:1px solid #666;'>
            <a href='javascript:;' style='display: block;position:absolute;right:20px;padding:5px;border:2px solid #ccc;border-radius:30px;top:8px;color:orange;'
                class='sure'>确定付款</a>
        </footer>
    </div>
</template>

<script>
    import router from '../router.js';
    import Logo from '../assets/logo.png';

    export default {
        data() {
            return {
                items: {},
                img: ""
            }
        },
        methods: {
            back() {
                router.go(-1);
            }
        },
        created() {
            this.img = Logo;
            this.$http.post('http://datainfo.duapp.com/shopdata/getGoods.php', { goodsID: this.$route.params.id }, { emulateJSON: true }).then(res => {
                var ress = eval(res.body);
            })
            const callback = (ress) => {
                this.items = ress[0];
                console.log(ress)
            }
        }
    }

</script>

<style>
    #banner {
        width: 100%;
        height: 1rem;
        font-size: .25rem;
        color: #fff;
        background: orange;
    }
    
    #banner p {
        float: left;
        margin: 18px;
    }
    
    .prods {
        list-style: none;
        width: 88%;
        margin: 0 auto;
        overflow: hidden;
    }
    
    .prods li {
        width: 2.47rem;
        height: 2.47rem;
        float: left;
        margin-right: 11%;
        margin-bottom: 1.4rem;
    }
    
    .prods li:nth-child(even) {
        margin-right: 0;
    }
    
    .prods li div img {
        width: 100%;
        height: 100%;
    }
    
    .prods li h3 {
        width: 100%;
        text-align: center;
        font-size: .3rem;
        color: #3a3a3a;
        text-align: center;
        float: left;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .prods li p {
        width: 100%;
        font-size: .3rem;
        float: left;
    }
    
    .prods li p span {
        float: left;
        color: red;
    }
    
    .prods li p b {
        float: right;
        font-weight: 100;
        text-decoration: line-through;
    }
</style>