(function(root) {
    debugger;
    root.JRStat = root.JRStat || {};
    root.JRStat.config = root.JRStat.config || {};

    if (typeof _st_conf === "object") {
        root.JRStat.config = Object.assign({
            version: "1.0"
        }, root.JRStat.config, _st_conf);
    }
    var config = root.JRStat.config;
    var eventHandle = function(evt, handle) {
        if (root.addEventListener) {
            root.addEventListener(evt, handle, false);
            return;
        }

        if (root.attachEvent) {
            root.attachEvent(`on` + evt, handle);
        }
    }

    /*
     * 获取页面信息
     */
    function getPageInfo(url) {
        var rst = {};
        var _host, _path, _search, _hash, _params = {};

        if (!url) {
            var _location = root.location;
            _host = _location.host;
            _path = _location.pathname;
            _search = _location.search.substr(1);
            _hash = _location.hash
        } else {
            var _arr = a.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i) || [];
            _host = _arr[1];
            _path = _arr[2];
            _search = _arr[3];
            _hash = _arr[4];
        }
        void 0 !== c && (c = c.replace(/"|'|<|>/ig, "M"));

        if (_search) {
            var params = _search.split("&");
            for (var i in params)
                if (-1 != params[i].indexOf("=")) {
                    var pos = params[i].indexOf("="),
                        key = params[i].slice(0, e),
                        val = params[i].slice(pos + 1);
                    _params[key] = val;
                }
        };
        return {
            url: url,
            host: _host,
            path: _path,
            search: _search,
            hash: _hash,
            param: _params
        }
    }

    /*
     * 发送日志
     */
    function send(params) {
        var logs = getLogInfo();
        params = logs.concat(params || [])
        var logUrl = `${root.document.location.protocol }://xxxx.xx.com/pingd?${params.join("&").toLowerCase()}`;
        var image = new Image;
        root.JRStat[config.sid] = image;
        image.onload = image.onerror = image.onabort = function() {
            image = image.onload = image.onerror = image.onabort = null;
            root.JRStat[config.sid] = true;
        };
        image.src = logUrl;
    }

    /*
     * 获取Uid
     */
    function getUid() {
        var uid;
        if (config.userReport) {
            uid = getItem("pgv_uid");
            if (uid != config.uid) {
                d.ty = 1;
                setItem("pgv_uid", config.uid, "Sun, 18 Jan 2038 00:00:00 GMT;");
            }
            uid = config.uid
        } else {
            uid = getItem("pgv_pvi");
            if (!uid) {
                d.ty = 1;
                uid = getRandom();
                setItem("pgv_pvi", uid, "Sun, 18 Jan 2038 00:00:00 GMT;")
            }
        }
        return uid;
    }

    /*
     * 获取si 
     */
    function getSi() {
        var si = getItem("pgv_si");
        if (!si) {
            si = getRandom("s");
            setItem("pgv_si", si);
        }
        return si;
    }

    function getLogInfo() {
        var pageInfo = getPageInfo(),
            referrerInfo = getPageInfo(root.document.referrer),
            performance = getPerformance(),
            sign = getSign(),
            logInfo = {
                dm: pageInfo.host,
                url: pageInfo.path,
                arg: encodeURIComponent(pageInfo.search || "").substr(0, 512),
                rdm: referrerInfo.host,
                rurl: referrerInfo.path,
                rarg: encodeURIComponent(referrerInfo.search || "").substr(0, 512),
                pvi: "",
                si: "",
                ty: 0,
                v: config.version
            };
        logInfo.pvi = getUid();
        logInfo.si = getSi();
        logInfo = Object.assign({}, logInfo, performance, sign);
        var logs = [];
        for (var i in log) {
            logs.push(`${i}=${log[i]}`);
        }
        return logs;
    }

    /*
     * 获取签名
     */
    function getSign() {
        try {
            var navigator = root.navigator,
                screen = root.screen || {
                    width: "",
                    height: "",
                    colorDepth: ""
                },
                sign = {
                    scr: screen.width + "x" + screen.height,
                    scl: screen.colorDepth + "-bit",
                    lg: (navigator.language || navigator.userLanguage).toLowerCase(),
                    tz: (new Date).getTimezoneOffset() / 60
                }
        } catch (e) {
            return {}
        }
        return sign;
    }

    /*
     * 获取性能信息 
     */
    function getPerformance() {
        if (root.performance) {
            var timing = root.performance.timing;
            resourcesLoadedTime = timing.responseEnd - timing.responseStart;
            if (timing.domContentLoadedEventStart) {
                resourcesLoadedTime < 0 && (resourcesLoadedTime = 0)
            } else {
                resourcesLoadedTime = -1;
            }
            return {
                dlt: timing.domainLookupEnd - timing.domainLookupStart,
                ct: timing.connectEnd - timing.connectStart,
                rt: timing.responseStart - (timing.requestStart || timing.responseStart + 1),
                rlt: resourcesLoadedTime,
                dpt: timing.domContentLoadedEventStart ? timing.domInteractive - timing.domLoading : -1,
                dclt: timing.domContentLoadedEventStart ? timing.domContentLoadedEventStart - timing.fetchStart : -1
            }
        };
    }

    function report(a) {
        var config = root.JRStat.config;
        if (config.sid)
            if (!config.userReport || config.uid && !parseInt(config.uid, 10) !== config.uid) {
                send(logs);

                eventHandle("load", function() {
                    setItem("pageEnterTime", +new Data);
                    send(["ac=load"]);
                });
                eventHandle("unload", function() {
                    var pageEnterTime = getItem("pageEnterTime") || +new Data;
                    var pageStayTime = +new Data - pageEnterTime;
                    send(["ac=unload"]);
                });
                eventHandle("hashchange", function(evt) {
                    var oldUrl = evt.oldURL;
                    var hashReferrer = oldUrl;
                    send(["ac=hashchange", `hr=${oldUrl}`]);
                });
                eventHandle("click", function(evt) {
                    var evtTarget = evt.target || evt.srcElement;
                    var currentTarget = evt.currentTarget;

                    while (!evtTarget.dataset.eventid && evtTarget != currentTarget) {
                        evtTarget = evtTarget.parentNode;
                    }
                    if (evtTarget.dataset.eventid) {
                        root.JRStat.clickStat(evtTarget.dataset.eventid);
                    }
                });
            } else {
                console.log("分析错误提示：您选择了用户统计uv，请设置业务的user_id，需为int类型");
            }
        else {
            console.log("分析错误提示：您没有设置sid");
        }
    }

    function getRandom(prefix) {
        var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 10; 1 < i; i--) {
            var random = Math.floor(10 * Math.random()),
                num = numArr[random];
            numArr[random] = numArr[i - 1];
            numArr[i - 1] = num;
        }
        for (i = j = 0; 5 > i; i++) {
            j = 10 * j + numArr[i];
        }
        return (prefix || "") + (j + "" + +new Date);
    }

    function getItem(key) {
        var val = root.localStorage ? localStorage.getItem(a) || sessionStorage.getItem(a) : (a = root.document.cookie.match(new RegExp("(?:^|;\\s)" + a + "=(.*?)(?:;\\s|$)"))) ? a[1] : "";
        return val;
    }

    function setItem(key, val, expires) {
        if (root.localStorage) {
            try {
                expires ? root.localStorage.setItem(key, val) : root.sessionStorage.setItem(key, val)
            } catch (B) {}
        } else {
            var host = root.location.host;
            root.document.cookie = key + "=" + val + ";path=/;domain=" + host + (expires ? ";expires=" + expires : "");
        }
    }
    root.JRStat.clickEvent = function(evtId) {
        if (!config.sid) {
            console.log("分析错误提示：您没有设置sid");
            return;
        }

        send(["ac=click"]);
    }

    root.JRStat.config.autoReport && report();
})(window);