import VueRouter from 'vue-router'
import store from '../store'

const getModule = (path) => {
    //let basePath = ""
    let page = resolve => require(['../views/' + path], resolve)
    return page;
}
const routes = [
    { path: '/excel01', name: 'ucExcel01', component: getModule("Excel01") },
    { path: '/excel02', name: 'ucExcel02', component: getModule("Excel02") },
    { path: '/excel03', name: 'ucExcel03', component: getModule("Excel03") },
    { path: '/excel04', name: 'ucExcel04', component: getModule("Excel04") },
];
const router = new VueRouter({
    //mode: 'history',
    routes: routes
})

export default router