import VueRouter from 'vue-router'
import store from '../store'

const getModule = (path) => {
    //let basePath = ""
    let page = resolve => require(['../views/' + path], resolve)
    return page;
}
const routes = [
    { path: '/A107020', name: 'ucExcel01', component: getModule("Excel01") },
    { path: '/A000000', name: 'ucExcel02', component: getModule("Excel02") },
    { path: '/A100000', name: 'ucExcel03', component: getModule("Excel03") },
    { path: '/A101010', name: 'ucExcel04', component: getModule("Excel04") },
    { path: '/A102010', name: 'ucExcel05', component: getModule("Excel05") },
    { path: '/A104000', name: 'ucExcel06', component: getModule("Excel06") },
    { path: '/A105010', name: 'ucExcel07', component: getModule("Excel07") },
    { path: '/A105020', name: 'ucExcel08', component: getModule("Excel08") },
    { path: '/A105040', name: 'ucExcel09', component: getModule("Excel09") },
    { path: '/A105090', name: 'ucExcel10', component: getModule("Excel10") },
    { path: '/A105091', name: 'ucExcel11', component: getModule("Excel11") },
    { path: '/A105100', name: 'ucExcel12', component: getModule("Excel12") },
    { path: '/A105110', name: 'ucExcel13', component: getModule("Excel13") },
    { path: '/A105120', name: 'ucExcel14', component: getModule("Excel14") },
    { path: '/A106000', name: 'ucExcel15', component: getModule("Excel15") },
    { path: '/A107010', name: 'ucExcel16', component: getModule("Excel16") },
    { path: '/A107011', name: 'ucExcel17', component: getModule("Excel17") },
    { path: '/A107012', name: 'ucExcel18', component: getModule("Excel18") },
    { path: '/A107013', name: 'ucExcel19', component: getModule("Excel19") },
    { path: '/A107014', name: 'ucExcel20', component: getModule("Excel20") },
    { path: '/A107030', name: 'ucExcel21', component: getModule("Excel21") },
    { path: '/A107040', name: 'ucExcel22', component: getModule("Excel22") },
    { path: '/A107041', name: 'ucExcel23', component: getModule("Excel23") },
    { path: '/A107042', name: 'ucExcel24', component: getModule("Excel24") },
    { path: '/A107050', name: 'ucExcel25', component: getModule("Excel25") },
    { path: '/A108000', name: 'ucExcel26', component: getModule("Excel26") },
    { path: '/A108010', name: 'ucExcel27', component: getModule("Excel27") },
    { path: '/A108020', name: 'ucExcel28', component: getModule("Excel28") },
    { path: '/A108030', name: 'ucExcel29', component: getModule("Excel29") },
    { path: '/AproA', name: 'ucExcel30', component: getModule("Excel30") },
    { path: '/flowA', name: 'ucExcel31', component: getModule("Excel31") },
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