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
    { path: '/excel05', name: 'ucExcel05', component: getModule("Excel05") },
    { path: '/excel06', name: 'ucExcel06', component: getModule("Excel06") },
    { path: '/excel07', name: 'ucExcel07', component: getModule("Excel07") },
    { path: '/excel08', name: 'ucExcel08', component: getModule("Excel08") },
    { path: '/excel09', name: 'ucExcel09', component: getModule("Excel09") },
    { path: '/excel10', name: 'ucExcel10', component: getModule("Excel10") },
    { path: '/excel11', name: 'ucExcel11', component: getModule("Excel11") },
    { path: '/excel12', name: 'ucExcel12', component: getModule("Excel12") },
    { path: '/excel13', name: 'ucExcel13', component: getModule("Excel13") },
    { path: '/excel14', name: 'ucExcel14', component: getModule("Excel14") },
    { path: '/excel15', name: 'ucExcel15', component: getModule("Excel15") },
    { path: '/excel16', name: 'ucExcel16', component: getModule("Excel16") },
    { path: '/excel17', name: 'ucExcel17', component: getModule("Excel17") },
    { path: '/excel18', name: 'ucExcel18', component: getModule("Excel18") },
    { path: '/excel19', name: 'ucExcel19', component: getModule("Excel19") },
    { path: '/excel20', name: 'ucExcel20', component: getModule("Excel20") },
    { path: '/excel21', name: 'ucExcel21', component: getModule("Excel21") },
    { path: '/excel22', name: 'ucExcel22', component: getModule("Excel22") },
    { path: '/excel23', name: 'ucExcel23', component: getModule("Excel23") },
    { path: '/excel24', name: 'ucExcel24', component: getModule("Excel24") },
    { path: '/excel25', name: 'ucExcel25', component: getModule("Excel25") },
    { path: '/excel26', name: 'ucExcel26', component: getModule("Excel26") },
    { path: '/excel27', name: 'ucExcel27', component: getModule("Excel27") },
    { path: '/excel28', name: 'ucExcel28', component: getModule("Excel28") },
    { path: '/excel29', name: 'ucExcel29', component: getModule("Excel29") },
    { path: '/excel30', name: 'ucExcel30', component: getModule("Excel30") },
    { path: '/excel31', name: 'ucExcel31', component: getModule("Excel31") },
    { path: '/excel32', name: 'ucExcel32', component: getModule("Excel32") },
    { path: '/excel33', name: 'ucExcel33', component: getModule("Excel33") },
    { path: '/excel34', name: 'ucExcel34', component: getModule("Excel34") },
    { path: '/excel35', name: 'ucExcel35', component: getModule("Excel35") },
    { path: '/excel36', name: 'ucExcel36', component: getModule("Excel36") },
    { path: '/excel37', name: 'ucExcel37', component: getModule("Excel37") },
    { path: '/excel38', name: 'ucExcel38', component: getModule("Excel38") },
    { path: '/excel39', name: 'ucExcel39', component: getModule("Excel39") }
];
const router = new VueRouter({
    //mode: 'history',
    routes: routes
})

export default router