<template>
    <div>
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 40px;">
            <div @click='history.back(-1);' class='left'><i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i></div>注册
        </div>
        <group>
            <x-input title="用户名" name="username" placeholder="请输入用户名" v-model='userId'></x-input>
            <x-input title="密码" name="password" placeholder="请输入密码" type="password" v-model='password'></x-input>
        </group>
         <button type="default" @click='register' style='background: #fff;outline: none;width:100%;height:40px;text-align: center;border:none;border:1px solid #ccc;'>注册</button>
    </div>
</template>

<script>
    import { XInput, Group,XButton } from 'vux';
    import $ from 'jquery';

    export default {
        components: {
            XInput,
            Group,
            XButton
        },
        data() {
            return {
                userId: "",
                password: ""
            }
        },
        methods: {
            register(e) {
                $.ajax({
                    url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
                    data: {
                        status: "register",
                        userID:this.userId,
                        password:this.password
                    },
                    success(res){
                        console.log(res)
                    }
                })
            }
        }
    }

</script>