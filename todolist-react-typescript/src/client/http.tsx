import { any } from "prop-types";

export default (function () {


    var _defaultHeaders: any[] = [];

    return {
        get: get,
        post: post,

        setDefaultHeader: setDefaultHeader
    };

    // =====================================================================

    function get(url: any, headers: any) {
        return xhr('GET', url, null, headers);
    }

    function post(url: any, data: any, headers: any) {
        return xhr('POST', url, data, headers);
    }

    function setDefaultHeader(name: any, value: any) {
        var header = _defaultHeaders.find(h => h.name === name);
        if (header) {
            header.value = value;
        } else {
            _defaultHeaders.push({ 'name': name, 'value': value });
        }
    }

    // =====================================================================

    function xhr(method: any, url: any, data: any, headers: any) {

        var xhr: any = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var data = xhr.responseText;
                    xhr._cb && xhr._cb(data);
                } else {
                    xhr._err && xhr._err(xhr.responseText);
                }
            }
        };

        xhr.open(method, url, true);
        _defaultHeaders.forEach(function (h: any) {
            if (h.value === undefined || h.value === null) return;
            xhr.setRequestHeader(h.name, h.value);
        });

        (headers || []).forEach(function (h: any) {
            if (h.value === undefined || h.value === null) return;
            xhr.setRequestHeader(h.name, h.value);
        });
        xhr.send(data);

        return {
            then: function (cb: any, err: any) {
                xhr._cb = cb;
                xhr._err = err;
            }
        };

    }

})();