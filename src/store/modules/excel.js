import * as API from '../../utils'
import { init, formatUrl } from '../init'

const configs = {
    /***用户中心首页 */
    getTable: {
        url: formatUrl('getTable'),
        httpMethod: "post",
        defaultState: {}
    },
    edit: {
        url: formatUrl('edit'),
        httpMethod: "post",
        defaultState: {}
    }
};



// init state

export default init(configs);