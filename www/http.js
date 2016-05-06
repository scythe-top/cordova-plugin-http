/**
 * @auth lbempub@hotmail.com
 * @version 1.0
 */

/**
 * ScytheHttp
 * @constructor
 */
function ScytheHttp() {

    /*
     * @param opt {url, method, data, timeout, headers}
     * @param success function
     * @param failure function
     * @param timeout function
     */
    this.ajax = function (opt, success, failure, timeout) {
        var xhr = new XMLHttpRequest();

        xhr.timeout = opt.timeout;
        xhr.ontimeout = function () {
            timeout();
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var header = xhr.getAllResponseHeaders();
                var result = xhr.responseText;
                if (xhr.status == 200) {
                    success(result, header);
                } else if (xhr.status > 0) {
                    failure();
                }
            }
        };

        xhr.open(opt.method, opt.url, true);
        for (var i in opt.headers) {
            alert(opt.headers[i].name + "-" + opt.headers[i].value);
            xhr.setRequestHeader(opt.headers[i].name, opt.headers[i].value);
        }
        switch (opt.method) {
            case "GET":
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send();
                break;
            case "POST":
                xhr.setRequestHeader("Content-type", "text/plain");
                xhr.send(opt.data);
                break;
            case "PUT":
                xhr.setRequestHeader("Content-type", "text/plain");
                xhr.send(opt.data);
                break;
            case "DELETE":
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send();
                break;
        }
    };
}

var scytheHttp = new ScytheHttp();
module.exports = scytheHttp;
