import * as API from '../../utils'
import { init, formatUrl } from '../init'

const configs = {
    getEp: {
        url: formatUrl("v1/a000000/getEp"),
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
};



// init state

export default init(configs);