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
    }
};



// init state

export default init(configs);