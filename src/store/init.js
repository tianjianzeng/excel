import * as Util from '../utils'
import Vue from 'vue'
export const init = function(configs) {
    const defautExpire = 0;
    let getters = {};
    let actions = {};
    let mutations = {};
    let state = {}
    for (let i in configs) {
        let method = i;
        let config = configs[i];
        state[method] = {
            cacheTime: (+new Date()),
            data: config.defaultState
        };
        getters[method] = (state) => {
            let dataWarp = state[method];
            return dataWarp && dataWarp.data;
        };
        actions[method] = ({ commit }, opts) => {
            opts = opts || {};
            //如果存在url则请求服务器数据，否则，直接调用commit
            if (!config.url) {
                commit(method, opts.data);
                return;
            }

            let expire = config.expire;
            if (isNaN(expire) || expire < 0) {
                expire = defautExpire;
            }
            if (opts.expire) {
                expire = opts.expire;
            }
            let dataWarp = state[method];
            let passedTime = (+new Date()) - dataWarp.cacheTime;
            if (passedTime < expire && (dataWarp.data != config.defaultState)) {
                commit(method, dataWarp.data);
            } else {
                let callback = opts.callback || function(rst) {
                    //网关返回失败
                    if (rst.status != 0) {
                        //网关返回的错误
                        if (opts.error) {
                            opts.error(rst);
                        } else {
                            commit(method, config.defaultState);
                            window.root && window.root.$emit("gateWayError", rst);
                        }
                    } else {
                        let result = rst.data;
                        if (config.process) {
                            result = config.process(result);
                        }
                        commit(method, result);
                    }
                };

                let httpMethod = config.httpMethod || "get";
                httpMethod = httpMethod.toLowerCase() + "Data";
                let promise = Util[httpMethod]({
                    url: config.url,
                    data: opts.data,
                    withOutAccessKey: opts.withOutAccessKey
                }, (rst) => {
                    try {
                        callback(rst);
                    } catch (ex) {
                        commit(method, config.defaultState);
                        if (opts.error) {
                            opts.error("系统现在有点忙，稍后再试试~");
                        } else {
                            window.root && window.root.$emit("bizError", "系统现在有点忙，稍后再试试~");
                        }
                    } finally {
                        opts.always && opts.always();
                    }
                }, (msg) => {
                    commit(method, config.defaultState);
                    if (opts.error) {
                        opts.error(msg);
                    } else {
                        window.root && window.root.$emit("serverError", msg);
                    }
                    opts.always && opts.always();
                });
            }
        };
        mutations[method] = (state, data) => {
            let dataWrap = state[method];
            //强制更新缓存时间，使其过期时间延长
            if (config.forceUpdate) {
                dataWrap.cacheTime = (+new Date());
            }

            dataWrap.data = data;
        };
    }

    return {
        state,
        getters,
        actions,
        mutations
    }
}


export const formatUrl = function(url) {
    return `${bizBaseApiUrl}/${url}`;
}