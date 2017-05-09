<template>
    <div style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;width:100%;background: #eee;">
        <div style="width:100%;text-align: center; background: orangered;color: #fff;height: 40px;line-height: 38px;font-size:.3rem;position: relative;">
            <div style='position: absolute;left:.2rem;font-size:.25rem;top:2px;' @click='back()'><i class="iconfont">&#xf0292;</i>返回</div>添加地址
        </div>
        <div style='width:100%;-webkit-box-flex:1;'>
            <group>
                <x-address title="市区选择" raw-value :list="addressData" value-text-align="left"></x-address>
                <popup-picker title='街道选择' :data='street' v-model="value5" value-text-align="left"></popup-picker>
                <x-input title="" placeholder="请选择详细地址" v-model="value3" is-link @focus.native></x-input>
                <x-input title="" placeholder="邮政编码" v-model="value2" is-link @focus.native></x-input>
            </group>
            
        </div>
        <alert v-model="show">保存成功</alert>
        <div style='width:100%;height: 40px;'>
            <x-button style='height:100%;background: orangered;color:#fff;border-radius: 0;' @click.native='shows()'>保存地址</x-button>
        </div>
    </div>
</template>

<script>
    import router from '../router.js';
    import { XAddress, ChinaAddressData, XInput, Group ,PopupPicker,XButton,Alert} from 'vux';
    
    export default {
        components: {
            XAddress,
            Alert,
            PopupPicker,
            XButton,
            Group,
            XInput
        },
        data() {
            return {
                addressData: ChinaAddressData,
                street: [['骆驼街道', '孔浦街道', '葆春西路', '翠柏路']],
                value5: [''],
                value2: "",
                value3: "",
                show:false
            }
        },
        methods: {
            back() {
                router.go(-1);
            },
            shows(){
                this.show = true;
            }
        }
    }

</script>

<style>
    @import '../assets/back/iconfont.css';
    .vux-popup-mask {
        display: none !important;
    }
</style>