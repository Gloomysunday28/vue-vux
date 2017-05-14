<template>
    <div class='another' style="display: -webkit-box; -webkit-box-orient: vertical;height:100%;position:absolute;" key='another'>
        <router-view></router-view>
    </div>
</template>

<script>
    import '../css/index.css'
    import router from '../router.js';
    import $ from 'jquery';
    import { Flexbox, XButton, FlexboxItem, XHeader, Search } from 'vux'

    export default {
        components: {
            Flexbox,
            FlexboxItem,
            XButton,
            XHeader,
            Search
        },
        methods: {
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult(val) {
                this.results = val ? getResult(this.value) : []
            },
            onFocus() {
                router.push('hello')
            },
            onCancel() {
       
            }
        },
        data() {
            return {
                results: [],
                value: 'test'
            }
        }
    }
    function getResult(val) {
        let rs = []
        for (let i = 0; i < 8; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }


</script>

<style>
    .another {
        width: 100%;
        height: 100%;
    }
    
    .vux-header {
        background: orangered !important;
        position: fixed !important;
        width: 100%;
        z-index: 9999;
        left: 0;
        top: 0;
    }
    
    .vux-search-box {
        position: fixed;
    }
    
    .faded-leave-active {
        transition: all 1s;
        position: absolute;
    }
    
    .faded-enter-active {
        transition: all 1s;
        position: absolute;
    }
    
    .faded-leave-active {
        opacity: 0;
        transform: translateX(-100%)
    }
    
    .faded-enter {
        opacity: 0;
        transform: translateX(100%)
    }
    
    .faded-enter-active,
    .faded-leave {
        opacity: 1;
        left: 0;
    }
    
    .foot {
        width: 100%;
        height: 0.98rem;
        border-top: 1px solid #777;
        position: relative;
        left: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(255, 255, 255, .8)
    }
    
    .foot a {
        width: 33.3%;
        height: 100%;
        display: block;
        text-align: center;
        /*line-height: 0.98rem;*/
    }
    
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: #fff;
        display: none;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #555;
    }
</style>