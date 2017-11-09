import moment from 'moment';
/*
金额格式化
    */
export function formatCurrency(s, fixed = 2) {
    if (!/^(-?\d+)(\.\d*)?$/.test(s)) {
        return 'invalid value';
    }

    let sign = '';
    s = Number(s);
    if (s < 0) {
        sign = '-';
    } else {
        sign = '';
    }
    s = Math.abs(s);
    if (/^\d+$/.test(s)) {
        return (sign + (s + '').replace(/\B(?=(\d{3})+$)/g, ',') + '.' + "".padStart(fixed, "0"));
    }
    if (/^(\d+)\.(\d+)$/.test(s)) {
        s = s + '0';
        var v = s.split('.');
        var f = (v[0] + '').replace(/\B(?=(\d{3})+$)/g, ',');
        var h = v[1].substring(0, fixed);
        return (sign + f + '.' + h);
    }
}


export function formatDate(dateTime, type = "YYYY/MM/DD") {
    if (!dateTime) {
        return "--";
    }
    return moment(dateTime).format(type);
}

export function formatYear(year) {
    let arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    let idx = new Date().getYear() + 1898 - year;
    if (idx == -1) {
        return "本年";
    }
    return `前${arr[idx]}年度`;
}

export function filter(input, fn) {
    let arg = Array.prototype.slice.call(arguments, 2);
    arg.unshift(input);
    return fn.apply(null, arg);
}