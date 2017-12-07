import axios from 'axios';
import * as qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;


function ajax(config, cb, errorCb) {
    config.timeout = 30000;
    let promise = axios.request(config);

    promise.then(function(res) {
        cb && cb(res.data);
    }).catch(function(error) {
        errorCb && errorCb("接口调用异常");
    });

    return promise;
}
//
export const getData = function(param, cb, errorCb) {
        let params = {
            url: param.url,
            method: "get",
            params: param.data
        };
        return ajax(params, cb, errorCb);
    }
    //
export const postData = function(param, cb, errorCb) {
    let params = {
        url: param.url,
        method: "post",
        data: param.data
    };
    return ajax(params, cb, errorCb);
}

export function getParams() {
    let hash = window.location.hash;
    let pos = hash.lastIndexOf('?');
    let hashParams = getQueryParams(hash.substring(pos));
    let params = getQueryParams();
    return $.extend({}, params, hashParams);
}
/**
 * 获得当前地址栏传递参数
 * @returns {null}
 */
export function getQueryParams(search) {
    search = search || window.location.search;
    var params = {},
        query,
        pos = search.indexOf('?');

    if (pos !== -1) {
        query = search.slice(pos + 1);
        if (query.length > 0) {
            params = {};
            query = query.split('&');
            query.forEach(function(param) {
                var tempParam = param.split('=');
                params[tempParam[0]] = decodeURIComponent(param.substring(param.indexOf('=') + 1, param.length));
            });
        }
    }
    return params;
}