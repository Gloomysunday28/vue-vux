<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;background: #eee;">
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 38px;font-size:.3rem;position: relative;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click='back()'><i class="iconfont">&#xf0292;</i>返回</div>设置
        </div>
        <div style='-webkit-box-flex:1;'>
            <group>
                <cell title='账号与安全' is-link></cell>
            </group>
            <group>
                <cell title="新消息通知" is-link></cell>
                <cell title="隐私" is-link></cell>
                <cell title="通用" is-link></cell>
            </group>
            <group>
                <cell title='帮助与反馈' is-link></cell>
                <cell title='关于我们' is-link></cell>
            </group>
            <group>
                <cell title='退出登录' style='color:red;text-align: center;' @click.native='show2 = ! show2;'></cell>
            </group>
        </div>
        <actionsheet v-model="show2" :menus="menus3" @on-click-menu-delete="login()" show-cancel></actionsheet>
    </div>
</template>

<script>
    import { Group, Cell, Actionsheet } from 'vux';
    import router from '../router.js';

    export default {
        components: {
            Group,
            Cell,
            Actionsheet
        },
        data() {
            return {
                show2:false,
                menus3: {
                    'title.noop': '你确定吗?<br/><span style="color:#666;font-size:12px;"></span>',
                    delete: '<span style="color:red" >确定</span>'
                },
            }
        },
        methods: {
            back(){
                router.go(-1);
            },
            login() {
                router.push('/login')
            },
            show(){
                this.show2 = true
            }
        }
    }

</script>

<style>
    /*@import '../assets/back/iconfont.css';*/
    
</style>