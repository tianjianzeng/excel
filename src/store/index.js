/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import excel from './modules/excel'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        excel
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式

});