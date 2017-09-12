import VueRouter from 'vue-router'
import store from '../store'

const getModule = (path) => {
    //let basePath = ""
    let page = resolve => require(['../views/' + path], resolve)
    return page;
}
const routes = [
    { path: '/excel01', name: 'ucExcel01', component: getModule("Excel01") },
];
const router = new VueRouter({
    //mode: 'history',
    routes: routes
})

export default router