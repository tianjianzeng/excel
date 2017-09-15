import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store';
import router from './router'
import App from './App'
import axios from 'axios'
import * as Utils from './utils'
import VueAxios from 'vue-axios'
import $ from 'jquery'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);
/**
 * 把根组件挂载到 id 为 app 的 DOM 上
 * 自此，在外部就可通过 router.app 访问到根组件
 */
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

window.$ = $;

function showToast(msg) {
    window.root.$message.error(msg);
}

function renderApp() {
    let root = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    });

    // window.root = root;
    // //网关错误
    // root.$on("gateWayError", (rst) => {
    //     if (["100", "101", "102"].indexOf(rst.resultCode) > -1) {
    //         $.reLogin(rst.resultMsg);
    //     } else {
    //         showToast(rst.resultMsg);
    //     }
    // });

    //业务错误
    root.$on("bizError", showToast);

    //服务器错误
    root.$on("serverError", showToast);
}

window.query = Utils.getParams();
renderApp();