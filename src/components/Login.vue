<template>
    <div style="width:100%;height:100%;" class='login'>
        <x-input title="姓名" name="username" placeholder="请输入姓名" v-model='id'></x-input>
        <x-input title="密码" name="password" placeholder="请输入密码" type='password' v-model='pas'></x-input>
        <button type="default" @click='login' style='background: #fff;outline: none;width:100%;height:40px;text-align: center;border:none;border:1px solid #ccc;'>登录</button>
    </div>
</template>

<script>
    import { XInput } from 'vux';
    import $ from 'jquery';
    import router from '../router.js';
    import axios from 'axios';

    export default {
        components: {
            XInput
        },
        data() {
            return {
                id: "",
                pas: ""
            }
        },
        methods: {
            login() {
                const _this = this;
                axios({
                    url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
                    params: {
                        status: 'login',
                        userID: this.id,
                        password: this.pas
                    }
                }).then(res => {
                    if (res.data !== 0 && res.data !== 2) {
                        sessionStorage.setItem('username', _this.id);
                        sessionStorage.setItem('pass', _this.pas);
                        router.push('/')
                    }else if(res.data === 2){
                        alert('账号或密码错误')
                    }
                })
            }
        }
    }

</script>