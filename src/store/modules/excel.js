import * as API from '../../utils'
import { init, formatUrl } from '../init'

const configs = {
    getEpA000000: {
        url: formatUrl("v1/a000000/getEp"),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA000000: {
        url: formatUrl("v1/a000000/get"),
        httpMethod: "post",
        defaultState: {}
    },
    addA000000: {
        url: formatUrl("v1/a000000/add"),
        httpMethod: "post",
        defaultState: {}
    },
    editA000000: {
        url: formatUrl("v1/a000000/edit"),
        httpMethod: "post",
        defaultState: {}
    },
    delInvestA000000: {
        url: function(param) {
            return formatUrl(`v1/a000000/delInvest/${param}`);
        },
        httpMethod: "post",
        defaultState: {}
    },
    editInvestA000000: {
        url: formatUrl("v1/a000000/editInvest"),
        httpMethod: "post",
        defaultState: {}
    },
    getTable: {
        url: formatUrl('v1/a107020/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    edit: {
        url: formatUrl('v1/a107020/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA101010: {
        url: formatUrl('v1/a101010/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA101010: {
        url: formatUrl('v1/a101010/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA102010: {
        url: formatUrl('v1/a101010/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA102010: {
        url: formatUrl('v1/a101010/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA104000: {
        url: formatUrl('v1/a104000/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA104000: {
        url: formatUrl('v1/a104000/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105010: {
        url: formatUrl('v1/a105010/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105010: {
        url: formatUrl('v1/a105010/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105110: {
        url: formatUrl('v1/a105110/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105110: {
        url: formatUrl('v1/a105110/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105020: {
        url: formatUrl('v1/a105020/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105020: {
        url: formatUrl('v1/a105020/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105090: {
        url: formatUrl('v1/a105090/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105090: {
        url: formatUrl('v1/a105090/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105091: {
        url: formatUrl('v1/a105091/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105091: {
        url: formatUrl('v1/a105091/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    addA105091: {
        url: formatUrl('v1/a105091/add'),
        httpMethod: "post",
        defaultState: {}
    },
    deleteA105091: {
        url: function(param) {
            return formatUrl(`v1/a105091/del/${param}`);
        },
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105100: {
        url: formatUrl('v1/a105100/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105100: {
        url: formatUrl('v1/a105100/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105120: {
        url: formatUrl('v1/a105120/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105120: {
        url: formatUrl('v1/a105120/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA107013: {
        url: formatUrl('v1/a107013/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA107013: {
        url: formatUrl('v1/a107013/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA108010: {
        url: formatUrl('v1/a108010/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA108010: {
        url: formatUrl('v1/a108010/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    addA108010: {
        url: formatUrl('v1/108010/add'),
        httpMethod: "post",
        defaultState: {}
    },
    delet108010: {
        url: function(param) {
            return formatUrl(`v1/a108010/del/${param}`);
        },
        httpMethod: "post",
        defaultState: {}
    },
    getCResult108010: {
        url: formatUrl('v1/a108010/getCResult'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableflowA: {
        url: formatUrl('v1/flowA/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editflowA: {
        url: formatUrl('v1/flowA/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableflowB: {
        url: formatUrl('v1/flowB/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editflowB: {
        url: formatUrl('v1/flowB/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableflowC: {
        url: formatUrl('v1/flowC/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editflowC: {
        url: formatUrl('v1/flowC/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA107012: {
        url: formatUrl('v1/a107012/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editA107012: {
        url: formatUrl('v1/a107012/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    addA107012: {
        url: formatUrl('v1/a107012/add'),
        httpMethod: "post",
        defaultState: {}
    },
    deleteA107012: {
        url: function(param) {
            return formatUrl(`v1/a107012/del/${param}`);
        },
        httpMethod: "post",
        defaultState: {}
    },
    getResearch: {
        url: formatUrl('v1/research/get'),
        httpMethod: "post",
        defaultState: {}
    },
    editResearch: {
        url: formatUrl('v1/research/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    add2Research: {
        url: formatUrl('v1/research/add2'),
        httpMethod: "post",
        defaultState: {}
    },
    edit2Research: {
        url: formatUrl('v1/research/edit2'),
        httpMethod: "post",
        defaultState: {}
    },
    delResearch: {
        url: function(param) {
            return formatUrl(`v1/research/del/${param}`);
        },
        httpMethod: "post",
        defaultState: {}
    },
    getTableA105040: {
        url: formatUrl('v1/a105040/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA105040: {
        url: formatUrl('v1/a105040/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA106000: {
        url: formatUrl('v1/a106000/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA106000: {
        url: formatUrl('v1/a106000/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA107010: {
        url: formatUrl('v1/a107010/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA107010: {
        url: formatUrl('v1/a107010/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    getTableA107011: {
        url: formatUrl('v1/a107011/getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    editA107011: {
        url: formatUrl('v1/a107011/edit'),
        httpMethod: "post",
        defaultState: {}
    },
    addA107011: {
        url: formatUrl('v1/a107011/add'),
        httpMethod: "post",
        defaultState: {}
    },
    deleteA107011: {
        url: formatUrl('v1/a107011/del'),
        httpMethod: "post",
        defaultState: {}
    }
};



// init state

export default init(configs);